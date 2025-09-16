import { ProductProps } from "@/types/product";
import Money from "./Money";
import Image from "next/image";
import Modal from "./Modal";
import { useContext, useState } from "react";
import DefaultButton from "./DefaultButton";
import { ShopContext } from "../hooks/ShopContext";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function ProductCard({ product }: ProductProps) {
  const [visible, setVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { cart, addItem, removeItem } = useContext(ShopContext);
  product.isAddedHandler = ()=>{setIsAdded(false)};
  
  return (
    <>
      <div className="bg-white/50  shadow hover:shadow-lg transition overflow-hidden p-4">
        <div className="h-[150px]">
          <img
            className="w-[100%] h-[100%] object-fill"
            src={product.image ?? ""}
          />
        </div>

        {/* Conteúdo */}
        <div className="p-4 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
          <p className="text-purple-600 font-bold text-xl"><Money amount={Number(product.price)} /></p>
          <p onClick={() => { setVisible(true) }} className="text-blue-400 font-light text-md cursor-pointer">Sobre</p>
          <DefaultButton isAdded={isAdded} text="Adicionar ao Carrinho" extraStyle={""} actionHandler={() => { if(!isAdded){addItem(product, 1);} setIsAdded(true); }} />
        </div>
      </div>
      {visible &&
        <div className="absolute">
          <Modal closeHandler={() => { setVisible(false) }}>
            <div className="h-full md:flex">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 shadow-md self-center overflow-y-scroll">
                {/* Image */}
                <div className="flex justify-center items-center">
                  {product.image ? (
                    <img
                      className="max-h-80 object-contain dark:invert"
                      src={product.image}
                      alt={product.name}
                    />
                  ) : (
                    <Image
                      className="dark:invert"
                      src="/next.svg"
                      alt="Next.js logo"
                      width={180}
                      height={38}
                      priority
                    />
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <p className="text-2xl text-green-600 font-semibold">
                    <Money amount={product.price} />
                  </p>
                  <p><span className="font-semibold">Acerca:</span> {product.observation}</p>
                  <p><span className="font-semibold">Categoria:</span> {product.category}</p>
                  <p><span className="font-semibold">Em stock:</span> {product.in_stock}</p>
                  <p><span className="font-semibold">Marca:</span> {product.brand}</p>
                  <div className="flex gap-5 self-end">
                    {isAdded &&
                    <button
                      onClick={() => {removeItem(product); setIsAdded(false);}}
                      className="bg-red-600 text-white text-sm hover:bg-red-700 focus:bg-red-700 transition-colors duration-200 mt-5 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer py-2 p-3"
                    >
                      <span className="flex items-center justify-center gap-4 ">
                        <TrashIcon className="w-5 h-5" />Remover
                      </span>
                    </button>
                    }
                    <DefaultButton isAdded={isAdded} text="Adicionar ao Carrinho" extraStyle={"p-3"} actionHandler={() => { if(!isAdded){addItem(product, 1);}  setIsAdded(true); }} />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      }
    </>
  );
}
