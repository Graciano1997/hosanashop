"use client"

import { useParams } from "next/navigation";

export default function Home(){
    const params = useParams();
    
    return (
    <section className="font-sans bg-green-200 text-black">
        <h1>Be Wellcome at {params.shopId} Shop</h1>
    </section>
    );
};
