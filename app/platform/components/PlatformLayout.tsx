"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PlatformData {
  title: string;
  subtitle: string;
  image: string;
  question: string | null;
  hasBullet: boolean;
  reverse?: boolean;
}

interface PlatformLayoutProps {
  item: PlatformData;
  index: number;
  reverse: boolean;
}

// Efectos de contenedor (stagger)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Efecto en ítems (slide + fade)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const PlatformLayout = ({ item, index, reverse }: PlatformLayoutProps) => {
  const backgroundColor = index % 2 === 0 ? '#FFFF7A' : '#FFFFFF';

  // Render bullets con animación
  const renderBulletedLines = () => {
    const parts = item.subtitle
      .split('.')
      .map(part => part.trim())
      .filter(Boolean);

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-y-3 mt-4"
      >
        {parts.map((part, idx) => {
          const lower = part.toLowerCase();
          let bulletSrc = "/default-bullet.svg";

          if (
            lower.startsWith("plataforma intuitiva") ||
            lower.startsWith("gestión 100%") ||
            lower.startsWith("gestion 100%")
          ) {
            bulletSrc = "/black-bullet.svg";
          } else if (
            lower.includes("campañas de reconocimiento") ||
            lower.includes("programas de incentivos") ||
            lower.includes("premios") ||
            lower.includes("programas para onboarding")
          ) {
            bulletSrc = "/tick-bullet.svg";
          }

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start space-x-3"
            >
              <Image
                src={bulletSrc}
                alt="bullet"
                width={20}
                height={20}
                className="object-contain mt-1"
              />
              <span className="text-black font-poppins md:text-[18px] text-[14px] leading-relaxed">
                {part}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    );
  };

  const subtitleContent = item.hasBullet ? renderBulletedLines() : (
    <motion.p
      variants={itemVariants}
      className="text-black font-poppins md:text-[20px] text-[14px] leading-relaxed"
    >
      {item.subtitle}
    </motion.p>
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={`
        w-full flex flex-col md:flex-row
        ${reverse ? 'md:flex-row-reverse' : ''}
        h-auto md:h-[600px]
        transition-colors duration-300
      `}
      style={{ backgroundColor }}
    >
      {/* Imagen */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={600}
          className="w-full h-full object-cover hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        variants={itemVariants}
        className={`w-full md:w-1/2  h-full flex flex-col items-start justify-center p-8`}
      >
        <h1 className={`text-black ${reverse ? 'md:ml-[80px]' : 'md:mr-[80px]'} font-matahari font-bold md:text-[50px] text-[24px] leading-tight md:mb-6 mb-4`}>
          {item.title}
        </h1>
        {item?.question && (
          <motion.p
            variants={itemVariants}
            className={`text-black ${reverse ? 'md:ml-[180px]' : 'md:mr-[180px]'} font-poppins md:text-[20px] text-[14px] leading-relaxed mb-4`}
          >
            {item.question}
          </motion.p>
        )}
        <div className={`max-w-[500px] ${reverse ? 'md:ml-[80px]' : 'md:mr-[80px]'}`}>
          {subtitleContent}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default PlatformLayout;
