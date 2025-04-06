import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function BirthsSection() {
  const isMobile = useIsMobile();
  return (
    <section id="births" className=" overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#ffff00]">
          {/* Left side - Content */}
          <div className="bg-yellow-300 p-8 md:p-12 flex flex-col justify-center md:ml-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mx-auto "
          >
              <div className="mb-8">
                <Image
                  src="/nacimientos-title.svg"
                  alt="LOS NACIMIENTOS"
                  width={300}
                  height={150}
                  className={"w-[340px] object-contain hover-scale  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"}
                  />
              </div>

              <div className="space-y-4 mb-8 md:mr-8">
                <p className="font-medium text-[16px]">
                  Cada familia es un mundo, y en esta campaña ofrecemos la posibilidad de que cada persona/familia pueda
                  elegir su regalo entre diferentes propuestas.
                </p>
              </div>

              {/* Partner logos */}
              <div className="md_mr-8">
                <Image
                  src="/nacimientos-marcas.svg"
                  alt="Marcas partners de nacimientos"
                  width={400}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center w-full md:mr-8">
              <Link
                href="/births"
                className="font-matahari inline-block border border-black rounded-full mt-8 px-6 pt-2 pb-1 hover:bg-black hover:text-yellow-300 transition-colors hover-scale md:mr-[80px] md:text-[22px] text-[16px]"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link></div>
            </motion.div>
          </div>

          {/* Right side - Image */}
                   
          <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className={!isMobile ? "relative w-full h-[600px] flex items-center justify-center" : "relative w-full h-[300px]"}
            >
          
            <Image
              src="/nacimientos-mockup.svg"
              alt="LOS NACIMIENTOS"
              fill
              className="object-cover hover-lift"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

