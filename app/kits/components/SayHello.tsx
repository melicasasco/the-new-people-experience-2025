import Image from "next/image"
import { motion } from "framer-motion"

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
    return (
        <section className="md:h-[700px] h-fit bg-[#1A1A1A] flex items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: 'url("/say-hello-kits-bg.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div
                className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto  overflow-hidden "
            >
                {/* Content Section */}
                <motion.div
                    className="flex-1 w-full lg:w-1/2 mt-12 md:mt-0   p-4 "
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                    >
                    {/* Título */}
                    <motion.div variants={itemVariants} className="mb-4  lg:mb-8">
                        <Image
                            src="/say-hello-black.svg"
                            alt="SAY HELLO"
                            width={500}
                            height={150}
                            className="w-full max-w-[400px] w-[300px] lg:max-w-[340px] object-contain hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="">
                    <h1 className="md:text-4xl text-[20px] font-black font-matahari text-black mb-4"># CULTURA DESDE EL DÍA UNO.</h1>
                    </motion.div>

                    {/* Descripción */}
                    <motion.div variants={itemVariants} className="md:w-[800px] w-full">
                        <p className="text-base font-poppins font-[300] w-fit sm:text-lg lg:text-xl leading-relaxed text-gray-800">
                        Los kits SAY HELLO son más que una bienvenida: son el primer gesto de una cultura que conecta, inspira y da sentido.

                        </p>
                    </motion.div>

                     {/* Descripción */}
                     <motion.div variants={itemVariants} className="md:w-[800px] w-full">
                        <p className="text-base font-poppins font-[300] mt-6 mb-6 w-fit sm:text-lg lg:text-xl leading-relaxed text-gray-800">
                        Diseñados para que cada persona sienta, desde el primer día, que ya forma parte de algo con propósito.
                        </p>
                    </motion.div>

                    {/* Descripción */}
                    <motion.div variants={itemVariants} className="mb-8 lg:mb-12 max-w-2xl">
                        <p className="text-base font-poppins font-[500] bg-[#FFFF7A] md:p-4 p-2 w-fit sm:text-lg lg:text-xl leading-relaxed text-gray-800">
                            Un kit. Una cultura. Un “hola” que se siente.
                        </p>
                    </motion.div>

                   
                </motion.div>
            </div>
        </section>
    )
}

