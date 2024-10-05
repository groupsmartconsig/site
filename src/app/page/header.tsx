'use client'

import logo from "@/app/assets/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';

import { ShimmerButtonLink } from "@/components/motions/shimmer-button";
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center max-w-6xl mx-auto w-full py-4"
    >
      <Image
        src={logo}
        width={140}
        height={20}
        alt="logo"
        priority
      />

      <nav className="flex items-center gap-16 text-white font-medium">
        <Link
          href="#"
          className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-red after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:delay-100"
        >
          Benefícios
        </Link>
        <Link
          href="#"
          className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-red after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:delay-100"
        >
          Quem somos
        </Link>
        <Link
          href="#"
          className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary-red after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:delay-100"
        >
          Contato
        </Link>
      </nav>
      
      <ShimmerButtonLink />
    </motion.div>
  );
}
