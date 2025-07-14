"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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

const Intro = () => {
  const router = useRouter();

  return (
    <section
      style={{
        backgroundImage: 'url("/platform-intro-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="w-full py-4"
    >
      <div className="px-4">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-black hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver
        </button>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-start justify-start h-full md:h-[650px] md:ml-[60px] ml-0"
        >
          <motion.div variants={itemVariants}>
            <Image
              src="/hey-team-white.svg"
              alt="logo"
              width={400}
              height={400}
              className="md:w-[300px] w-[200px] mt-16"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-black text-center font-matahari md:text-[60px] text-[24px] font-bold mt-4"
          >
            PLATAFORMA DE INCENTIVOS
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-black max-w-[800px] text-start font-poppins md:text-[20px] text-[14px] mt-4"
          >
            Una solución flexible para diseñar campañas de reconocimiento, incentivos y premios a medida, alineadas con los objetivos de cada equipo, cada momento y cada cultura organizacional.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start font-matahari bg-[#FFFF7A] h-fit p-4 justify-start md:text-[24px] text-[14px] mt-16 ml-0"
          >
            LO QUE OFRECE:
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
