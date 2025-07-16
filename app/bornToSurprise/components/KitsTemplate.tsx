"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface KitsTemplateProps {
  title: string;
  items: string;
  description: string;
  backgroundColor?: string;
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
  description,
  backgroundColor = '#FFFC8A',
}: KitsTemplateProps) => {
  const descriptionItems = description ? description.split(' | ') : [];

  return (
    <section
      className="h-fit flex flex-col overflow-hidden"
      style={{ backgroundColor }}
    >
      <motion.div
        className="flex w-full mx-auto flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Columna Izquierda */}
        <motion.div
          variants={containerVariants}
          className="flex md:ml-8 flex-col gap-2 justify-center flex-1 md:px-8 px-4"
        >
          {title && (
            <motion.h1
              variants={itemVariantsLeft}
              className="text-5xl font-black text-black leading-tight md:ml-16 ml-0 mt-8 mb-4"
            >
              <Image
                src={title}
                alt="Kit Title"
                width={400}
                height={400}
                className="h-auto object-contain md:w-[300px] w-[200px]"
              />
            </motion.h1>
          )}

          <motion.div
            variants={itemVariantsRight}
            className="flex flex-col items-center flex-1 justify-center relative mb-6"
          >
            {items && (
              <Image
                src={items}
                alt="Kit Image"
                width={400}
                height={400}
                className="w-full h-auto object-contain max-w-[300px] md:max-w-[600px] xl:max-w-[600px] hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
              />
            )}
          </motion.div>

          {descriptionItems.length > 0 && (
            <motion.div
                variants={containerVariants}
                className="flex flex-wrap md:justify-center justify-start items-center text-center font-poppins md:text-[20px] text-[14px] mb-8"
            >
                {descriptionItems.map((item, idx) => (
                <motion.span
                    key={idx}
                    variants={itemVariantsLeft}
                    className="inline-flex items-center"
                >
                    {item}
                    {idx < descriptionItems.length - 1 && (
                    <span className="mx-2">|</span>
                    )}
                </motion.span>
                ))}
            </motion.div>
            )}

        </motion.div>
      </motion.div>
    </section>
  )
}

export default KitsTemplate;
