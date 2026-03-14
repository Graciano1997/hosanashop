"use client"

import { ReactElement, ReactNode, useState } from "react"


export default function(){
    const [form,setForm]=useState({});
    
    const formHandler = (el:any)=>{
        setForm({
            ...form,
            [el.target.name]:el.target.value
        });
    };

    const formSubmitionHandler =  async(el:any)=>{
        el.preventDefault();
        
        const result = await fetch("http://localhost:3000/api/stores/",{
            headers:{"Content-Type":"application/json"},
            method:"POST",
            body:JSON.stringify(form)
        });

        const data = await result.json();
        console.log(data);

    }


    return(
        <div className="p-3">
            <form onSubmit={formSubmitionHandler} className="flex flex-col gap-3 bg-green-200 p-2">
            <h1>Dados da Proprietario</h1>

                <label htmlFor="">
                    Nome completo
                    <br />
                    <input type="text" className="bg-red-100" name="ownername" onChange={formHandler} />
                </label>
                <label htmlFor="">
                    Email
                    <br />
                    <input type="email" className="bg-red-100" name="owneremail" onChange={formHandler} />
                </label>
                
                <label htmlFor="">
                    Telefone
                    <br />
                    <input type="tel" className="bg-red-100" name="ownertel" onChange={formHandler} />
                </label>

                <label htmlFor="">
                    Endereco
                    <br />
                    <input type="text" className="bg-red-100" name="owneraddress" onChange={formHandler}/>
                </label>

                <hr />
                <h1>Dados da Empresa</h1>

                <label htmlFor="">
                    Nome da Empresa
                    <br />
                    <input type="text" className="bg-red-100" name="companyname" onChange={formHandler}/>
                </label>

                <label htmlFor="">
                    Slug
                    <br />
                    <input type="text" className="bg-red-100" name="companyslug" onChange={formHandler} />
                </label>

                <button className="p-2 bg-black text-white" type="submit">Confirmar</button>
            </form>
        </div>
    )
}