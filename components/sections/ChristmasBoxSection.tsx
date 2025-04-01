import Image from "next/image"
import Link from "next/link"

export default function ChristmasBoxSection() {
  return (
    <section id="christmas-box" className=" overflow-hidden">
      <div className="w-full mx-auto shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* Left side - Content */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center md:ml-[80px]">
            <div className="flex flex-col items-center">
              <div className="mb-8 w-full mx-auto flex justify-center">
                <div className="w-full mx-auto max-w-md">
                  <Image
                    src="/navidad-title.svg"
                    alt="LA CAJA NAVIDEÑA"
                    width={500}
                    height={150}
                    className="w-[340px] object-contain hover-scale"
                    />
                </div>
              </div>

              <div className="space-y-4 mb-8 text-center">
                <p className="font-medium text-[16px]">
                  Uno de los momentos más especiales del año, y una de nuestras campañas preferidas.
                </p>
                <p className="font-bold">CHIN CHIN | Elegí tu caja</p>
              </div>

              {/* Box types */}
              <div className="mb-8">
                <Image
                  src="/navidad-cajas.svg"
                  alt="Tipos de cajas: Clásica, Gourmet, Choco, Picada, Cocktail, Natural"
                  width={500}
                  height={150}
                  className="w-full object-contain"
                />
              </div>

              <div className="flex justify-center w-full">
                <Link
                  href="/christmas"
                  className="inline-block border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors hover-scale"
                >
                  + INFO SOBRE LA CAMPAÑA
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="bg-[#5A9A7E] relative overflow-hidden">
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src="/navidad-mockup.svg"
                alt="Plataforma de cajas navideñas en laptop y móvil"
                fill
                className="object-cover hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

