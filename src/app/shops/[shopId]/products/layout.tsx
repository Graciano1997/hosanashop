// app/products/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-purple-700">Loja Virtual</h1>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
}
