"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Gesture() {
  return (
    <section
      className="h-fit md:px-4 px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/bg-gesto.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 "></div>
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* TOP ROW: Title and Pin Image */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-2 items-center md:h-[220px] h-full"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="flex justify-start md:justify-start md:ml-8">
            <Image src="/un-gesto-title.svg" alt="Un gesto" width={500} height={500} className="md:w-[500px] w-[300px] object-contain" />
          </motion.div>

          {/* Pin Image */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-center md:mb-9">
            <Image
              src="/jugar-en-equipo-pin.svg"
              alt="Jugar en equipo: Lo tuyo"
              width={300}
              height={300}
              className="object-contain w-[180px] md:w-[240px] md:ml-12 md:mb-5"
            />
          </motion.div>
        </motion.div>

        {/* BOTTOM ROW: Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8 md:ml-8"
        >
          {/* LEFT COLUMN: Content */}
          <motion.div className="space-y-8 text-black">
            {/* Intro Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] md:text-[18px] leading-relaxed max-w-xl text-black md:mt-3"
            >
              Proponemos incorporar distintos <span className="font-bold">pines como símbolos visibles del reconocimiento</span>. Cada pin representa un valor, una actitud o una forma de hacer que queremos reforzar.
            </motion.p>

            {/* ¿POR QUÉ PINES? Block */}
            <motion.div
              variants={itemVariants}
              className="text-white  max-w-xl space-y-4 rounded md:w-[480px] w-full"
            >
              <h3 className="font-bold uppercase text-[14px] md:text-[20px] bg-black w-fit px-2 py-2">¿POR QUÉ PINES?</h3>
              <ul className="text-black space-y-1 list-disc list-inside text-[14px] md:text-[16px]">
                <li>Porque son <span className="font-bold">visuales, concretos y emocionales</span>.</li>
                <li>Porque <span className="font-bold">se entregan, se lucen y se comparten</span>.</li>
                <li>Porque generan conexión entre quien reconoce y quien es reconocido.</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <motion.div className="space-y-1 text-black">
            {/* PINES QUE REPRESENTAN VALORES Block */}
            <motion.div
              variants={itemVariants}
              className="text-white p-1 md:p-6 max-w-xl space-y-4 rounded md:w-[450px] w-full"
            >
              <h3 className="font-bold uppercase text-[14px] md:text-[20px] bg-black w-fit px-2 py-2">PINES QUE REPRESENTAN VALORES</h3>
              <p className="text-[14px] text-black md:text-[18px]">
                Cada vez que alguien envía un reconocimiento, puede <span className="font-bold">asociarlo a un valor o principio cultural</span>. Eso ayuda a:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[14px] text-black md:text-[16px]">
                <li><span className="font-bold">Bajar los valores a tierra</span></li>
                <li><span className="font-bold">Reflexionar sobre las acciones cotidianas</span></li>
                <li><span className="font-bold">Construir cultura desde lo concreto</span></li>
              </ul>
            </motion.div>

            {/* Final Underlined Sentence */}
            <motion.p
              variants={itemVariants}
              className="text-[16px] md:text-[22px] font-bold leading-relaxed max-w-xl  text-black md:ml-6"
            >
              Para que no solo se reconozca lo que se hace, <br />
              <span className="relative">
                <Image src="/underline-cultura.svg" alt="subrayado" width={500} height={500} className="md:w-[300px] w-[100px] h-auto object-contain absolute -bottom-1 left-0" />
                <span className="relative">sino cómo se hace.</span>
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
