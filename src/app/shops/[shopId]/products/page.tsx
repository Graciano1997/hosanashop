"use client"

import ProductCard from "@/app/components/Card";
import Search from "@/app/components/Search";
import { CardsSkeleton } from "@/app/components/skeleton/CardSkeleton";
import { IP } from "@/lib/ip";
import removeDuplicate from "@/lib/removeDuplicate";
import { Product } from "@/types/product";
import { Suspense, useContext, useEffect, useState } from "react";

export default function Home() {

    const [products, setProducts] = useState(Array<Product>);
    const [defaultProductsCollection, setDefaultProductsCollection] = useState(Array<Product>);
    const [lastCreated, setLastCreated] = useState(null);
    const [dispatch,setDispatch]=useState(true);
    const [lastCreatedCategory, setLastCreatedCategory] = useState(null);
    const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchHandler();
  }, []);


    const categoryFetcher = ()=>{
        fetch(`${IP}categories${lastCreated ? `/last/ ${lastCreated}` : ''}`)
        .then((response) => response.json())
        .then(({ data, last_created_at }) => { setCategories((prev) => prev.concat(data)); setLastCreatedCategory(last_created_at) });
    }

    const fetchHandler = ()=>{
        fetch(`${IP}products${lastCreated ? `/last/ ${lastCreated}` : ''}`)
        .then((response) => response.json())
        .then(({ data, last_created_at }) => { setDefaultProductsCollection((prev)=>removeDuplicate(prev.concat(data),"id") ); setProducts((prev)=>removeDuplicate(prev.concat(data),"id")); setLastCreated(last_created_at) });
        }

    useEffect(() => {
        fetchHandler();
        categoryFetcher();
    },[]);

        useEffect(() => {
        fetchHandler();
    },[dispatch]);

    function SearchHandler(query:string, defaultCollection:Array<Product>, category: number){
        const products = defaultCollection;
 
        let items:Array<any> = category == 0 ? products : products.filter((product:Product)=>product.category_id==category);

        if(query!=''){
            query=query.trim();
            items=items.filter((product:Product)=>product.name.toLowerCase().includes(query?query.toLowerCase():""));
        }
        setProducts(items);
    }

    return (
        <div>
            <Search categories={categories} defaultCollection={defaultProductsCollection}  placeHolder="Pesquisar Produtos" searchHandler={SearchHandler}/>
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Suspense fallback={<CardsSkeleton/>}>
                { products.map((product: Product) => <ProductCard key={product.code} product={product}/>)}
            </Suspense>
            </div>
            {products.length > 0  && lastCreated && 
            <div className="flex justify-center p-5">
                <button onClick={()=>setDispatch(!dispatch)}  className="bg-black text-white p-3  cursor-pointer shadow hover:shadow-lg">Ver Mais</button>
            </div>
            }
            {
                products.length == 0 &&
                 <p className="text-center font-semibold">colecao vasia</p>
            }
        </div>
    );
}