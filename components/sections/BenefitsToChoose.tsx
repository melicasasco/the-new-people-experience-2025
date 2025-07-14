import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

export default function BenefitsToChoose() {
  const router = useRouter();

  return (
    <section
      className="h-fit md:h-[650px] flex items-center justify-center md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/benefits-to-choose-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          className="flex-1 w-full lg:w-1/2 md:p-8 p-4 lg:p-12 xl:p-16 relative z-10"
        >
          <motion.div variants={itemVariantsLeft} className="mb-4 mt-4 md:mt-0 ">
            <Image
              src="/mejor-beneficio-es-el-que-se-elige.svg"
              alt="EL MEJOR BENEFICIO ES EL QUE ELIGE EL EMPLEADO"
              width={500}
              height={150}
              className="w-full max-w-[500px] lg:max-w-[640px] object-contain hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
            />
          </motion.div>

          <motion.div variants={itemVariantsLeft} className="mb-8 lg:mb-12 max-w-2xl">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-800 md:py-2 py-1 md:pr-8">
              La flexibilidad importa.<br />
              Cuando cada persona puede elegir, la experiencia se vuelve significativa, y la propuesta de valor crece con sentido.
            </p>
          </motion.div>

          <motion.div variants={itemVariantsLeft} className="flex justify-center">
            <Button
              className="text-black border-black"
              onClick={() => { router.push('/campaigns') }}
            >
              VER CAMPAÑAS
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariantsRight}
          className="flex-1 w-full lg:w-1/2 md:p-8 p-4 lg:p-12 xl:p-16 flex items-center justify-center relative z-10"
        >
          <Image
            src="/el-mejor-beneficio-mock-up.svg"
            alt="Plataforma de beneficios en laptop"
            width={600}
            height={400}
            className="sm:w-[500px] md:w-[1200px] w-full max-w-[900px] lg:max-w-[600px] xl:max-w-[700px] h-auto hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
