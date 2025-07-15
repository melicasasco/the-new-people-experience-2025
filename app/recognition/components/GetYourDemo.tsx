"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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

export default function GetYourDemo() {
  const router = useRouter();

  return (
    <section
      className="relative w-full bg-white md:py-16 py-4 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url("/demo-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto flex flex-col items-start justify-center h-full "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Título grande */}
        <motion.h2
          variants={itemVariants}
          className="text-3xlx font-matahari text-[30px] md:text-5xl lg:text-6xl font-black text-black leading-tight text-left"
        >
          PONÉ EN VALOR LO QUE VES,
          <br className="hidden md:block" />
          LO QUE SE RECONOCE,
        </motion.h2>

        {/* Imagen debajo del título */}
        <motion.div variants={itemVariants} className="w-full">
          <Image
            src="/permanece.svg"
            alt="permanece"
            width={500}
            height={500}
            className="w-[200px] md:w-[350px] lg:w-[400px] object-contain"
          />
        </motion.div>

        {/* Botón */}
       
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center items-center md:mt-24 mt-12">
          <button
            onClick={() => router.push("#contact")}
            className="bg-white font-black font-matahari text-black border-2 border-black px-8 pb-3 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-out hover:scale-105 text-[16px] md:text-[20px]"
          >
            SOLICITÁ TU DEMO
          </button>
        </motion.div>
    </section>
  );
}
