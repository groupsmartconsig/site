'use client'

import logo from "@/app/assets/images/logo.png";
import Image from 'next/image';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="hidden sm:flex sm:max-w-xs sm:w-full sm:justify-center sm:pt-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative left-24"
      >
        <Image
          src={logo}
          width={160}
          height={20}
          alt="logo"
          priority
        />
      </motion.div>
    </header>
  );
}
