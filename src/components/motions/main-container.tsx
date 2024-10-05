'use client'

import { Header } from '@/app/page/header';
import { motion } from 'framer-motion';
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
      </div>
    </div>
  )
}