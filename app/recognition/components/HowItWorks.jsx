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

export default function HowItWorks() {
  return (
    <section
      className="bg-white h-fit md:px-4 md:px-6 px-4 lg:px-8 py-12 md:py-20"
      style={{
        backgroundImage: 'url("/how-it-works-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-8 items-start md:px-5 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT COLUMN: Title + Text */}
        <motion.div
          variants={containerVariants}
          className="space-y-6 md:ml-[20px]"
        >
          <motion.div variants={itemVariants}>
            <Image
              src="/como-funciona-title.svg"
              alt="¿Cómo funciona la propuesta?"
              width={500}
              height={500}
              className="w-[280px] md:w-[400px] object-contain"
            />
          </motion.div>

          {/* Cada bloque animado en cascada */}
          <motion.div
            variants={itemVariants}
            className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed max-w-2xl"
          >
            <p className="font-bold mb-2 md:text-[18px] text-[16px] md:my-8 my-4 flex items-center gap-2 mb-6 md:mb-6">
              <Image
                src="/triangle-bullet.svg"
                alt="bullet point"
                width={16}
                height={16}
                className="md:mt-1 mb-6 md:mb-0 md:w-5 md:h-5"
              />
              Reconocimientos que se ven, que se sienten.
            </p>
            <p>
              Usamos{" "}
              <span className="font-bold">pines como símbolo visible</span> del
              reconocimiento. Cada pin representa un valor, una actitud o una
              acción destacada.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed max-w-2xl"
          >
            <p className="font-bold mb-2 md:text-[18px] text-[16px] md:my-8 my-4 flex items-center gap-2 mb-6 md:mb-6">
              <Image
                src="/triangle-bullet.svg"
                alt="bullet point"
                width={16}
                height={16}
                className="md:mt-1 mb-1 md:mb-0 md:w-5 md:h-5"
              />
              Plataforma digital, simple y abierta.
            </p>
            <p>A través de una plataforma online, los colaboradores pueden:</p>
            <ul className="list-disc list-inside text-[16px] md:text-[16px] mt-1 space-y-1">
              <li>Acceder desde cualquier dispositivo.</li>
              <li>
                Enviar reconocimientos de forma{" "}
                <span className="font-bold">espontánea y 360°</span>.
              </li>
              <li>
                Hacerlo <span className="font-bold">públicamente</span>,
                generando cultura en red.
              </li>
              <li>
                Conectar con compañeros, líderes o equipos sin jerarquías.
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed max-w-2xl"
          >
            <div className="flex items-start gap-2">
              <Image
                src="/triangle-bullet.svg"
                alt="bullet point"
                width={16}
                height={16}
                className="mt-1 md:mt-1 md:w-5 md:h-5 "
              />
              <p className="font-bold md:text-[18px] text-[16px] mb-6 md:mb-0">
                El programa cobra vida a través de activaciones que generan
                movimiento, emoción y sentido.
              </p>
            </div>

            <ul className="list-disc list-inside text-[16px] md:text-[16px] mt-1 space-y-1 md:mt-8">
              <li>
                <span className="font-bold">Semanas con propósito</span>, para
                enfocar el reconocimiento en valores o temas clave.
              </li>
              <li>
                <span className="font-bold">Desafíos de reconocimiento</span>,
                para incentivar a reconocer de forma lúdica y ágil.
              </li>
              <li>
                <span className="font-bold">Rankings simbólicos</span>, que
                celebran tanto a quienes son reconocidos como a quienes más
                reconocen.
              </li>
              <li>
                <span className="font-bold">Kits y dinámicas para equipos</span>
                , que refuerzan el espíritu colectivo y la pertenencia.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Mockup */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-start w-full h-full overflow-hidden"
        >
          <Image
            src="/como-funciona-mockup.svg"
            alt="Mockup de la propuesta"
            width={600}
            height={500}
            className="h-auto object-contain md:w-[900px] md:right-[-40px] right-[-20px] absolute w-[300px] "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
