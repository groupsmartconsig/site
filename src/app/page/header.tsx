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
      className="w-full flex justify-center items-center py-4"
    >
      <Image
        src={logo}
        width={140}
        height={20}
        alt="logo"
        priority
      />
    </motion.div>
  );
}
