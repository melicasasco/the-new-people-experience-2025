import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface KitsTemplateProps {
  title: string;
  items: string[];
  kitImage: string;
  reverse?: boolean;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const KitsTemplate = ({
  title,
  items,
  reverse = false,
  kitImage,
}: KitsTemplateProps) => {
  return (
    <section className="md:h-[650px] h-fit flex md:flex-row flex-col bg-white overflow-hidden">
      <motion.div
        className={`flex w-full mx-auto flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Columna Izquierda */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col md:w-1/2 w-full justify-center flex-1 bg-white"
        >
          <motion.h1
            variants={itemVariantsLeft}
            className="text-5xl px-8 md:py-12 md:pt-0 pt-8 md:px-12 xl:px-16 font-black text-black leading-tight mb-2 md:ml-12 ml-0"
          >
            <Image
              src={title}
              alt="Kit Title"
              width={400}
              height={400}
              className="w-full h-auto object-contain md:w-[400px] w-[200px]"
            />
          </motion.h1>

          <motion.ul
            variants={containerVariants}
            className="mt-4 space-y-2 px-8 pb-8 md:pb-0   md:px-12 xl:px-16 md:ml-12 ml-0 font-poppins md:text-[20px] text-[14px]"
          >
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariantsLeft}
                className="flex items-center"
              >
                <span className="mr-3 text-2xl">
                  <Image
                    src="/kit-star.svg"
                    alt="Star"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Columna Derecha */}
        <motion.div
          variants={itemVariantsRight}
          className="flex flex-col md:w-1/2 items-center flex-1 justify-center bg-[#FFFC8A] relative "
        >
          <Image
            src={kitImage}
            alt="Kit Image"
            width={400}
            height={400}
            className="w-[1000px] object-cover hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
            />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default KitsTemplate;
