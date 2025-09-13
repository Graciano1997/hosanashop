import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header content="Hosanna Mercat" />
    <section className="font-sans min-h-screen p-3">
      <h1 className="font-bold text-3xl">Wellcome At Hosanna Mercat</h1>
    </section>
    </>
  );
}
