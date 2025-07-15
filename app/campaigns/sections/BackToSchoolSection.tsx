import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BackToSchoolSection() {
const isMobile = useIsMobile();
  return (
    <section id="back-to-school" className=" overflow-hidden">
      <div className="w-full mx-auto bg-[#b48cd4]">
      <div
       className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-stretch"
       >
          {/* Left side - Image */}
          <div className="bg-gray-100 relative overflow-hidden md:h-[600px]">
            <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
             className={!isMobile ? "relative w-full h-[600px] flex items-center justify-center" : "relative w-full h-[400px]"}
          >
              <Image
                src="/vuelta-al-cole-mockup.svg"
                alt="Tablet con aplicación de vuelta al cole"
                fill
                className="object-cover hover-lift"
              />
            </motion.div>
            
          </div>

          {/* Right side - Content */}
          <div className=" p-8  flex flex-col justify-center md:-h-[600px] ">
            
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:items-start items-center"
             
            >
              <div className="mb-2 bg-[#b48cd4]  md:px-[90px]">
                <Image
                  src="/vuelta-al-cole-title.svg"
                  alt="LA VUELTA AL COLE"
                  width={500}
                  height={150}
                  className="w-[340px] object-contain hover-scale  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                  />
                  <span className="flex justify-start">
                    <Image src="/little-star.svg" alt="start" width={15} height={100} className="w-full object-contain md:w-[16px] mt-4 mb-1 w-[10px]  ml-[-15px]" />
                  </span>
              </div>

              <div className="space-y-4 mb-8 text-[16px] text-white  md:px-[90px]">
                <p className="text-[16px]">Una de las campañas más valoradas por los empleados de las empresas.</p>
                <p className="text-[16px]">
                  Proponemos una vuelta al cole súper flexible donde cada colaborador puede{" "}
                  <strong>armar el kit escolar totalmente a medida</strong> o <strong>canjear su voucher</strong> en
                  tiendas especialmente seleccionadas.
                </p>
              </div>

              <div className="flex justify-center w-full md:mt-8 mt-0">
                <Link
                  href="/campaigns/category/back-to-school"
                  className="inline-block border border-white font-black rounded-full px-6 pt-2 pb-1  hover:bg-white hover:text-[#B68AD4] transition-colors text-white hover-scale font-matahari md:text-[22px] text-[16px]"

                >
                  + INFO SOBRE LA CAMPAÑA
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

