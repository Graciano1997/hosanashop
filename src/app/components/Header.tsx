type HeaderProp = {
    content:string
};

export default function Header({content}:HeaderProp){
    return(
        <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-purple-700">{content}</h1>
      </header>
    )
}