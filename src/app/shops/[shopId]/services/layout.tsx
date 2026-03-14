import Checkout from "@/app/components/Checkout";

// app/products/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {children}
      </main>
      <Checkout/>
    </div>
  );
}
