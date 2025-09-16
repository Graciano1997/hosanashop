import { useState } from "react";

type SearchProps = {
    placeHolder: string,
    searchHandler: (query: string | null, defaultCollection: Array<any>, category: number | null) => void,
    defaultCollection: Array<any>,
    categories: Array<any>
}
export default function Search({ categories, searchHandler, placeHolder, defaultCollection }: SearchProps) {
    const[category,setCategory]= useState(0);
    const[query,setQuery]=useState('');

    return (
        <div className="flex justify-center item-center p-3 mt-8 mb-8">
            <div className='p-3  h-[10%] w-[85%] rounded'>
                <div className='bg-white  flex justify-between items-center p-2 shadow'>
                    <input type='text' onChange={(el) => {
                        searchHandler(el.target.value, defaultCollection,category);
                        setQuery(el.target.value);
                    }} className='p-2 rounded w-[95%] outline-none' placeholder={placeHolder} />
                    <select name="category" id="" onChange={(el:any)=>{
                        searchHandler(query, defaultCollection,el.target.value);
                        setCategory(el.target.value);
                        }} className="cursor-pointer shadow p-2">
                        <option className="bg-red-200" disabled>Categorias</option>
                        <option value={0}>Diversos</option>
                        {
                            categories.map((category: any) =>
                                <option key={"cat"+category.id} value={category.id} className="p-1 cursor-pointer ">
                                    {category.name}
                                </option>
                            )
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}