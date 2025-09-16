import { ProductProps } from "@/types/product";
import Money from "./Money";
import Image from "next/image";
import Modal from "./Modal";
import { useContext, useState } from "react";
import DefaultButton from "./DefaultButton";
import { ShopContext } from "../hooks/ShopContext";

export default function ProductCard( { product } : ProductProps) {

  const [visible,setVisible] = useState(false);

  const {cart,addItem}=useContext(ShopContext);

  return (
    <>
    <div className="bg-white/50  shadow hover:shadow-lg transition overflow-hidden p-4">
      <div className="h-[150px]">
        <img 
        className="w-[100%] h-[100%] object-fill"
        src={product.image??""}
        />
      </div>
    
      {/* Conteúdo */}
      <div className="p-4 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 truncate">{product.name}</h3>
        <p className="text-purple-600 font-bold text-xl"><Money amount={ Number(product.price)} /></p>
        <p onClick={()=>{setVisible(true)}} className="text-blue-400 font-light text-md cursor-pointer">Sobre</p>
        <DefaultButton text="Adicionar ao Carrinho" extraStyle="" actionHandler={()=>{addItem(product,1)}} />
      </div>
    </div>
    {visible &&
    <div className="absolute">
    <Modal closeHandler={()=>{setVisible(false)}}>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 shadow-md  dark:bg-gray-900">
  {/* Image */}
  <div className="flex justify-center items-center">
    {product.image ? (
      <img 
        className="max-h-80 object-contain dark:invert"
        src={product.image}
        alt={product.name}
      />
    ) : (
      <Image
        className="dark:invert"
        src="/next.svg" 
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    )}
  </div>

  {/* Details */}
  <div className="flex flex-col gap-4">
    <h1 className="text-3xl font-bold">{product.name}</h1>
    <p className="text-2xl text-green-600 font-semibold">
      <Money amount={product.price} />
    </p>
    <p><span className="font-semibold">Acerca:</span> {product.observation}</p>
    <p><span className="font-semibold">Categoria:</span> {product.category}</p>
    <p><span className="font-semibold">Em stock:</span> {product.in_stock}</p>
    <p><span className="font-semibold">Marca:</span> {product.brand}</p>
    <div className="flex  self-end">
    <DefaultButton text="Addicionar ao Carrinho" extraStyle={null}  actionHandler={()=>{}} />
    </div>
  </div>
</div>
    </Modal>
    </div>
    }

  </>
  );
}
