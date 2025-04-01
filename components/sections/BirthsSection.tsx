import Image from "next/image"
import Link from "next/link"

export default function BirthsSection() {
  return (
    <section id="births" className=" overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side - Content */}
          <div className="bg-yellow-300 p-8 md:p-12 flex flex-col justify-center">
            <div className="mx-auto">
              <div className="mb-8">
                <Image
                  src="/nacimientos-title.svg"
                  alt="LOS NACIMIENTOS"
                  width={500}
                  height={150}
                  className="w-full object-contain hover-scale"
                />
              </div>

              <div className="space-y-4 mb-8">
                <p className="font-medium">
                  Cada familia es un mundo, y en esta campaña ofrecemos la posibilidad de que cada persona/familia pueda
                  elegir su regalo entre diferentes propuestas.
                </p>
              </div>

              {/* Partner logos */}
              <div className="">
                <Image
                  src="/nacimientos-marcas.svg"
                  alt="Marcas partners de nacimientos"
                  width={400}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="flex justify-center w-full">
              <Link
                href="/births"
                className="inline-block border border-black rounded-full px-6 py-2 hover:bg-black hover:text-yellow-300 transition-colors hover-scale"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link></div>
            </div>
          </div>

          {/* Right side - Image */}
                   
          <div className="relative w-full h-[500px]">
            <Image
              src="/nacimientos-mockup.svg"
              alt="LOS NACIMIENTOS"
              fill
              className="object-cover hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

