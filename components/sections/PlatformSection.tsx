import Image from "next/image"
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";


export default function PlatformSection() {
  const isMobile = useIsMobile();
  const backgroundStyle = !isMobile
  ? {
      backgroundImage: 'url("/bg-plataforma-beneficios-3.svg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }
  : {};
  return (
    <section className=" relative overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Ambos bloques con exactamente las mismas dimensiones y propiedades */}
          <div
            className="h-[600px] p-8 flex flex-col justify-center"
            style={{
              backgroundImage: 'url("/bg-plataforma-beneficios-1.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
           <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="md:ml-[80px] md:px-10"
          >
              <div className="mb-2">
                <Image
                  src="/plataforma-de-beneficios.svg"
                  alt="PLATAFORMA DE BENEFICIOS"
                  width={500}
                  height={150}
                  className="w-[640px] object-contain hover-scale hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                />
              </div>

              <div className="bg-yellow-300 inline-block px-3 py-1 mb-6">
                <p className="font-bold font-poppings text-[16px]">Multidispositivo, multicampañas</p>
              </div>

              <p className="mb-0 font-poppings text-regular text-[16px]">
              Funciona como inbound para potenciar la propuesta de <span className="relative inline-block">
                valor al empleado
                <Image
                  src="/underline.svg"
                  alt="Subrayado"
                  width={144}
                  height={24}
                  className="absolute -bottom-1 left-0 md:w-[144px] w-[110px]"
                />
              </span>.
            </p>

              <p className="mb-4 font-poppings text-regular text-[16px] mt-3">
                Comunica todos los beneficios de manera
                <strong> positiva, simple y actual</strong>, asumiendo que hoy apreciamos la libertad de elegir.
              </p>

              <p className="mb-2 font-poppings text-regular text-[16px] ">Eleva el engagement, con la activación de <span className="font-bold">campañas de beneficios flex.</span></p>
            </motion.div>
          </div>

          <div
            className="md:h-[600px] h-fit p-8 flex items-center justify-center"
            style={backgroundStyle}
          >
            {/* Laptop mockup */}
            <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 w-full mx-auto md:mr-[100px]"
                >
              <Image
                src="/mockup-plataforma-2.svg"
                alt="Plataforma de beneficios en laptop"
                width={600}
                height={400}
                className="md:w-[1000px] h-auto hover-lift hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

