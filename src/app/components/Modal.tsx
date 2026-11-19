type ModalProps = {
    children: React.ReactNode,
    closeHandler: ()=>void
}

const Modal = ({children, closeHandler }: ModalProps)=>{
    return(
        <>
         <div className="fixed inset-0 z-[3000] flex items-center justify-center p-3 sm:p-6">

      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeHandler}
      />

        <div className='fixed  bg-black/20 w-[100%] h-[100%] items-center top-[0] left-[0] flex justify-center
        
         p-4 sm:p-6
        animate-in fade-in zoom-in-95 duration-200'>

         <button onClick={closeHandler} className="absolute text-red-500 text-xl bg-white p-2 shadow  right-[5px] top-[5px] transition-all duration-200 hover:bg-red-400 hover:text-white cursor-pointer" style= {{zIndex:3000}} >X</button>
         <div className='lg:w-[80vw] p-2 mt-[2rem] bg-white' style={{zIndex:3000}}>
            {children} 
         </div>
        </div>
        </div>
    </>);
};

export default Modal;
