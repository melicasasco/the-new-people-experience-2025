import Image from "next/image"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

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
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SayHello() {
    const router = useRouter()
    return (
        <section className="md:h-[650px] h-fit bg-[#1A1A1A] flex items-center justify-center md:py-16 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: 'url("/say-hello-bg.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div
                className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl "
            >
                {/* Content Section */}
                <motion.div
                    className="flex-1 w-full lg:w-1/2 p-8 lg:p-12 xl:p-16 relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    >
                    {/* Título */}
                    <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
                        <Image
                            src="/say-hello-title.svg"
                            alt="SAY HELLO"
                            width={500}
                            height={150}
                            className="w-full max-w-[500px] w-[300px] lg:max-w-[640px] object-contain hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                        />
                    </motion.div>

                    {/* Descripción */}
                    <motion.div variants={itemVariants} className="mb-8 lg:mb-12 max-w-2xl">
                        <p className="text-base font-poppins bg-[#FFFF7A] md:p-4 p-2 w-fit sm:text-lg lg:text-xl leading-relaxed text-gray-800">
                            Un kit. Una cultura. Un “hola” que se siente.
                        </p>
                    </motion.div>

                    {/* Botón */}
                    <motion.div variants={itemVariants} className="flex justify-center">
                        <Button
                            onClick={() => {
                                router.push("/kits");
                            }}
                            className="text-white border-white"
                        >
                            WELCOME KITS
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

