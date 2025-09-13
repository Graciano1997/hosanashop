"use client"

import { redirect } from "next/navigation"
import Modal from "./Modal"
import { useState } from "react"

export default function Checkout() {
const [checkoutVisibility,setCheckoutVisibility]=useState(false);

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
      <p>GRA</p>
    </Modal>

    }

    </>
  )
}