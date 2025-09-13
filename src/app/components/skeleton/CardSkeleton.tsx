import Image from "next/image";

export function CardSkeleton(){
    return(
        <div className="bg-white/50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden p-4">
            <Image
            className="dark:invert ml-5"
            src="/next.svg" 
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            />
                
        <div className="p-4 flex flex-col">
            <h3 className="font-semibold text-lg mb-2 truncate">Nome</h3>
            <p className="text-purple-600 font-bold text-xl">2000kz</p>
            <button className="mt-4 bg-purple-600 text-white rounded-xl py-2 hover:bg-purple-700 transition cursor-pointer">
            Adicionar ao carrinho
            </button>
        </div>
    </div>
    )
}

export function CardsSkeleton(){
    return(
        <>
        <CardsSkeleton/>
        <CardsSkeleton/>
        <CardsSkeleton/>
        
        <CardsSkeleton/>
        <CardsSkeleton/>
        <CardsSkeleton/>

        <CardsSkeleton/>
        <CardsSkeleton/>
        <CardsSkeleton/>
        </>
    )
}