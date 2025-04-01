import Image from "next/image"
import Link from "next/link"

export default function ChildrensDaySection() {
  return (
    <section id="childrens-day" className=" overflow-hidden">
      <div className="max-w-5xl mx-auto">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Image */}
          <div className="relative w-full h-[510px]">
            <Image
              src="/infancias-mockup.svg"
              alt="LAS INFANCIAS"
              fill
              className="object-cover hover-lift"
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-[#D62828] text-white p-8 md:px-12 py-4 flex flex-col justify-center">
            <div className="">
              <div className="mb-8 mx-auto flex justify-center w-full">
                <Image
                  src="/infancias-title.svg"
                  alt="DÍA DE LA INFANCIA"
                  width={500}
                  height={150}
                  className="w-full object-contain hover-scale mx-auto"
                />
              </div>

              <div className="space-y-6 mb-8">
                <p>
                  Armamos catálogos a medida de cada campaña con juguetes, libros, vouchers digitales y lugares de
                  entretenimiento.
                </p>
                <p className="flex items-center">
                  Para que puedas elegir en familia
                  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white text-[#D62828] h-6 w-6">
                  <Image src="/carita-transparente.png" alt="Carita sonriente" width={24} height={24} className="w-6 h-6" />

                  </span>
                </p>
              </div>

              <div className="mb-8">
                <Image
                  src="/infancias-categorias.svg"
                  alt="Categorías: Juguetes, Libros, Vouchers Digitales, Entretenimiento"
                  width={500}
                  height={100}
                  className="w-full object-contain"
                />
              </div>
              <div className="flex justify-center w-full">
              <Link
                href="/childrens-day"
                className="inline-block border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#D62828] transition-colors hover-scale"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

