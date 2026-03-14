"use client"
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShopContext } from "../hooks/ShopContext";

export default function ShoppingBagIconNumber(){
    const {cart}=useContext(ShopContext);
    return(
        <div>
            {cart.qty>0 && <p className="absolute top-0 right-17 font-bold text-purple-900">{cart.qty}</p>}
            <ShoppingBagIcon className="w-6 h-6 hover:text-purple-600 transition cursor-pointer"/>
        </div>
    )
}