import { ShoppingBagIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import ShoppingBagIconNumber from "./ShoppingBagNumber";
import { useContext } from "react";
import { AppContext } from "../hooks/AppContext";

type HeaderProp = {
    content:string
};

export default function Header({content}:HeaderProp){
    const {appState} = useContext(AppContext);
    console.log(appState);
    return(
        <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-2xl font-bold text-[#5b2be0]">{content}</h1>
        <div className="flex gap-4 items-center">
        
        <nav className="space-x-6 text-gray-700 font-medium">
        <a href={`/shops/${appState.slug}/`} className="hover:text-purple-600 transition">
          Home
        </a>
        <a href={`/shops/${appState.slug}/products`} className="hover:text-purple-600 transition">
          Produtos
        </a>
        <a href={`/conta`} className="hover:text-purple-600 transition">
          Minha Conta
        </a>
      </nav>
            <ShoppingBagIconNumber/>
        </div>
      </header>
    )
}