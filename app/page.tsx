import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import TestComp from "@/components/TestComp";

export default function Home() {
  return (
    <main id="root" className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      {/* <TestComp/> */}
      <Model/>
    </main>
  );
}
