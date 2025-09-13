"use client"

import ProductCard from "@/app/components/Card";
import { CardsSkeleton } from "@/app/components/skeleton/CardSkeleton";
import { IP } from "@/lib/ip";
import { Product } from "@/types/product";
import { Suspense, useEffect, useState } from "react";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [lastCreated, setLastCreated] = useState(null);

    const fetchHandler = ()=>{
        fetch(`${IP}products${lastCreated ? `/last/ ${lastCreated}` : ''}`)
            .then((response) => response.json())
            .then(({ data, last_created_at }) => { setProducts((prev)=>prev.concat(data)); setLastCreated(last_created_at) });
    }

    useEffect(() => {
        fetchHandler();
    }, []);


    return (
        <div>
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Suspense fallback={<CardsSkeleton/>}>
                { products.map((product: Product) => <ProductCard key={product.code} product={product}/>)}
            </Suspense>
            </div>
            {products.length > 0 && 
            <div className="flex justify-center p-5">
                <button className="bg-black text-white p-3  cursor-pointer shadow hover:shadow-lg">Ver Mais</button>
            </div>
            }
        </div>
    );
}