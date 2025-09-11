import { MoneyProps } from "@/types/money";


export default function Money({amount }:MoneyProps){
    
    const formatedNumber = new Intl.NumberFormat("pt-AO",{
        style:"currency",
        currency:"AOA"
    }).format((amount*1+0.99))

    return(<>{formatedNumber}</>);
}