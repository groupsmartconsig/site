"use client"

import { motion } from 'framer-motion';
import { FormButtonDialog } from './form-button-dialog';

export function HeroTitle() {
  return (
    <div className="w-full h-[500px] flex items-center overflow-hidden sm:pl-32">
      <div className="text-center sm:space-y-3">
        <motion.h1
          className="hidden max-w-xs w-full mx-auto font-medium text-2xl text-center bg-gradient-to-b from-[#8a090d] via-[#e42c33] to-[#e42c33] bg-clip-text text-transparent mb-6 sm:block md:text-4xl md:max-w-full md:px-0 md:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aposentados e pensionistas do INSS
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto w-full font-bold text-left text-2xl text-[#e42c33] pb-3 md:text-5xl sm:text-white md:pb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Redução de juros e parcela com liberação de valor
        </motion.p>

        <motion.p
          className="max-w-2xl mx-auto w-full text-lg text-left text-black sm:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Seja qual for a sua necessidade, aqui
          Smart Consig você encontra as melhores taxas de juros
        </motion.p>

        <motion.div
          className="w-full pt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FormButtonDialog
            title="Simule sem compromisso"
          />
        </motion.div>
      </div>
    </div>
  )
}