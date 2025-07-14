"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const BottomSection = () => {
   const isMobile = useIsMobile()
  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-12 overflow-hidden"
      style={{
        backgroundImage: isMobile ? 'none' : 'url("/bg-final-section.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: 'auto',
        minHeight: '400px'
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:py-12 py-0 md:h-[750px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Izquierda */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex items-start justify-center md:mt-[200px] relative text-center md:text-left w-full h-full"
        >
          <div className="relative inline-block">
            <Image
              src="/yellow-circle.svg"
              alt="Highlight Oval"
              width={600}
              height={300}
              className="w-full md:w-[400px] h-auto object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center px-6 md:px-10">
              <h1 className="font-matahari text-black font-bold md:text-[40px] text-[28px] leading-tight text-center md:text-left">
                INCENTIVAR NO ES <br className="hidden md:block" /> SOLO PREMIAR.
              </h1>
            </span>
          </div>
        </motion.div>

        {/* Derecha */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col items-center md:items-start justify-center space-y-6 w-full"
        >
          <p className="font-matahari text-black font-bold md:text-[32px] text-[20px] leading-tight text-center md:text-left">
            ES <span className="bg-[#FFFF7A] px-2 py-1 rounded-full">ACTIVAR</span> EL COMPROMISO,
          </p>
          <p className="font-matahari text-black font-bold md:text-[32px] text-[20px] leading-tight text-center md:text-left">
            <span className="bg-[#FFFF7A] px-2 py-1 rounded-full">MULTIPLICAR</span> EL IMPACTO Y
          </p>
          <p className="font-matahari text-black font-bold md:text-[32px] text-[20px] leading-tight text-center md:text-left">
            <span className="bg-[#FFFF7A] px-2 rounded-full">RECONOCER</span> LO QUE VERDADERAMENTE <br className="hidden md:block" /> MUEVE A LOS EQUIPOS.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default BottomSection;
