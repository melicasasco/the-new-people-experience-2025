import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function BenefitsSection() {
  const router = useRouter()
  return (
    <>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center text-black hover:text-gray-700 transition-colors ml-4 mt-4"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Volver
      </button>
      <div className="flex justify-center h-fit">
        <section
          className="bg-white relative overflow-hidden"
          style={{
            backgroundImage: 'url("/impacto.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
          }}
        >
          <motion.div
            className="w-full px-6 md:px-12 mx-auto relative z-10 shadow-md"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            >

            {/* Título grande */}
            <motion.div
              variants={itemVariants}
              className="mb-6 mt-10 md:ml-20 ml-0"
            >
              <Image
                src="/beneficios-con-impacto-real-title.svg"
                alt="BENEFICIOS CON IMPACTO REAL"
                width={500}
                height={150}
                className="w-[640px] object-contain hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
              />
            </motion.div>

            <div className="max-w-3xl mx-auto">

              {/* Subtítulo */}
              <motion.p
                variants={itemVariants}
                className="font-bold text-lg mb-8 text-[18px]"
              >
                LOS BENEFICIOS FLEXIBLES ELEVAN LA PROPUESTA DE VALOR
              </motion.p>

              {/* Lista con stagger */}
              <motion.ul
                variants={containerVariants}
                className="space-y-6 md:pb-[100px] pb-[50px] text-[16px]"
              >
                {[
                  "Potenciamos la propuesta de valor dando a elegir a cada persona lo que más le gusta y necesita en cada momento, <strong>cocreando su propia Experiencia Empleado</strong>.",
                  "Nos ocupamos de <strong>cada campaña de inicio a fin</strong>.",
                  "Trabajamos con estadísticas, medimos tendencias y <strong>conocemos lo que las personas realmente valoran</strong>.",
                  "Creamos una comunicación atractiva y con sentido, customizamos la <strong>plataforma multidispositivo</strong>, diseñamos las propuestas de <strong>beneficios y regalos a medida del target y presupuesto de cada empresa</strong>.",
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 mr-3 mt-1 w-6 h-6">
                      <Image
                        src="/caritas.svg"
                        alt="Carita sonriente"
                        width={24}
                        height={24}
                        className="w-6 h-6 hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                      />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </section>
      </div>

    </>

  );
}
