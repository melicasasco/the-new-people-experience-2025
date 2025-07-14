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

export default function BornTuSurprise() {
  const router = useRouter();

  return (
    <section
      className="md:h-[650px] h-fit flex items-center justify-center md:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url("/impacto.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl"
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
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="mb-8 lg:mb-12 pb-2 pt-4 px-4 w-fit bg-[#1A1A1A]"
          >
            <h1 className="md:text-[50px] text-[30px] text-nowrap text-white font-matahari font-bold flex items-center justify-center leading-none">
              BORN TO SURPRISE.
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-8 lg:mb-12 max-w-2xl"
          >
            <p className="font-bold font-matahari md:text-[30px] text-[20px]">
              Más que kits:<br />
              cultura que se siente.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-10"
          >
            <Button
              onClick={() => { router.push('/bornToSurprise') }}
              className="text-black border-black"
            >
              INSPO KITS
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex-1 w-full lg:w-1/2 md:p-8 p-4 lg:p-12 xl:p-16 flex items-center justify-center relative z-10"
        >
          <Image
            src="/born-to-surprise-mockup.svg"
            alt="Born to surprise"
            width={600}
            height={400}
            className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
