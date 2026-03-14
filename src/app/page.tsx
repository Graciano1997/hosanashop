"use client"

import { IP } from "@/lib/ip";
import { store } from "@/types/store";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "./hooks/ShopContext";
import { AppContext } from "./hooks/AppContext";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const {appState,appStateHandler} = useContext(AppContext);
  
  const [stores,setStores]=useState([]);
 
     const fetchHandler = ()=>{
         fetch(`${IP}`)
         .then((response) => response.json())
         .then(({ data }) => { setStores(data) });
         }
 
     useEffect(() => {
         fetchHandler();
     },[]);
  return (
    <>
    <section className="font-sans min-h-screen p-3">
      {stores.map((store:store)=><div>
        <p>{store.id}</p>
        <p>{store.name}</p>
        <button className="bg-red-200 p-3" onClick={()=>{ appStateHandler(store); router.push(`/shops/${store.slug}`)  }}>Visitar</button>
      </div>)}
      <h1 className="font-bold text-3xl">Wellcome At Hosanna Mercat</h1>
    </section>
    </>
  );
}
