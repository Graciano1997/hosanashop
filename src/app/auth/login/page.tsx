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
                    Senha
                    <br />
                    <input type="password" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>
                    <DefaultButton extraStyle={''} text="Login" actionHandler={()=>{}} />
                     <p onClick={()=>{redirect("forget")}} className="cursor-pointer font-light text-purple-600">Esquecia a senha</p>
                </form>
            </div>
        </section>
    )
}