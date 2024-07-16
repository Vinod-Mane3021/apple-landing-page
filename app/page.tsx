'use client'

import Chip from "@/components/Chip";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main id="root" className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <Chip/>
    </main>
  );
};

export default Home;
