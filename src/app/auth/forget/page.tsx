"use client"
import DefaultButton from "@/app/components/DefaultButton";
import { redirect } from "next/navigation";

export default function Home(){
    return(
        <section className="flex items-center justify-center min-h-screen">
            <div className="shadow p-4 bg-white hover:shadow-lg transition-all  ">
                <form action="" className="flex flex-col justify-center gap-5 ">
                    <label htmlFor="">
                    Email
                    <br />
                    <input type="email" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>
                    <label htmlFor="">
                    Telefone
                    <br />
                    <input type="email" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>
                    <label htmlFor="">
                    Ultima senha que lembras
                    <br />
                    <input type="password" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>
                    <DefaultButton extraStyle={''} text="Submeter" actionHandler={()=>{}} />
                     <p onClick={()=>{redirect("login")}} className="cursor-pointer font-light text-purple-600">Fazer login</p>
                </form>
            </div>
        </section>
    )
}