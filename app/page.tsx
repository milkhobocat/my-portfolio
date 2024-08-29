import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { CiHome } from "react-icons/ci";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
     items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
       <FloatingNav navItems={[{name: 'Home', link: '/', icon: <CiHome/>}]}/>
       <Hero />
       <Grid />
      </div>
    </main>
  );
}
