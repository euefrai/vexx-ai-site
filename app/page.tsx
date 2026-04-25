import HeroNovo from "@/components/home/HeroNovo";
import VisualProof from "@/components/home/VisualProof";
import ComoFunciona from "@/components/home/ComoFunciona";
import Demonstracao from "@/components/home/Demonstracao";
import ControleRemoto from "@/components/home/ControleRemoto";
import Seguranca from "@/components/home/Seguranca";
import Precos from "@/components/home/Precos";
import DownloadCTA from "@/components/home/DownloadCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section - Principal */}
      <HeroNovo />
      
      {/* 2. Visual Proof - Not a chatbot */}
      <VisualProof />
      
      {/* 3. How it Works - 3 steps */}
      <ComoFunciona />
      
      {/* 4. Demonstration - Live simulation */}
      <Demonstracao />
      
      {/* 5. Remote Control - Phone mockup */}
      <ControleRemoto />
      
      {/* 6. Security - Trust indicators */}
      <Seguranca />
      
      {/* 7. Pricing - Free and Pro */}
      <Precos />
      
      {/* 8. Download CTA - Final call */}
      <DownloadCTA />
    </div>
  );
}
