import { ProductProps } from "@/types/product";
import Money from "./Money";
import Image from "next/image";

// components/ProductCard.tsx


export default function ProductCard( { product } : ProductProps) {
  
  return (
    <div className="bg-white/50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden p-4">
              {
                product.image ?
                <img 
                className="dark:invert"
                src={product.image}
                />
                :
              <Image
                className="dark:invert ml-5"
                src="/next.svg" 
                alt="Next.js logo"
                width={180}
                height={38}
                priority
              />
              }


      

      {/* Conteúdo */}
      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
        <p className="text-purple-600 font-bold text-xl"><Money amount={ Number(product.price)} /></p>
        <button className="mt-4 bg-purple-600 text-white rounded-xl py-2 hover:bg-purple-700 transition cursor-pointer">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
