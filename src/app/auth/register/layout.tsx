import Header from "@/app/components/Header";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <section className="">
            <Header content="Hosana Mercat"/>
            <div className="min-h-screen">
                {children}
            </div>
        </section>
    )
}