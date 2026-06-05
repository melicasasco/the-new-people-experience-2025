"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative md:h-[550px] h-[400px] overflow-hidden bg-[#FAFAF8] flex md:items-center items-end md:justify-start md:py-16 py-8 px-4 sm:px-8 lg:px-20"
    >
      <Image
        src="/hero.svg"
        alt=""
        width={934}
        height={447}
        className="pointer-events-none absolute hidden md:block left-[48%] top-[9%] w-[160px] h-auto object-contain"
        aria-hidden="true"
      />
      <motion.div
        className="max-w-5xl flex flex-col items-start space-y-1 md:-translate-y-8 relative z-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Texto superior */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-[20px] md:ml-[60px] md:text-[27px] font-normal leading-[1.5] font-poppins text-black"
        >
          Diseñamos la
        </motion.p>

        {/* EXPERIENCIA */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="font-matahari md:ml-[60px] leading-none inline-block sm:text-[80px] md:text-[140px] font-black text-black"
        >
          <Image
            src="/experiencia-empleado.svg"
            alt="EXPERIENCIA"
            width={100}
            height={100}
            className="md:w-[600px] w-[300px] object-contain"
          />
        </motion.h1>

        {/* EMPLEADO (Outline) */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="text-[60px] sm:text-[80px] md:ml-[60px] md:text-[110px] leading-tight font-black outline-text"
        >
         
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="bg-[#F7E86B] p-1 text-[20px] md:ml-[60px] md:text-[27px] font-normal leading-snug font-poppins text-black"
        >
          con sentido, valor e{" "}
          <span className="relative inline-block ">
            impacto real
            <Image
              src="/underline-curved.svg"
              alt="subrayado impacto real"
              width={300}
              height={30}
              className="absolute left-0 bottom-0 w-full object-contain"
            />
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
