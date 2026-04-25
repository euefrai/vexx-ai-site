import Hero from "@/components/home/Hero";
import ChatSimulation from "@/components/home/ChatSimulation";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      
      {/* Simulation Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">See it in action.</h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Real-time computer control powered by advanced vision and reasoning models.
            </p>
          </div>
          <ChatSimulation />
        </div>
      </section>

      <FeaturesGrid />

      {/* "How it Works" Preview */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-purple/20 blur-[100px] rounded-full" />
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-[10px] font-bold text-accent-purple uppercase tracking-widest mb-6">
                    <Sparkles size={12} />
                    Intelligence Pipeline
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    From thought <br />
                    to <span className="text-accent-cyan">execution.</span>
                  </h2>
                  <p className="text-white/50 text-lg mb-10 leading-relaxed">
                    Vexx-AI doesn't just reply. It analyzes your screen, plans a series of 
                    keyboard and mouse actions, and executes them with surgical precision. 
                    All while keeping you in the loop.
                  </p>
                  <Link href="/how-it-works">
                    <Button variant="outline" size="lg">
                      Explore the Pipeline
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 rounded-full border border-white/5 p-8 animate-float">
                    <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center p-8">
                       <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center relative">
                          <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center text-black shadow-2xl">
                             <Sparkles size={40} className="animate-pulse" />
                          </div>
                          {/* Floating orbits */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent-cyan flex items-center justify-center animate-bounce">
                             <Cpu size={24} className="text-black" />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12">Ready to evolve?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link href="/download" className="w-full sm:w-auto">
               <Button variant="primary" size="lg" className="w-full">
                 Get Started for Free
               </Button>
             </Link>
             <Link href="/pricing" className="w-full sm:w-auto">
               <Button variant="secondary" size="lg" className="w-full">
                 View Pro Plans
               </Button>
             </Link>
          </div>
          <p className="mt-8 text-white/30 text-sm">
            Available for Windows 10/11. macOS and Linux coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
