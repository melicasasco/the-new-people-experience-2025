"use client";
import React from "react";
import { motion } from "framer-motion";
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

export default function Intro() {
    const isMobile = useIsMobile()
  return (
    <section
      className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: isMobile ? 'none' : 'url("/borntosurprise-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-start justify-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        >

        {/* Título principal en bloque negro */}
        <motion.h1
          variants={itemVariants}
          className="bg-black text-white font-black text-[30px] sm:text-[34px] md:text-[28px] lg:text-[40px] px-4 py-2 inline-block"
        >
          BORN TO SURPRISE.
        </motion.h1>

        {/* Subtítulo en bold */}
        <motion.p
          variants={itemVariants}
          className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-relaxed max-w-3xl"
        >
          Diseñamos kits únicos, alineados a la identidad
          y a la cultura de cada equipo/organización.
        </motion.p>

        {/* Párrafo normal */}
        <motion.p
          variants={itemVariants}
          className="text-[16px] sm:text-[14px] md:text-[18px] text-gray-800 leading-relaxed max-w-3xl"
        >
          Los kits Born to Surprise no son solo regalos: son disparadores de momentos que inspiran, reconocen y fortalecen vínculos. 
          Con empatía, intención y creatividad, transformamos un gesto simple en una experiencia que los equipos recuerdan, valoran y disfrutan.
        </motion.p>

        {/* Frase final destacada */}
        <motion.p
          variants={itemVariants}
          className="text-[16px] sm:text-[14px] md:text-[18px] font-bold leading-relaxed max-w-3xl  inline-block pb-1"
        >
          Porque los detalles, cuando tienen propósito, se vuelven cultura.
        </motion.p>
      </motion.div>
    </section>
  )
}
