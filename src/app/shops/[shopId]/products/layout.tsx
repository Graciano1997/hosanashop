import Category from "@/app/components/Category"
import Checkout from "@/app/components/Checkout";
import Header from "@/app/components/Header";

// app/products/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header content={"Loja Virtual"}/>
      <Category/>

      <div className="flex justify-center item-center p-3 mt-8 mb-8">
        <div className='p-3  h-[10%] w-[85%] rounded'>
          <div className='bg-white  flex justify-between items-center p-2 shadow'>
            <input type='text' className='p-2 rounded w-[95%] outline-none' placeholder="Pesquisar produtos" />
          </div>
        </div>
      </div>

      <main>
        {children}
      </main>
      <Checkout/>
    </div>
  );
}
