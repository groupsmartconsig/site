"use client"

import { motion } from 'framer-motion';
import { InfiniteSliderContent } from './infinite-slider-content';

export function HeroTitle() {
  return (
    <div className="relative w-full h-[460px] flex items-center justify-center overflow-hidden bg-transparent">
      <style jsx>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
              transform: scale(1);
            }
            50% {
              opacity: 0.75;
              transform: scale(1.05);
            }
          }
          .gradient-spot {
            position: absolute;
            border-radius: 50%;
            mix-blend-mode: screen;
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
      `}
      </style>

      <div className="absolute inset-0">
        <div
          className="gradient-spot"
          style={{
            top: '6%',
            left: '75%',
            width: '16rem',
            height: '16rem',
            background: 'radial-gradient(circle, rgba(204, 0, 0, 1) 0%, rgba(168, 85, 247, 0) 70%)',
          }}
        ></div>
        <div
          className="gradient-spot"
          style={{
            top: '75%',
            left: '50%',
            width: '24rem',
            height: '24rem',
            background: 'radial-gradient(circle, rgba(39, 39, 42, 1) 0%, rgba(168, 85, 247, 0) 70%)',
          }}
        ></div>
        <div
          className="gradient-spot"
          style={{
            top: '50%',
            left: '5%',
            width: '20rem',
            height: '20rem',
            background: 'radial-gradient(circle, rgba(204, 0, 0, 1) 0%, rgba(168, 85, 247, 0) 70%)',
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full pb-10">
        <motion.h1
          className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-b from-danger-red via-red-500 to-primary-red px-4 mb-4 md:text-3xl md:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Aposentados e pensionistas do INSS
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto w-full text-3xl text-center text-white px-4 md:text-5xl md:px-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Redução de juros e parcela com liberação de valor
        </motion.p>
        <InfiniteSliderContent />
      </div>
    </div>
  )
}