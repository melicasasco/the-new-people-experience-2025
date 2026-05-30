import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

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

export default function TangibleCulture() {
    return (
        <section className="min-h-[650px] md:h-[650px] bg-[#fbdd68] flex items-center justify-center relative overflow-hidden md:py-0 py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-y-0 right-0 hidden w-[60%] md:block">
                <Image
                    src="/bornToSurprise-2.svg"
                    alt="Born to Surprise"
                    fill
                    className="object-contain object-right"
                    sizes="50vw"
                    priority={false}
                />
            </div>

            <motion.div
                className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[0.58fr_0.42fr] items-center gap-0 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div
                    variants={containerVariants}
                    className="md:px-8 lg:px-12 xl:px-16 text-black"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-matahari font-bold leading-none md:text-[60px] text-[30px]"
                    >
                        CULTURA TANGIBLE
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="font-poppins font-semibold text-base sm:text-lg lg:text-xl mt-10"
                    >
                        Más que kits: Cultura que se siente.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="font-poppins text-base sm:text-lg lg:text-xl leading-relaxed mt-10 max-w-[650px]"
                    >
                        Diseñamos piezas brandeadas para cada momento de la experiencia empleado.
                        Onboarding, reconocimiento, valores y celebraciones — con diseño y propósito real.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-start mt-12"
                    >
                        <Button
                            onClick={() => {
                                window.location.href = "https://google.com/url?sa=j&url=https%3A%2F%2Fcatalog.bepeopleexperience.com%2Fcultura-tangible&uct=1767030054&usg=dRAsyaIDPg2JlXsfc650j-00sKA.&opi=76390225&source=meet"
                            }}
                            className="bg-black border-black text-[#FFE861] px-10 py-3 md:w-[260px] md:text-[22px] text-[14px]"
                        >
                            VER CATÁLOGO
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex w-full items-center justify-center md:hidden mt-8 overflow-hidden"
                >
                    <Image
                        src="/culture-tanglible.svg"
                        alt="Cultura tangible"
                        width={825}
                        height={528}
                        className="w-full max-w-none h-auto object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
