"use client"

import { redirect } from "next/navigation"
import Modal from "./Modal"
import { useEffect, useState } from "react"
import { IP } from "@/lib/ip";
import { Product } from "@/types/product";
import Money from "./Money";
import totalCalc from "@/lib/totalCalc";

export default function Checkout() {
const [checkoutVisibility,setCheckoutVisibility]=useState(false);
    const [products, setProducts] = useState([]);
    const [lastCreated, setLastCreated] = useState(null);

    const fetchHandler = ()=>{
        fetch(`${IP}products${lastCreated ? `/last/ ${lastCreated}` : ''}`)
            .then((response) => response.json())
            .then(({ data, last_created_at }) => { setProducts((prev)=>prev.concat(data)); setLastCreated(last_created_at) })
            
    }

    useEffect(() => {
        fetchHandler();
    }, []);

  return (
    <>
    <div className={`fixed right-2 bottom-5  p-3   flex items-center`} style={{ zIndex: 1000 }}>
      {!checkoutVisibility &&
        <button onClick={() => {
          setCheckoutVisibility(true); 
         }} className="text-xl bg-black/70 text-white p-2 shadow transition-all duration-200  cursor-pointer"  >Comprar</button>
      }
    </div>
    {
      checkoutVisibility &&
    <Modal closeHandler={()=>{setCheckoutVisibility(false)}}>
      <>
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
        {products.map((product:Product)=>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 shadow p-2 items-center">
          <div className=""><img className="h-[100%]" src={product.image?product.image:""}/> </div>
          <p><span className="md:hidden text-md font-semibold">Nome: </span>{product.name}</p>
          <span className="md:hidden text-md font-semibold"> Preco: <span className="md:hidden text-md font-semibold text-green-600"><Money amount={product.price}/></span></span>
          <div className="flex gap-2">
            <span className="md:hidden text-md font-semibold">Qty: </span>
            <input className="w-20" type="number"  name="qty" id="" defaultValue={product.in_stock} min={1}/>
           </div>
          <p><span className="md:hidden text-md font-semibold">Total: </span> <Money amount={product.price*product.in_stock}/></p>
          <button className="bg-red-300 p-2 text-white">Remover</button>
      </div>
        )}
        </div>
          <div className="flex justify-between items-center mt-10">
          <p><span className="font-bold text-red-600 text-xl md:text-2xl">Total:</span> <span className="font-bold text-black text-xl md:text-2xl"><Money amount={ 3000 }/></span></p>
          <button className="bg-black text-white w-40 p-2 cursor-pointer">Confirmar</button>
          </div>
        </div>
        </>
    </Modal>

    }

    </>
  )
}