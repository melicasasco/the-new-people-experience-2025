import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

export default function BirthdaySection() {
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

            <div className=" text-white md:px-0 md:px-8 px-5 py-2 mb-8 inline-block leading-none hover-scale text-sm font-bold md:ml-[110px] md:px-0 ">
              <p className="bg-black tracking-wide w-fit p-1 text-[16px] ">
                ¡Y TAMBIÉN LO INVITAMOS A QUE
              </p>
              <p className="bg-black mt-1 w-fit text-[16px] p-1">
                ELIJA ALGO PARA CELEBRARLO!
              </p>
            </div>

            <div className="flex justify-center w-full">
              <Link
                href="/birthday"
                className="inline-block border border-black rounded-full px-6 pt-2 pb-1 hover:bg-black hover:text-white transition-colors hover-scale md:ml-[10px] font-matahari md:text-[22px] text-[16px]"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link>
            </div>
          </motion.div>

          <div className="bg-teal-400 md:h-[600px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[600px] flex items-center justify-center"
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

