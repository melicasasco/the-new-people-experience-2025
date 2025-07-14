import Image from "next/image";
import { Button } from "../ui/button";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HeyTeam() {
  const router = useRouter();
  return (
    <section
      className="md:h-full h-fit bg-[#1A1A1A] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("/hey-team-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex flex-col w-full lg:flex-row items-center justify-between max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          className="flex-1 w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
            <Image
              src="/HEYTEAM.svg"
              alt="HEY TEAM"
              width={500}
              height={150}
              className="max-w-[300px] w-[250px] md:w-[300px] lg:max-w-[640px] object-contain hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="md:text-[50px] text-[30px] uppercase text-white font-matahari mt-4 font-bold"
          >
            Plataforma de Incentivos.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="md:text-[30px] text-[20px] text-white leading-relaxed font-matahari font-bold"
          >
            Lo que mueve a los equipos, se impulsa.<br />
            Visibilizá los impulsores clave:
          </motion.h2>

          {[
            { text: "actitud,", underline: "/underline.svg" },
            { text: "foco,", underline: "/underline.svg" },
            { text: "constancia,", underline: "/underline2.svg" },
            { text: "impacto.", underline: "/underline.svg" },
          ].map((item, index) => (
            <motion.h3
              key={index}
              variants={itemVariants}
              className="relative w-fit md:text-[28px] text-[20px] text-white leading-relaxed font-matahari font-bold"
            >
              <span className="relative inline-block">
                {item.text}
                <span className="absolute left-0 bottom-0 w-full h-[8px]">
                  <Image
                    src={item.underline}
                    alt="underline"
                    fill
                    className="object-cover"
                  />
                </span>
              </span>
            </motion.h3>
          ))}

          {/* Button */}
          <motion.div variants={itemVariants} className="flex justify-center mt-8">
            <Button
              className="text-white border-white"
              onClick={() => { router.push('/') }}
            >
              LA PLATAFORMA
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
