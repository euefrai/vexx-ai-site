"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -5, borderColor: "rgba(255, 255, 255, 0.2)" } : {}}
      className={cn(
        "glass-card p-6 border border-white/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
