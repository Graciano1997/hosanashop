import { ShoppingBagIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import ShoppingBagIconNumber from "./ShoppingBagNumber";

type HeaderProp = {
    content:string
};

export default function Header({content}:HeaderProp){
    return(
        <header className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-2xl font-bold text-purple-700">{content}</h1>
        <div className="flex gap-4">
            <ShoppingBagIconNumber/>
        <UserIcon className="w-10 h-8 text-purple-900 cursor-pointer" />
        </div>
      </header>
    )
}