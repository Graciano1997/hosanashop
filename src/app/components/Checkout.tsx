"use client"

import Modal from "./Modal"
import React, { useContext, useEffect, useState } from "react"
import { IP } from "@/lib/ip";
import { Product } from "@/types/product";
import Money from "./Money";
import { ShopContext } from "../hooks/ShopContext";
import { ProductShoppingCartItem } from "@/types/shopping";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import DefaultButton from "./DefaultButton";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Checkout() {
  const [checkoutVisibility, setCheckoutVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [lastCreated, setLastCreated] = useState(null);
  const { cart, removeItem, updateItem } = useContext(ShopContext)

  const fetchHandler = () => {
    fetch(`${IP}products${lastCreated ? `/last/ ${lastCreated}` : ''}`)
      .then((response) => response.json())
      .then(({ data, last_created_at }) => { setProducts((prev) => prev.concat(data)); setLastCreated(last_created_at) })

  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="fixed right-4 bottom-6 p-3 flex items-center" style={{ zIndex: 1000 }}>
        {!checkoutVisibility && (cart.items.length > 0 && cart.total > 0) && (
          <button
            onClick={() => setCheckoutVisibility(true)}
            className="flex items-center bg-black/80 text-white px-4 py-2 cursor-pointer  shadow-lg text-lg hover:bg-black/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Abrir carrinho de compra"
          >
            <ShoppingBagIcon className="w-5 h-5 mr-2" />
            Comprar
          </button>
        )}
      </div>

      {
        checkoutVisibility &&
        <Modal closeHandler={() => { setCheckoutVisibility(false) }}>
          <>
            {cart.total > 0 &&
              <div className="p-3">
                <div className="hidden fixed w-[87%] md:grid md:grid-cols-6 gap-4 shadow p-2 pl-3 items-center">
                  <p><span className="text-md font-semibold">Foto</span></p>
                  <p><span className="text-md font-semibold">Nome</span></p>
                  <p><span className="text-md font-semibold">Preco</span></p>
                  <p><span className="text-md font-semibold">Qty</span></p>
                  <p><span className="text-md font-semibold">Total</span></p>
                  <div></div>
                </div>

                <div className="h-[350px] mt-10 overflow-y-scroll">
                  {cart.items.map((product: ProductShoppingCartItem) =>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 shadow p-2 items-center">
                      <div className=""><img className="h-[100%]" src={product.item.image ? product.item.image : ""} /> </div>
                      <p><span className="md:hidden text-md font-semibold">Nome: </span>{product.item.name}</p>
                      <p><span className="md:hidden text-md font-semibold"> Preco: </span> <span className="text-md font-semibold text-green-600"><Money amount={product.item.price} /></span></p>
                      <div className="flex gap-2">
                        <span className="md:hidden text-md font-semibold">Qty: </span>
                        <input className="w-20" type="number"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const value = parseInt(e.target.value, 10);
                            if (!isNaN(value)) {
                              updateItem(product.item, value);
                            }
                          }}

                          name="qty" id="" defaultValue={product.qty} min={1} />
                      </div>
                      <p><span className="md:hidden text-md font-semibold">Total: </span> <Money amount={product.subTotal} /></p>
                      <button
                        onClick={() => removeItem(product.item)}
                        className="bg-red-600 text-white p-2 text-sm hover:bg-red-700 focus:bg-red-700 transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
                      >
                        <span className="flex items-center justify-center gap-4 ">
                          <TrashIcon className="w-5 h-5" />Remover
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center mt-10">
                  <p><span className="font-bold text-red-600 text-xl md:text-2xl">Total:</span> <span className="font-bold text-black text-xl md:text-2xl"><Money amount={cart.total} /></span></p>
                  <button className="bg-black text-white w-40 p-2 cursor-pointer">Confirmar</button>
                </div>
              </div>
            }
            {cart.total == 0 &&
              <div className="flex flex-col items-center justify-center h-[100%] p-4">
                <p className="font-bold text-2xl text-black text-center">
                  Carrinho vazio — vamos começar suas compras?
                </p>
                <ShoppingBagIcon className="w-15 h-15 text-black-200 mt-2" />
                <DefaultButton isAdded={false} text="Continuar comprando" extraStyle={'p-5'} actionHandler={() => setCheckoutVisibility(false)} />
              </div>


            }
          </>
        </Modal>

      }

    </>
  )
}