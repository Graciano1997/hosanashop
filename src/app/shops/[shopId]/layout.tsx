"use client"
import Header from "@/app/components/Header";
import { AppContext } from "@/app/hooks/AppContext";
import ShopProvider from "@/app/hooks/ShopContext";
import { useContext } from "react";

export default function Home({ children }: { children: React.ReactNode }) {
    const {appState} = useContext(AppContext)
    return (
        <ShopProvider>
        <Header content={appState.companyName? appState.companyName : "Hosanna"}/>      
            {children}
        </ShopProvider>
    );
};