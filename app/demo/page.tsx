"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Cpu, 
  HardDrive, 
  Network, 
  Terminal, 
  Send,
  Search,
  Settings,
  Bell,
  User,
  LayoutDashboard,
  MousePointer,
  Play,
  Bot
} from "lucide-react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function DemoPage() {
  const [cpuUsage, setCpuUsage] = useState(24);
  const [ramUsage, setRamUsage] = useState(42);
  const [streamingText, setStreamingText] = useState("");
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 30) + 10);
      setRamUsage(Math.floor(Math.random() * 10) + 40);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const runDemo = () => {
    setIsDemoRunning(true);
    setStreamingText("");
    const text = "Searching for relevant files... Found 3 matching documents. Extracting key insights... Generating summary in your workspace.";
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setStreamingText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        setIsDemoRunning(false);
      }
    }, 40);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Interactive <span className="text-accent-cyan text-glow-cyan">Experience.</span></h1>
          <p className="text-white/40">Explore the Vexx-AI dashboard interface.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 hidden lg:flex flex-col gap-8 items-center py-8 glass rounded-2xl">
             <div className="w-10 h-10 rounded-xl bg-accent-cyan flex items-center justify-center text-black">
                <LayoutDashboard size={20} />
             </div>
             <Activity size={20} className="text-white/20" />
             <Network size={20} className="text-white/20" />
             <Settings size={20} className="text-white/20" />
             <div className="mt-auto">
                <User size={20} className="text-white/20" />
             </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="lg:col-span-11 space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6 flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                      <Cpu size={24} className="text-accent-cyan" />
                   </div>
                   <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">CPU LOAD</p>
                      <p className="text-2xl font-bold">{cpuUsage}%</p>
                   </div>
                </GlassCard>
                <GlassCard className="p-6 flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center">
                      <Activity size={24} className="text-accent-purple" />
                   </div>
                   <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">MEMORY</p>
                      <p className="text-2xl font-bold">{ramUsage}%</p>
                   </div>
                </GlassCard>
                <GlassCard className="p-6 flex items-center gap-6">
                   <div className="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center">
                      <HardDrive size={24} className="text-accent-green" />
                   </div>
                   <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest">STORAGE</p>
                      <p className="text-2xl font-bold">1.2 TB</p>
                   </div>
                </GlassCard>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chat Simulation Area */}
                <div className="lg:col-span-2 space-y-6">
                   <div className="glass rounded-3xl overflow-hidden flex flex-col h-[600px]">
                      <div className="p-6 border-b border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                               <Bot size={20} className="text-accent-cyan" />
                            </div>
                            <div>
                               <h3 className="font-bold">Vexx Assistant</h3>
                               <p className="text-xs text-accent-green">Active Process: IDLE</p>
                            </div>
                         </div>
                         <div className="flex gap-4">
                            <Bell size={18} className="text-white/20" />
                            <Settings size={18} className="text-white/20" />
                         </div>
                      </div>
                      
                      <div className="flex-grow p-8 overflow-y-auto space-y-8 font-mono text-sm">
                         <div className="bg-white/5 p-6 rounded-2xl rounded-tl-none max-w-2xl">
                            <p className="text-white/70">Welcome back, Efraim. I'm ready to assist. You have 4 pending automations and 12 notifications from Slack.</p>
                         </div>
                         
                         {streamingText && (
                            <motion.div 
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               className="bg-accent-cyan/10 border border-accent-cyan/20 p-6 rounded-2xl rounded-tl-none max-w-2xl"
                            >
                               <p className="text-accent-cyan">{streamingText}</p>
                            </motion.div>
                         )}
                      </div>

                      <div className="p-6 border-t border-white/5">
                         <div className="relative">
                            <input 
                               type="text" 
                               placeholder="Ask Vexx to do something..."
                               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                               <Button variant="primary" size="sm" onClick={runDemo} disabled={isDemoRunning}>
                                  {isDemoRunning ? "Working..." : "Run Task"}
                               </Button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Status / Monitoring Area */}
                <div className="lg:col-span-1 space-y-6">
                   <GlassCard className="p-6">
                      <h4 className="text-sm font-bold mb-6 text-white/40 uppercase tracking-widest">Active Agents</h4>
                      <div className="space-y-4">
                         <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                                  <Bot size={16} className="text-accent-purple" />
                               </div>
                               <span className="text-sm font-medium">YUI Core</span>
                            </div>
                            <div className="px-2 py-0.5 rounded bg-accent-green/10 text-[10px] text-accent-green font-bold uppercase">Online</div>
                         </div>
                         <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-lg bg-accent-amber/20 flex items-center justify-center">
                                  <Bot size={16} className="text-accent-amber" />
                               </div>
                               <span className="text-sm font-medium">JUH Researcher</span>
                            </div>
                            <div className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/40 font-bold uppercase">Standby</div>
                         </div>
                      </div>
                   </GlassCard>

                   <GlassCard className="p-6 overflow-hidden relative">
                      <h4 className="text-sm font-bold mb-6 text-white/40 uppercase tracking-widest">Remote View</h4>
                      <div className="aspect-video bg-black/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                         <Image 
                           src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" 
                           fill
                           className="object-cover opacity-20 grayscale"
                           alt="Desktop Simulation"
                         />
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                               <MousePointer size={24} className="text-accent-cyan animate-pulse" />
                               <span className="text-[10px] text-white/40">REMOTE_CURSOR_01</span>
                            </div>
                         </div>
                         <div className="absolute top-2 left-2 flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[8px] text-red-500 font-bold">REC</span>
                         </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                         Connect to Phone
                      </Button>
                   </GlassCard>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
