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

export default function CampaignObjectives() {
  return (
    <>
      <section
        className="bg-white h-fit md:h-[650px] py-16 "
        style={{
          backgroundImage: 'url("/bg-objetivos.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto space-y-10 md:px-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* TÍTULO CENTRADO ARRIBA */}
          <motion.div variants={itemVariants} className="flex justify-start ">
            <Image
              src="/objetivos-title.svg"
              alt="El reconocimiento tiene impacto"
              width={600}
              height={100}
              className="object-contain hover:scale-105 transition-transform duration-300 ease-out"
            />
          </motion.div>

          {/* GRID DE DOS COLUMNAS */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6"
            variants={containerVariants}
          >
            {/* LEFT COLUMN */}
            <motion.div className="space-y-6 text-white w-fit" variants={containerVariants}>
              {/* Bloque 1 */}
              <motion.p
                variants={itemVariants}
                className="font-bold bg-orange-500 text-black inline-block px-2 py-1 md:text-[18px] text-[16px] w-fit md:mr-16 mr-0"
              >
                Instalar una cultura de reconocimiento genuina, cercana y cotidiana.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="md:text-[18px] text-[14px]"
              >
                Promover el reconocimiento como una práctica natural que forma parte del día a día.
              </motion.p>

              {/* Bloque 2 */}
              <motion.p
                variants={itemVariants}
                className="font-bold bg-orange-500 text-black inline-block px-2 py-1 md:text-[18px] text-[16px]"
              >
                Valorar lo positivo en el otro y hacerlo visible.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="md:text-[18px] text-[14px] md:mr-[40px] mr-0"
              >
                Fomentar el hábito de mirar, destacar y celebrar los aportes, actitudes y gestos que construyen equipo.
              </motion.p>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div className="space-y-6 text-white" variants={containerVariants}>
              {/* Bloque 3 */}
              <motion.p
                variants={itemVariants}
                className="font-bold bg-orange-500 text-black inline-block px-2 py-1 md:text-[18px] text-[16px] md:mr-20 mr-0"
              >
                Impulsar el reconocimiento horizontal, público y sin jerarquías.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="md:text-[18px] text-[14px]"
              >
                Porque todos podemos reconocer. Y cuando lo hacemos entre pares, la cultura se fortalece.
              </motion.p>

              {/* Bloque 4 */}
              <motion.p
                variants={itemVariants}
                className="font-bold bg-orange-500 text-black inline-block px-2 py-1 md:text-[18px] text-[16px] md:mr-16 mr-0"
              >
                Alinear cada reconocimiento con los valores y el propósito de la organización.
              </motion.p>

              {/* Cierre destacado */}
              <motion.p
                variants={itemVariants}
                className="font-bold md:text-[20px] text-[16px] md:w-[400px] w-full"
              >
                Para que no solo se reconozca lo que se hace,{" "}
                <span className="relative inline-block">
                  sino cómo se hace.
                  <Image
                    src="/underline-cultura.svg"
                    alt="subrayado"
                    width={500}
                    height={500}
                    className="md:w-[300px] w-[100px] h-auto object-contain absolute -bottom-1 left-0"
                  />
                </span>
              </motion.p>

            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
