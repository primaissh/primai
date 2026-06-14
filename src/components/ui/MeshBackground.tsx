"use client";

import { motion } from "framer-motion";

export default function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Orb 1: Electric Blue */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-electric/15 blur-[100px] md:w-[600px] md:h-[600px] md:bg-electric/10"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-10%", "30%", "-10%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      {/* Orb 2: Neon Purple */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-neon/15 blur-[90px] md:w-[500px] md:h-[500px] md:bg-neon/10"
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["30%", "-10%", "30%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", right: "15%" }}
      />

      {/* Orb 3: Cyber Cyan */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-cyan/15 blur-[80px] md:w-[450px] md:h-[450px] md:bg-cyan/10"
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["20%", "-20%", "20%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "30%" }}
      />
    </div>
  );
}
