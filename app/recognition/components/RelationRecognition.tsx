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

export default function RelationRecognition() {

  return (
    <>
      <section
        className="bg-white h-fit md:h-[650px] px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url("/relation-recognition-bg.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-6 items-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT: TEXT COLUMN */}
          <motion.div
            variants={containerVariants}
            className="space-y-4 md:ml-[40px] md:h-[650px] md:mt-[120px] mt-0 ml-0"
          >
            <motion.div variants={itemVariants}>
              <Image
                src="/reconocer-title.svg"
                alt="El reconocimiento tiene impacto"
                width={500}
                height={500}
                className=" w-[200px] md:w-[300px] object-contain mt-10 md:mt-0"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="bg-black text-white mt-0 font-matahari font-bold md:text-[20px] text-[16px] md:text-xl px-4 pb-2 pt-3 inline-block"
            >
              ES CONSTRUIR RELACIONES DE VALOR.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className=" font-matahari font-extrabold md:text-[30px] text-[16px]  px-1 inline-block md:w-[480px] w-full"
            >
              FORTALECER VÍNCULOS Y HACER QUE LO INVISIBLE SE VUELVA VISIBLE.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-800 max-w-2xl px-1"
            >
              <p className="font-semibold md:text-[20px] text-[16px]">
                La clave está en diseñar programas que convoquen a toda la
                organización.
              </p>
              <p className="md:text-[18px] text-[14px]">
                Que sean cercanos, cotidianos y auténticos.
              </p>
              <p className="md:text-[18px] text-[14px]">
                Que no distingan jerarquías, sino que conecten personas.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-800 max-w-2xl"
            >
             <p className="font-semibold md:text-[20px] text-[16px] pb-4 md:whitespace-nowrap">
                Porque cuando el reconocimiento circula,&nbsp;
                <span className="relative inline-block">
                  la cultura se fortalece.
                  <Image
                    src="/underline-cultura.svg"
                    alt="subrayado"
                    width={500}
                    height={500}
                    className="md:w-[300px] w-[100px] h-auto object-contain absolute -bottom-1 left-0"
                  />
                </span>
              </p>

            </motion.div>
          </motion.div>

          {/* RIGHT: IMAGE COLUMN */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center  w-full h-full"
          >
            <Image
              src="/alta-actitud-pin.svg"
              alt="alta actitud"
              width={500}
              height={500}
              className="h-auto object-contain md:w-[300px] w-[200px] mx-auto hover:scale-105 transition-transform duration-300 ease-out"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
