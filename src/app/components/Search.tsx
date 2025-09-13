type SearchProps = {
    placeHolder:string,
    searchHandler:(query:string,defaultCollection:Array<any>)=>void,
    defaultCollection:Array<any>
}
export default function Search({searchHandler,placeHolder, defaultCollection}:SearchProps) {
    
    return (
        <div className="flex justify-center item-center p-3 mt-8 mb-8">
            <div className='p-3  h-[10%] w-[85%] rounded'>
                <div className='bg-white  flex justify-between items-center p-2 shadow'>
                    <input type='text' onChange={(el)=>{
                        searchHandler(el.target.value,defaultCollection);
                        } } className='p-2 rounded w-[95%] outline-none' placeholder={placeHolder} />
                </div>
            </div>
        </div>
    )
}