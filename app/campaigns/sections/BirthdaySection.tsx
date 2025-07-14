import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BirthdaySection() {
const isMobile = useIsMobile();
  return (
    <section id="birthday" className="">
      <div className="max-w-full mx-auto shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="h-fit py-8 flex flex-col justify-center  md:h-[600px]"
          >
            <div className="mb-6 md:ml-[110px] md:px-0 md:px-8 px-5">
              <Image
                src="/cumples-title.svg"
                alt="LOS CUMPLEAÑOS"
                width={500}
                height={150}
                className="w-[340px] object-contain hover-scale  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
              />
            </div>

            <p className="mb-4 text-[16px] md:ml-[110px] md:px-0 md:px-8 px-5">
              ¡Momentos que se celebran!
            </p>

            <p className="mb-4 text-[16px] md:ml-[110px] md:mr-[60px] md:px-0 md:px-8 px-5">
              Activamos un saludo sorpresa en el día del cumpleaños de cada
              colaborador.
            </p>

            <div className=" text-white font-matahari md:px-0 md:px-8  mb-8 inline-block leading-none hover-scale text-sm font-bold md:ml-[110px] ml-4 md:px-0 ">
              <p className="bg-black tracking-wide w-fit p-1 px-3 py-3 md:text-[20px] text-[16px]">
                ¡Y TAMBIÉN LO INVITAMOS A QUE ELIJA
              </p>
              <p className="bg-black font-matahari mt-1 w-fit  md:text-[20px] text-[16px] px-3 pt-3 py-3 p-1 tracking-wide">
                ALGO!
              </p>
            </div>

            <div className="flex justify-center w-full">
              <Link
                href="/campaigns/category/birthday"
                className="inline-block font-black border border-black rounded-full px-6 pt-2 pb-1 hover:bg-black hover:text-white transition-colors hover-scale md:ml-[10px] font-matahari md:text-[22px] text-[16px]"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link>
            </div>
          </motion.div>

          <div className={isMobile ? "bg-teal-400 h-fit flex items-center justify-center" : "bg-teal-400 md:h-[600px] flex items-center justify-center md:justify-end"}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative w-full  flex items-center justify-center"
              >
                <Image
                  src="/cumples-mockup-v2.svg"
                  alt="LOS CUMPLEAÑOS"
                  width={500}
                  height={400}
                  className="object-contain w-[700px] h-auto"
                  priority
                />
              </motion.div>
            </div>

        </div>
      </div>
    </section>
  )
}

