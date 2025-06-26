import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Bikes from "@/components/Bikes";
import Stickers from "@/components/Stickers";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
      <Hero />
      <Services />
      <Bikes />
      <Stickers />
      </div>
    </main>
  
  );
}
