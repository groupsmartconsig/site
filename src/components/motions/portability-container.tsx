"use client"

import { motion } from 'framer-motion';

import elderlyCoupleImg from "@/app/assets/images/elderly-couple.jpg";
import elderlyFinancesImg from "@/app/assets/images/elderly-finances.jpg";
import Image from 'next/image';

export function PortabilityContainer() {
  return (
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
  )
}