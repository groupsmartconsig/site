'use client'

import { Header } from '@/app/header';
import { motion } from 'framer-motion';

import elderlyCoupleImg from "@/app/assets/images/elderly-couple.jpg";
import elderlyFinancesImg from "@/app/assets/images/elderly-finances.jpg";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from 'next/image';

export function PrimaryContainer() {
  return (
    <div className="p-8 bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
      <Header />
      <div className="pt-20 flex flex-col items-center overflow-hidden">
        <div className="max-w-2xl w-full py-12 flex flex-col justify-center text-white">
          <motion.h1
            className="text-3xl font-bold text-primary-red mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aposentados e pensionistas do INSS
          </motion.h1>
          <motion.p
            className="text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Redução de juros e parcela com liberação de valor
          </motion.p>
        </div>

        <GradualSpacing
          className="font-display text-gray-300 text-center text-4xl font-extrabold -tracking-widest md:text-5xl md:leading-[5rem]"
          text="Portabilidade financeira descomplicada"
        />
        <div className="pt-12 flex justify-center items-center space-x-12">
          <div className="w-1/3">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={elderlyCoupleImg}
                alt="Casal de idosos sorrindo"
                className="h-full w-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                width={1920}
                height={1080}
              />
            </motion.div>
          </div>

          <div className="w-1/3">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={elderlyFinancesImg}
                alt="Idosos calculando finanças"
                className="h-full w-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                width={1920}
                height={1080}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}