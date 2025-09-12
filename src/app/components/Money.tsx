import { MoneyProps } from "@/types/money";


export default function Money({amount }:MoneyProps){
    
    const formatedNumber = new Intl.NumberFormat("pt-AO",{
        style:"currency",
        currency:"AOA"
    }).format((amount))

    return(<>{formatedNumber}</>);
}