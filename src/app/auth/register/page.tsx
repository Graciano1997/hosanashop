"use client"
import DefaultButton from "@/app/components/DefaultButton";
import { redirect } from "next/navigation";

export default function Home(){
    return(
        <section className="flex items-center justify-center min-h-screen">
            <div className="shadow p-4 bg-white hover:shadow-lg transition-all  ">
                <form action="" className="flex flex-col justify-center gap-5 pt-5 ">
                    
                    <label htmlFor="">
                    Nome completo
                    <br />
                    <input type="email" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>

                    <label htmlFor="">
                    Telefone
                    <br />
                    <input type="tel" name="telephone" id="" className="bg-purple-200 p-1 w-80" />
                    </label>

                    <label htmlFor="">
                    Endereco
                    <br />
                    <input type="email" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>

                    <label htmlFor="">
                    Senha
                    <br />
                    <input type="password" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>

                    <label htmlFor="">
                    Repetir Senha
                    <br />
                    <input type="password" name="email" id="" className="bg-purple-200 p-1 w-80" />
                    </label>
                    <DefaultButton extraStyle={''} isAdded={null} text="Cadastrar" actionHandler={()=>{}} />
                    <p onClick={()=>{redirect("login")}} className="cursor-pointer font-light text-purple-600">Ja tenho uma conta</p>
                </form>
            </div>
        </section>
    )
}