'use client'

import logo from "@/app/assets/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';

import { ShimmerButtonDialog } from "@/components/motions/shimmer-button-dialog";
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center max-w-6xl mx-auto w-full px-6 py-4 md:px-0"
    >
      <Image
        src={logo}
        width={140}
        height={20}
        className="pl-4 md:pl-0"
        alt="logo"
        priority
      />

      <nav className="hidden md:flex items-center gap-16 text-white font-medium">
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
      
      <ShimmerButtonDialog title="Fale conosco" />
    </motion.div>
  );
}
