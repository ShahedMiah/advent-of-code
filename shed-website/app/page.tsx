import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import Steps from "@/components/Steps";
import Tools from "@/components/Tools";
import Tips from "@/components/Tips";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Materials />
      <Tools />
      <Steps />
      <Tips />
      <Footer />
    </main>
  );
}
