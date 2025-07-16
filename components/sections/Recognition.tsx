import Image from "next/image"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
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
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


export default function BenefitsSection() {
    const router = useRouter()
    return (
        <section className="md:h-[650px] h-fit bg-[#FFFF7A] flex flex-col items-center relative overflow-hidden justify-center md:py-16 py-8 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: 'url("/buena-onda-bg.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <motion.div
                className="flex h-full flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto relative overflow-hidden rounded-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                viewport={{ once: true, amount: 0.1 }}
            >

                <motion.div
                    variants={itemVariants}
                    className="flex-1 w-full lg:w-1/2 md:p-8 p-4 lg:p-12 xl:p-16 relative z-10"
                >
                    <div className="mb-8 lg:mb-12">
                        <Image
                            src="/buena-onda.svg"
                            alt="Reconocimiento"
                            width={500}
                            height={150}
                            className="w-full max-w-[500px] lg:max-w-[640px] object-contain hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                        />
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    variants={itemVariants}
                    className="flex-1 w-full lg:w-1/2 lg:p-12 xl:p-16 flex items-center justify-center relative z-10"
                >
                    <Image
                        src="/reco-pines.svg"
                        alt="Reconocimiento"
                        width={500}
                        height={400}
                        className="w-[230px] md:w-[400px] h-auto hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
                    />
                </motion.div>

            </motion.div>
            <div className="flex justify-center">
                <div className="flex justify-center mt-5 md:mt-0">
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mt-5 md:mt-0"
                    >
                        <Button
                            onClick={() => { router.push('/recognition') }}
                            className="text-black border-black  px-8 py-2 md:w-[200px] md:text-[22px] text-[14px]"
                        >
                            VER MÁS
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

