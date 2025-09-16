type DefaultButtonProps = {
    text: string,
    extraStyle: string | null
    actionHandler: () => void,
}


export default function DefaultButton({ text, actionHandler, extraStyle }: DefaultButtonProps) {

    return (
        <button
            className={`hover:bg-purple-700 transition mt-5 cursor-pointer bg-purple-600 text-white ${extraStyle} py-2 `}
            onClick={actionHandler}
        >
            {text}
        </button>
    )
}
