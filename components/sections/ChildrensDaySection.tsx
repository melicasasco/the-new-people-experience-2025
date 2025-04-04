import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";


export default function ChildrensDaySection() {
  return (
    <section id="childrens-day" className=" overflow-hidden">
      <div className="w-full ">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-stretch bg-[#d42c2c] ">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px]"
          >
        
            <Image
              src="/infancias-mockup.svg"
              alt="LAS INFANCIAS"
              fill
              className="w-[100px] object-cover hover-lift"
            />
          </motion.div>

          {/* Right side - Content */}
          <div className="bg-[#D62828] text-white p-8 md:px-12 pt-10 flex flex-col md:mr-[80px] md:mt-16">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="md:ml-10 md_mt-4"
            >
              <div className="mb-8  flex justify-start w-full">
                <Image
                  src="/infancias-title.svg"
                  alt="DÍA DE LA INFANCIA"
                  width={500}
                  height={150}
                  className="w-[200px] object-contain hover-scale  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                  />
              </div>

              <div className="space-y-6 mb-8 ">
                <p className="text-[16px]">
                  Armamos catálogos a medida de cada campaña con juguetes, libros, vouchers digitales y lugares de
                  entretenimiento.
                </p>
                <p className="flex items-center text-[16px]">
                  Para que puedas elegir en familia
                  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white text-[#D62828] h-6 w-6">
                  <Image src="/carita-transparente.png" alt="Carita sonriente" width={24} height={24} className="w-6 h-6" />

                  </span>
                </p>
              </div>

              <div className="mb-8">
                <Image
                  src="/infancias-categorias.svg"
                  alt="Categorías: Juguetes, Libros, Vouchers Digitales, Entretenimiento"
                  width={500}
                  height={100}
                  className="w-full object-contain"
                />
              </div>
              <div className="flex justify-center w-full">
              <Link
                href="/childrens-day"
                className=" font-matahari inline-block border border-white rounded-full px-6 pt-2 pb-1  hover:bg-white hover:text-[#D62828] transition-colors hover-scale md:text-[22px] text-[16px]"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link></div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

