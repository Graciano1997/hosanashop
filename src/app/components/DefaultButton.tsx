import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";




type DefaultButtonProps = {
    text: string;
    extraStyle: string | null;
    actionHandler: () => void;
    isAdded: boolean | null;
}


export default function DefaultButton({ text, actionHandler, extraStyle, isAdded=false }: DefaultButtonProps) {

    return (
        <button
            className={`hover:bg-purple-700 transition mt-5 cursor-pointer bg-purple-600 text-white ${extraStyle} py-2 `}
            onClick={actionHandler}
        >
               {isAdded ? (
                <span className="flex items-center justify-center ">
                    <CheckCircleIcon className="w-5 h-5 mr-2" /> Produto Adicionado
                </span>
            ) : (
                <span className="flex items-center justify-center ">
                    <ShoppingBagIcon className="w-5 h-5 mr-2" />{text} </span>
            )}
        </button>
    )
}
