import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

export default function ChristmasBoxSection() {
  return (
    <section id="christmas-box" className=" overflow-hidden">
      <div className="w-full mx-auto shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left side - Content */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center md:ml-[80px]">
            <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
              <div className="mb-8 w-full mx-auto flex ">
                <div className="w-full  max-w-md">
                  <Image
                    src="/navidad-title.svg"
                    alt="LA CAJA NAVIDEÑA"
                    width={500}
                    height={150}
                    className="w-[340px] object-contain hover-scale  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                    />
                </div>
              </div>

              <div className="space-y-4 mb-8 flex flex-col justify-start">
                <p className="font-medium text-[16px] md:pr-14 text-left">
                  Uno de los momentos más especiales del año, y una de nuestras campañas preferidas.
                </p>
                <p className="font-bold">CHIN CHIN | Elegí tu caja</p>
              </div>

              {/* Box types */}
              <div className="mb-8 flex justify-start ">
                <Image
                  src="/navidad-cajas.svg"
                  alt="Tipos de cajas: Clásica, Gourmet, Choco, Picada, Cocktail, Natural"
                  width={500}
                  height={150}
                  className="w-full object-contain"
                />
              </div>

              <div className="flex justify-start w-full md:ml-[54px] ml-4">
                <Link
                  href="/christmas"
                  className="font-matahari inline-block border border-black rounded-full px-6 pt-2 pb-1  hover:bg-black hover:text-white transition-colors hover-scale md:text-[22px] md:text-[22px] text-[16px]"
                >
                  + INFO SOBRE LA CAMPAÑA
                </Link>
              </div>
            </motion.div>

          </div>

          {/* Right side - Image */}
          <div className="bg-[#5A9A7E] relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
             className="relative w-full h-full min-h-[500px]"
            >
              <Image
                src="/navidad-mockup.svg"
                alt="Plataforma de cajas navideñas en laptop y móvil"
                fill
                className="object-cover hover-lift"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

