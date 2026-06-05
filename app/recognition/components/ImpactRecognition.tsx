"use client";
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
      backgroundImage: 'url("/impact-recognition-bg-2.svg")',
      backgroundSize: "cover",
      backgroundPosition: isMobile ? "38% center" : "center",
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

      <section className="md:h-[560px] md:mt-0 mt-4 flex items-start md:items-center min-h-[560px] md:min-h-0 px-4 sm:px-6 lg:px-8 py-12 md:pt-8 md:pb-0">
        <motion.div
          className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT: TEXT COLUMN */}
          <motion.div
            variants={containerVariants}
            className="lg:col-start-2 max-w-[680px] text-white md:-translate-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="font-matahari font-bold leading-none md:text-[64px] text-[40px]"
            >
              EL RECONOCIMIENTO
              <br />
              TIENE IMPACTO
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="bg-[#F4BACA] text-white font-matahari font-bold md:text-[24px] text-[18px] px-3 pb-1 pt-2 inline-block mt-5"
            >
              NOS UNE, NOS FORTALECE Y SOSTIENE LA CULTURA.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-5 max-w-[620px] pt-7"
            >
              <p className="font-poppins font-semibold md:text-[24px] text-[18px] leading-relaxed">
                Cuando alguien se siente reconocido:
                <br />
                Confía más. Participa más. Contagia actitud.
              </p>
              <p className="font-poppins md:text-[20px] text-[16px] leading-relaxed">
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
        </motion.div>
      </section></div>
    </>
  );
}
