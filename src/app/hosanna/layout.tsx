import React from "react";
import HeaderHosanna from "./HeaderHosanna";
import FooterHosanna from "./FooterHosanna";

export default function Home({children}:{children:React.ReactNode}){
    return(
        <>
        <HeaderHosanna/>
        {children}
        <FooterHosanna/>
        </>
    )
}