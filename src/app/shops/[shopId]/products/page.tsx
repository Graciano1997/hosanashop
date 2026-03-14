"use client"

import ProductCard from "@/app/components/Card";
import Search from "@/app/components/Search";
import { CardsSkeleton } from "@/app/components/skeleton/CardSkeleton";
import { AppContext } from "@/app/hooks/AppContext";
import { IP } from "@/lib/ip";
import removeDuplicate from "@/lib/removeDuplicate";
import { Category } from "@/types/category";
import { Product } from "@/types/product";
import { uniqueId } from "@/types/unique";
import { Suspense, useContext, useEffect, useState } from "react";

export const fetcherHandlerGeneric = (url: string, setter: any) => {
    fetch(url)
        .then((response) => response.json())
        .then(({ data, last_created_at }) => { setter(data, last_created_at) });
}


export default function Home() {
    // const [products, setProducts] = useState(Array<Product>);
    const [defaultProductsCollection, setDefaultProductsCollection] = useState(Array<Product>);
    const [lastCreated, setLastCreated] = useState(null);
    const [dispatch, setDispatch] = useState(true);
    const [lastCreatedCategory, setLastCreatedCategory] = useState(null);

    const { appState } = useContext(AppContext);
 
    const [categorieState, setCategorieState] = useState(Array<Category>);
    const [productState, setProductState] = useState(Array<Product>);

    const categoryUrl = `${IP}${appState.id}/categories${lastCreated ? `/last/ ${lastCreated}` : ''}`
    const productUrl = `${IP}${appState.id}/products${lastCreated ? `/last/ ${lastCreated}` : ''}`

    const categorySetter = (data: any, last_created_at: any) => {
        const newCategories = categorieState.concat(data);
        setCategorieState(newCategories);
        setLastCreatedCategory(last_created_at)
    }

    const productSetter = (data: any, last_created_at: any) => {
        const newProducts = productState.concat(data);
        setDefaultProductsCollection(removeDuplicate(newProducts, "id"))
        setProductState(removeDuplicate(newProducts, "id"))
        setLastCreated(last_created_at)
    }

    useEffect(() => {
        fetcherHandlerGeneric(categoryUrl, categorySetter);
        fetcherHandlerGeneric(productUrl, productSetter);
    }, []);

    useEffect(() => {
        // fetcherHandlerGeneric(categoryUrl, categorySetter);
        fetcherHandlerGeneric(productUrl, productSetter);
    }, [dispatch]);

    function SearchHandler(query: string, defaultCollection: Array<Product>, category: number) {
        const products = defaultCollection;

        let items: any = category == 0 ? products : products.filter((product: Product) => product.category_id == category);

        if (query != '') {
            query = query.trim();
            items = items.filter((product: Product) => product.name.toLowerCase().includes(query ? query.toLowerCase() : ""));
        }
        setProductState(items);
    }

    return (
        <div>
            <Search categories={categorieState} defaultCollection={defaultProductsCollection} placeHolder="Pesquisar Produtos" searchHandler={SearchHandler} />
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Suspense fallback={<CardsSkeleton />}>
                    {productState.map((product: Product) => <ProductCard key={product.code + uniqueId() } extraStyle="" product={product} />)}
                </Suspense>
            </div>
            {productState.length > 0 && lastCreated &&
                <div className="flex justify-center p-5">
                    <button onClick={() => setDispatch(!dispatch)} className="bg-black text-white p-3  cursor-pointer shadow hover:shadow-lg">Ver Mais</button>
                </div>
            }
            {
                productState.length == 0 &&
                <p className="text-center font-semibold">colecao vazia</p>
            }
        </div>
    );
}