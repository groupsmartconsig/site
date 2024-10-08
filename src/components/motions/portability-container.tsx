"use client"

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HeadsetIcon } from 'lucide-react';
import { FormButtonDialog } from './form-button-dialog';

import elderlyCoupleImg from "@/app/assets/images/elderly-couple.jpg";
import elderlyFinancesImg from "@/app/assets/images/elderly-finances.jpg";
import AnimatedGridPattern from "@/components/magic-ui/animated-grid-pattern";
import GradualSpacing from "@/components/magic-ui/gradual-spacing";
import Image from 'next/image';

export function PortabilityContainer() {
  return (
    <div>
      <div className="relative pt-12">
        <GradualSpacing
          className="hidden bg-gradient-to-b from-[#f48c06] via-[#f42f36] to-[#ec3237] bg-clip-text text-transparent font-bold tracking-tighter sm:block md:text-5xl md:leading-[5rem]"
          text="Portabilidade financeira descomplicada"
        />
        <motion.h1
          className="text-4xl text-center bg-gradient-to-b from-[#f48c06] via-[#ec3237] to-[#ec3237] bg-clip-text leading-none text-transparent font-bold pb-12 sm:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Portabilidade financeira descomplicada
        </motion.h1>
        <motion.p
          className="max-w-5xl w-full mx-auto text-black text-center sm:text-lg sm:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A portabilidade financeira descomplicada oferece uma maneira prática e fácil de transferir seus recursos entre diferentes instituições, garantindo mais autonomia e flexibilidade para o cliente. Com processos simplificados e transparência nas etapas, é possível mover contas, empréstimos ou investimentos de forma rápida e segura, permitindo que você aproveite as melhores oportunidades de mercado sem burocracia excessiva. Esse modelo coloca o controle financeiro diretamente nas mãos do usuário, facilitando a busca por melhores condições e o gerenciamento eficiente de suas finanças.
        </motion.p>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>

      <motion.div
        className="py-12"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1.5, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <FormButtonDialog 
          title="Falar com a central de atendimento"
          icon={<HeadsetIcon className="size-4" />}  
        />
      </motion.div>

      <div className="pt-12 pb-24 flex justify-center items-center space-x-12">
        <div className="w-1/2">
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
  )
}