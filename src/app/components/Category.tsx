"use client"

import { IP } from "@/lib/ip";
import { useEffect, useState } from "react"

export default function Category() {
  const [visibility, setVisivility] = useState(true);

  const [categories, setCategories] = useState([]);
  const [lastCreated, setLastCreated] = useState(null);

  const fetchHandler = () => {
    fetch(`${IP}categories${lastCreated ? `/last/ ${lastCreated}` : ''}`)
      .then((response) => response.json())
      .then(({ data, last_created_at }) => { setCategories((prev) => prev.concat(data)); setLastCreated(last_created_at) });
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className={` transition-all duration-200 ${visibility ? 'fixed left-0 top-0 w-[230px] h-[100%] flex flex-col items-center pt-15  gap-2' : 'w-[100px] h-[0]'}  bg-white/90`}>
      {
        visibility &&
        <button onClick={() => { setVisivility(false) }} className="absolute text-red-500 text-xl bg-white p-2 shadow  right-[0] top-[0] transition-all duration-200 hover:bg-red-400 hover:text-white cursor-pointer" style={{ zIndex: 2000 }} >X</button>
      }

      {
        visibility &&
        <>
          <h1 className="font-bold text-xl self-start pl-3">Categorias</h1>
          <div className="overflow-y-scroll flex flex-col gap-3 mt-4">
          {
            categories.map((category: any) =>
              <div className="bg-purple-600 shadow text-white w-[200px] flex justify-center ">
                <button className="p-1 cursor-pointer ">
                  {category.name}
                </button>
              </div>)
          }
          </div>
        </>
      }

      {
        !visibility &&
        <button onClick={() => { setVisivility(true) }} className="bg-black/70 text-white text-xl p-2 shadow transition-all duration-200  cursor-pointer" style={{ zIndex: 2000 }} >Categorias</button>
      }

    </div>
  )
}