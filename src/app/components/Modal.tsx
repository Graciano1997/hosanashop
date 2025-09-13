type ModalProps = {
    children: React.ReactNode,
    closeHandler: ()=>void
}

const Modal = ({children, closeHandler }: ModalProps)=>{
    return(
        <>
        <div className="flex items-center ">
        <div className="fixed w-[100%] h-[100%] top-[0] left-[0]  blur-md">
        </div>
        <div className='fixed  bg-black/20 w-[100%] h-[100%] top-[0] left-[0] flex justify-center '>
         <button onClick={closeHandler} className="absolute text-red-500 text-xl bg-white p-2 shadow  right-[5px] top-[5px] transition-all duration-200 hover:bg-red-400 hover:text-white cursor-pointer" style= {{zIndex:3000}} >X</button>
         <div className='p-2 mt-[2rem]  w-[90%]  h-[90%] bg-white' style={{zIndex:2025}}>
            {children} 
         </div>
        </div>
        </div>
    </>);
};

export default Modal;
