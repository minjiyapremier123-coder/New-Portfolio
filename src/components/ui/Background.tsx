"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">

      {/* Violet Glow */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[150px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]"
      />
    </div>
  );
}