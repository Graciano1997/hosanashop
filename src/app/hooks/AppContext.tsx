"use client"
import { store } from "@/types/store"
import { createContext, useState } from "react"



const initialState: store = { id:1, nif:'005717487MO045',tel:'935636086', name:'Hosanna',slug:'hosanna', address:'Remoto', companyName:'Hosanna' }

type AppContextType = { appState: store
    appStateHandler:(state:store)=>void
}

export const AppContext = createContext<AppContextType>({
    appState:initialState,
    appStateHandler:()=>{}
});

export default function AppProvider ({children}:{children:React.ReactNode}){
    
    const savedState = typeof window !== "undefined" ? localStorage.getItem("appState") : null;

    const [appState, setAppState] = useState(
    savedState ? JSON.parse(savedState) : initialState
    );

    // const savedState: store  = localStorage.getItem("appState") != undefined ? localStorage.getItem("appState") : null;
    // const [appState,setAppState] = useState( savedState ? savedState : initialState);


    const appStateHandler = (newState:store)=>{
        setAppState(newState);
        localStorage.setItem("appState",JSON.stringify(newState));
    }

    return(
        <AppContext.Provider value={{appState,appStateHandler}}>
            {children}
        </AppContext.Provider>

    )
}