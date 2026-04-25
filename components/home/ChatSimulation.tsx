"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, User, Cpu, ChevronRight } from "lucide-react";

const DEMO_STEPS = [
  { type: "user", text: "Analyze my screen and tell me which apps are open." },
  { type: "ai", text: "Scanning screen using OCR and awareness engine..." },
  { type: "action", text: "Identified: Visual Studio Code, Chrome (3 tabs), Slack, and Spotify." },
  { type: "user", text: "Great. Close Spotify and focus VS Code." },
  { type: "ai", text: "Executing commands..." },
  { type: "action", text: "✓ Closed Spotify. ✓ Window 'VS Code' brought to front." },
];

export default function ChatSimulation() {
  const [messages, setMessages] = useState<any[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (stepIndex < DEMO_STEPS.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        const typeTimer = setTimeout(() => {
          setMessages((prev) => [...prev, DEMO_STEPS[stepIndex]]);
          setIsTyping(false);
          setStepIndex((prev) => prev + 1);
        }, 1500);
        return () => clearTimeout(typeTimer);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Reset after a delay
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setStepIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [stepIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="h-12 bg-white/5 border-b border-white/5 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>
          <span className="text-xs font-medium text-white/40 tracking-widest uppercase">Command Center</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/20">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-[10px] font-bold text-accent-cyan">REMOTE ACTIVE</span>
        </div>
      </div>

      <div className="p-6 h-[400px] overflow-y-auto flex flex-col gap-4 font-mono text-sm custom-scrollbar">
        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex gap-3 ${msg.type === "user" ? "text-white" : msg.type === "ai" ? "text-accent-cyan" : "text-white/40"}`}
            >
              <div className="flex-shrink-0 mt-1">
                {msg.type === "user" ? <User size={16} /> : msg.type === "ai" ? <Cpu size={16} /> : <ChevronRight size={16} />}
              </div>
              <div className="flex-grow">
                <span className="opacity-50 mr-2">{msg.type === "user" ? "USER:" : msg.type === "ai" ? "VEXX:" : "CMD:"}</span>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3 text-accent-cyan/50"
          >
            <Cpu size={16} className="animate-spin" />
            <span className="animate-pulse">Thinking...</span>
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-white/5 border-t border-white/5 flex gap-3">
        <div className="flex-grow bg-black/40 rounded-lg border border-white/5 px-4 py-2 text-white/20 flex items-center gap-3">
          <Terminal size={14} />
          <span>Type a command...</span>
        </div>
        <button className="w-10 h-10 rounded-lg bg-accent-cyan flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,245,255,0.3)]">
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
