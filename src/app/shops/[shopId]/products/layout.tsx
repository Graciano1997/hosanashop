import Category from "@/app/components/Category"
import Checkout from "@/app/components/Checkout";
import Header from "@/app/components/Header";

// app/products/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header content={"Loja Virtual"}/>      
      <main>
        {children}
      </main>
      <Checkout/>
    </div>
  );
}
