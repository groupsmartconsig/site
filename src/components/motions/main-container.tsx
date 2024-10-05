'use client'

import { Header } from '@/app/header';
import { motion } from 'framer-motion';

import elderlyCoupleImg from "@/app/assets/images/elderly-couple.jpg";
import elderlyFinancesImg from "@/app/assets/images/elderly-finances.jpg";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from 'next/image';
import { InfiniteSliderContent } from './infinite-slider-content';

export function MainContainer() {
  return (
    <div className="pt-8 pb-16">
      <Header />
      <div className="pt-20 flex flex-col items-center overflow-hidden">
        <div className="max-w-2xl w-full py-12 flex flex-col justify-center text-white">
          <motion.h1
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-danger-red via-red-500 to-primary-red mb-4"
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
        <InfiniteSliderContent />

        <div className="pt-24 max-w-5xl w-full mx-auto">
          <GradualSpacing
            className="font-display text-gray-300 text-4xl font-extrabold -tracking-widest md:text-5xl md:leading-[5rem]"
            text="Portabilidade financeira descomplicada"
          />
          <motion.p
            className="text-muted-foreground text-lg text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A portabilidade financeira descomplicada oferece uma maneira prática e fácil de transferir seus recursos entre diferentes instituições, garantindo mais autonomia e flexibilidade para o cliente. Com processos simplificados e transparência nas etapas, é possível mover contas, empréstimos ou investimentos de forma rápida e segura, permitindo que você aproveite as melhores oportunidades de mercado sem burocracia excessiva. Esse modelo coloca o controle financeiro diretamente nas mãos do usuário, facilitando a busca por melhores condições e o gerenciamento eficiente de suas finanças.
          </motion.p>
        </div>

        <div className="py-12 flex justify-center items-center space-x-12">
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