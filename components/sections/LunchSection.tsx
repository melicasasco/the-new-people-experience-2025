import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function LunchSection() {
  const isMobile = useIsMobile();
  return (
    <section id="lunch" className="overflow-hidden ">
      <div className="w-full  shadow-md">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Image - Reemplazada con un div de color */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className={!isMobile ? "relative w-full h-[670px] flex items-center justify-center" : "relative  h-[400px] "}
          >

             <Image
              src="/lunchh.svg"
              alt="LOS ALMUERZOS"
              fill
              className="object-cover object-left h-full "
              />
             </motion.div>

          {/* Right side - Content */}
          <div
             className="bg-[#333333] text-white h-[670px] px-4 flex flex-col justify-center"
            >
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 w-full flex justify-center mt-12">
                <div className="w-full md:ml-[110px] ml-0">
                  <h2 className="text-2xl font-bold">
                    <Image
                      src="/los-almuerzos-titulo.svg"
                      alt="LOS ALMUERZOS"
                      width={300}
                      height={850}
                      className="w-[240px] object-contain hover-scale md:ml-[0px] ml-3  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                      />
                  </h2>
                </div>
              </div>

              <div className="space-y-8 mb-4 md:ml-[80px] md:mr-[60px] md:px-8 px-4">
                <p className=" text-[16px]">
                  Los colaboradores reciben créditos para poder elegir sus
                  almuerzos. La campaña se calendariza de acuerdo a las
                  necesidades de cada empresa.
                </p>
                <p className=" text-[16px]">
                  Las opciones para elegir son muy variadas entre alternativas
                  de delivery, viandas, healthy food y restaurantes.
                </p>
                <p className=" text-[16px]">
                  También se puede sumar la versión <strong>SNACK TIME</strong>.
                </p>
              </div>

              <div className="flex justify-center mt-4 w-full mb-8">
                <Link
                  href="/lunch"
                  className="font-matahari inline-block border border-white rounded-full mb-4 px-6 pt-2 pb-1  hover:bg-white hover:text-[#333333] transition-colors hover-scale md:text-[22px] text-[16px]"
                >
                  + INFO SOBRE LA CAMPAÑA
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
