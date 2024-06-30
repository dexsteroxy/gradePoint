
// import About from "@/components/About";
// import Footer from "@/components/Footer";
// import About from "@/components/About";
import Hero from "@/components/Hero";


import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className=" relative bg-black-100 h-screen flex 
     justify-center items-center flex-col 
        mx-auto md:px-5 overflow-clip ">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      
       <Hero/>
       {/* <About /> */}
     {/* <Footer /> */}
      

      </div>
    </main>
  );
}
