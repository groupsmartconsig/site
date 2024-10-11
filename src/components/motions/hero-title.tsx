"use client"

import { motion } from 'framer-motion';
import { FormButtonDialog } from './form-button-dialog';

export function HeroTitle() {
  return (
    <div className="w-full h-[500px] flex items-center overflow-hidden sm:pl-32">
      <div className="text-center sm:space-y-3">
        <motion.h1
          className="max-w-xs w-full mx-auto font-medium text-2xl text-center bg-gradient-to-b from-[#f48c06] via-[#f42f36] to-[#ec3237] bg-clip-text text-transparent mb-6 md:text-4xl md:max-w-full md:px-0 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aposentados e pensionistas do INSS
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto w-full font-bold text-2xl text-center text-white px-4 md:text-5xl md:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Redução de juros e parcela com liberação de valor
        </motion.p>

        <motion.div
          className="pt-8 md:pt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FormButtonDialog
            title="Quero fazer minha simulação"
          />
        </motion.div>
      </div>
    </div>
  )
}