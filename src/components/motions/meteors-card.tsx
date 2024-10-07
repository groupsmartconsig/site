"use client"

import { motion } from 'framer-motion';

import Meteors from "@/components/ui/meteors";

export function MeteorCard() {
  return (
    <motion.div
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Meteors number={40} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Meteors
      </span>
    </motion.div>
  );
}
