import Image from "next/image"
import { useInView } from "react-intersection-observer";
import AnimatedNumber from "../../components/ui/animatednumber";
import { motion } from "framer-motion";


export default function FlexibilitySection() {

  const { ref, inView } = useInView({ triggerOnce: true });

  
  return (
    <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex justify-center h-fit mb-8"
>

    <section
      className="bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'url("/flexibilidad-bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
   <div className="w-full mx-auto shadow-md">
            <div className=" mb-8 flex justify-start">
          <div className="relative z-20">
            <div className="inline-block px-3 py-1 mb-4">
             
            </div>
            <div className="md:ml-[120px] mt-6">
              <Image
                src="/flexibilidad-nueva-norma.svg"
                alt="EXPERIENCIA EMPLEADO de forma significativa y con impacto real"
                width={400}
                height={500}
                className="w-[640px] object-contain hover-scale md:ml-0 ml-[30px]  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mb-12 md:mx-[80px]">
          <div className="text-3xl font-black text-center mb-12">

          <Image
                src="/hoy.svg"
                alt="hoy"
                width={100}
                height={100}
                className="w-full object-contain hover-scale h-14 "
                priority
              />
          </div>

          <div className="flex flex-row flex-wrap justify-center mb-12">
            <div className="text-center px-4 mb-8 md:mb-0 w-full sm:w-1/3">
                <div className="bg-black text-white font-bold py-2 px-4 inline-block mb-4 hover-scale hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out  md:text-[36px] text-[20px]" ref={ref}>
                + de {inView && <AnimatedNumber target={100} />}
              </div>
              <p className="text-sm font-poppings text-regular">empresas ofrecen</p>
              <p className="text-sm font-poppings text-regular">Campañas de Beneficios</p>
              <p className="text-sm font-bold font-poppings">FLEXIBLES en su PVE.</p>
            </div>

            <div className="text-center px-4 mb-8 md:mb-0 w-full sm:w-1/3">
                <div className="bg-black text-white font-bold py-2 px-4 inline-block mb-4 hover-scale hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out md:text-[36px] text-[20px] " ref={ref}>
              + de {inView && <AnimatedNumber target={150} suffix=" mil" />}
                </div>
              <p className="text-sm font-poppings text-regular">colaboradores acceden a</p>
              <p className="text-sm font-poppings text-regular">poder elegir su regalo o</p>
              <p className="text-sm font-bold font-poppings">beneficio.</p>
            </div>

            <div className="text-center px-4 w-full sm:w-1/3">
            <div className="bg-black text-white font-bold py-2 px-4 inline-block mb-4 hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out  md:text-[36px] text-[20px]" ref={ref}>
                + del {inView && <AnimatedNumber target={90} suffix=" %" />}
                </div>
              <p className="text-sm font-poppings text-regular">de las personas valoran el</p>
              <p className="text-sm font-poppings text-regular">poder hacerlo.</p>
              <div className="flex justify-center mt-4">
                <Image
                  src="/happy-faces.svg"
                  alt="Emojis felices"
                  width={200}
                  height={40}
                  className="w-full rounded-full p-3 object-contain hover:shadow-[0_0_25px_15px_rgba(255,255,0,0.2)] transition-shadow duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <Image
            src="/flexibilidad-flexibilidad.svg"
            alt="FLEXIBILIDAD repetido"
            width={300}
            height={100}
            className="md:w-full w-[1000px] pr-[400px]  left-0 mb-8 "
          />
        </div>
      </div>
    </section></motion.div>
  )
}

