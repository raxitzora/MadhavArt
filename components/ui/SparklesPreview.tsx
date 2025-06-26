"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";

export function SparklesPreview() {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md relative z-10">
      <motion.h1
        className="text-3xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        MadhavArt
      </motion.h1>

      <div className="w-[40rem] h-40 relative mt-6">
        {/* Decorative gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 blur-sm bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 blur-sm bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

        {/* Sparkles animation */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Mask to soften edge */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
