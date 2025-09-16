"use client"
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShopContext } from "../hooks/ShopContext";

export default function ShoppingBagIconNumber(){
    const {cart}=useContext(ShopContext);
    return(
        <div>
            <p className="absolute top-0 right-17 font-bold text-purple-900">{cart.qty}</p>
            <ShoppingBagIcon className="w-10- h-8 text-purple-900 cursor-pointer"/>
        </div>
    )
}