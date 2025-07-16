"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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

export default function ImpactRecognition() {
  const router = useRouter();
  const isMobile = useIsMobile();


  return (
    <>
    <div style={{
      backgroundImage: isMobile ? 'none' : 'url("/impact-recognition-bg.svg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: isMobile ? 'auto' : '650px',
    }}  >
      <button
        onClick={() => router.back()}
        className="inline-flex items-center text-black hover:text-gray-700 transition-colors ml-4 mt-6"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Volver
      </button>

      <section className="md:h-[650px] md:mt-14 mt-4 items-center h-fit  px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT: TEXT COLUMN */}
          <motion.div
            variants={containerVariants}
            className=" md:ml-[40px] ml-0"
          >
            <motion.div variants={itemVariants}>
              <Image
                src="/el-reconocimiento-tiene-impacto.svg"
                alt="El reconocimiento tiene impacto"
                width={500}
                height={500}
                className="w-full max-w-[600px] object-contain  mt-0"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="bg-black text-white font-matahari font-bold md:text-[20px] text-[16px] px-4 pb-2 pt-3 inline-block"
            >
              NOS UNE, NOS FORTALECE Y SOSTIENE LA CULTURA.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-800 max-w-2xl py-4"
            >
              <p className="font-semibold md:text-[20px] text-[16px] my-4 pb-4">
                Cuando alguien se siente reconocido:
                <br />
                Confía más. Participa más. Contagia actitud.
              </p>
              <p className="md:text-[18px] text-[14px]">
                Reconocer es darle lugar a lo que importa.
                <br />
                Diseñamos programas auténticos, cotidianos y sin jerarquías.
                <br />
                Porque cuando el reconocimiento circula, la cultura se
                fortalece.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: IMAGE COLUMN */}
          <motion.div
            variants={itemVariants}
            className="flex md:justify-end justify-center items-center w-full h-full"
          >
            <div className="w-full max-w-[500px] h-auto flex justify-center md:justify-end md:pb-0 pb-10">
              <Image
                src="/impact-recognition-pines.svg"
                alt="Imagen de pines"
                width={500}
                height={500}
                className="md:w-[400px] w-[200px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </section></div>
    </>
  );
}
