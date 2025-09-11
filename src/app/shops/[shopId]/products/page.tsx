"use client"

import ProductCard from "@/app/components/Card";
import { IP } from "@/lib/ip";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

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
                { products.map((product: Product) => <ProductCard key={product.code} product={product} />)}
            </div>
            <div className="flex justify-center p-5">
                <button className="bg-purple-600 text-white p-3 rounded-[10px] cursor-pointer">Load more</button>
            </div>
        </div>
    );
}