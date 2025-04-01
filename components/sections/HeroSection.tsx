import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="flex justify-center h-[600px]">
    <section
      id="hero"
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: 'url("/hero-background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "64.1rem",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-20">
            <div className="inline-block py-[6rem] px-3 py-1 mb-4">
             
            </div>
            <div className="mb-8 ml-12">
            <p className="font-normal text-regular font-poppins text-[32px]">Diseñamos la</p>
              <Image
                src="/experiencia-empleado.svg"
                alt="EXPERIENCIA EMPLEADO de forma significativa y con impacto real"
                width={800}
                height={800}
                className="w-full object-contain hover-scale "
                priority
              />
            </div>
          </div>
          <div className="relative">{/* Contenido del lado derecho se mantiene vacío para mantener el espacio */}</div>
        </div>
      </div>
    </section>
    </div>
  )
}

