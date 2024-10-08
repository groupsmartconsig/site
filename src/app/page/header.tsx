'use client'

import logo from "@/app/assets/images/logo.png";
import Image from 'next/image';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center max-w-5xl mx-auto w-full px-6 py-4 md:px-0"
    >
      <Image
        src={logo}
        width={140}
        height={20}
        className="pl-4 md:pl-0"
        alt="logo"
        priority
      />
    </motion.div>
  );
}
