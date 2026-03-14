"use client"
import { AppContext } from "@/app/hooks/AppContext";
import { ShopContext } from "@/app/hooks/ShopContext";
import { IP } from "@/lib/ip";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { fetcherHandlerGeneric } from "./products/page";
import { uniqueId } from "@/types/unique";
import ProductCard from "@/app/components/Card";

export default function Home() {
    const params = useParams();
    const { shopId } = params;
    const { appState } = useContext(AppContext);
    const [categories, setCategories] = useState(Array<Category>);
    const [products, setProducts] = useState(Array<Product>)

    const categoryUrl = `${IP}${appState.id}/categories`
    const productUrl = `${IP}${appState.id}/products`

    const categorySetter = (data: any, last_created_at: any) => {
        const newCategories = categories.concat(data);
        setCategories(newCategories);
    }

    const productSetter = (data: any, last_created_at: any) => {
        const newProducts = products.concat(data);
        setProducts(newProducts)
    }

    useEffect(() => {
        fetcherHandlerGeneric(categoryUrl, categorySetter);
        fetcherHandlerGeneric(productUrl, productSetter);
    }, []);

    return (
        <div className="font-sans p-7 pb-5">

            {/* <div className="relative h-90 shadow-lg mt-2 flex flex-col gap-4 purple-glow">
            <div className="aspect-[16/9]">
            <img src="/fruits.jpg" alt="image" className="h-full w-full object-fill" />
            </div>
            <div className="absolute bg-white/60 bottom-0 w-full p-4">
            <h1 className="text-left text-[40px] font-bold">GRACIANO SALES</h1>
            <p className="text-gray-700">Graciano Henrique a primeira e melhor empresa do mundo de transportacao de bens de primeira mao.........</p>
            </div>
        </div> */}

            <div className="relative shadow-lg mt-2 flex flex-col gap-4 purple-glow">
                <div className="aspect-[16/9] w-full md:h-70">
                    <img
                        src="/fruits.jpg"
                        alt="image"
                        className="h-full w-full object-fill rounded-lg"
                    />
                </div>

                {/* Overlay content if needed */}
                {/* <div className="absolute bg-white/60 bottom-0 w-full p-4">
            <h1 className="text-left text-[40px] font-bold">GRACIANO SALES</h1>
            <p className="text-gray-700">
            Graciano Henrique a primeira e melhor empresa do mundo de transportacao de bens de primeira mao...
            </p>
        </div> */}
            </div>


            <div className="mt-10 md:mt-15 grid grid-cols-1 md:grid-cols-[10fr_50fr_50fr] gap-3 md:gap-7">
                <div className="p-3">
                    <h1 className="text-xl font-semibold drop-shadow-lg">Categorias</h1>
                    <ul className="p-3 flex flex-col gap-3 mt-5">
                        {categories.map((category: Category) => <li className="font-light" key={category.name + uniqueId()}> <a className="hover:text-purple-600 transition" href="">{category.name}</a></li>)}
                    </ul>

                </div>
                <div className="p-3  ">
                    <h1 className="text-xl font-semibold drop-shadow-lg">Produtos em destaques</h1>

                    <div className="grid grid-cols-2 mt-10 gap-4 justify-center">
                        {products.map((product: Product) => <ProductCard extraStyle="purple-glow" key={product.code + uniqueId()} product={product} />)}
                    </div>

                </div>
                <div className="p-3 ">
                    <h1 className="text-xl font-semibold drop-shadow-lg">Novos Produtos</h1>
                    <div className="grid grid-cols-2 mt-10 gap-4 justify-center">
                        {products.map((product: Product) => <ProductCard extraStyle="" key={product.code + uniqueId()} product={product} />)}
                    </div>
                </div>
            </div>

            <div id="about" className="mt-10 md:mt-20 p-3">
                <h1 className="text-xl font-semibold drop-shadow-lg">Acerca da Loja</h1>

                <div className="mt-3 text-md text-gray-700">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus mollitia odit unde praesentium consequuntur eius provident ipsum libero blanditiis aliquam beatae tempora minus, magnam quaerat officiis inventore quae illum quo.</p>
                </div>
            </div>
        </div>
    );
};
