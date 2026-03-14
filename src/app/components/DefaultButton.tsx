import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

type DefaultButtonProps = {
    text: string;
    extraStyle: string | null;
    actionHandler: () => void;
    isAdded: boolean | null;
}

export default function DefaultButton({ text, actionHandler, extraStyle, isAdded=false }: DefaultButtonProps) {

    return (
        <button className={`hover:bg-purple-700  mt-5 cursor-pointer bg-purple-600 text-white ${extraStyle} py-2  flex items-center justify-center transition-all duration-200`} onClick={actionHandler}>
               {isAdded ? (
                    <><CheckCircleIcon className="w-5 h-5 mr-2" /> <span>Produto Adicionado</span> </>     
            ) : (
                <><ShoppingBagIcon className="w-5 h-4 mr-2" /><span>{text}</span>  </>
            )}
        </button>
    )
}
