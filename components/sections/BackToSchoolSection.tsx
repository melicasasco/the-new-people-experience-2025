import Image from "next/image"
import Link from "next/link"

export default function BackToSchoolSection() {
  return (
    <section id="back-to-school" className=" overflow-hidden">
      <div className="w-full ">
      <div className="w-full mx-auto bg-[#b48cd4]">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Image */}
          <div className="bg-gray-100 relative overflow-hidden">
            <div className="relative w-full h-full min-h-[500px]">
              <Image
                src="/vuelta-al-cole-mockup.svg"
                alt="Tablet con aplicación de vuelta al cole"
                fill
                className="object-cover hover-lift"
              />
            </div>
            
          </div>

          {/* Right side - Content */}
          <div className=" p-8 md:p-12 flex flex-col justify-center md:mr-[80px] ">
            <div>
              <div className="mb-8 bg-[#b48cd4] mx-auto">
                <Image
                  src="/vuelta-al-cole-title.svg"
                  alt="LA VUELTA AL COLE"
                  width={500}
                  height={150}
                  className="w-[340px] object-contain hover-scale mx-auto"
                  />
              </div>

              <div className="space-y-4 mb-8 text-[16px]">
                <p className="text-[16px]">Una de las campañas más valoradas por los empleados de las empresas.</p>
                <p className="text-[16px]">
                  Proponemos una vuelta al cole súper flexible donde cada colaborador puede{" "}
                  <strong>armar el kit escolar totalmente a medida</strong> o <strong>canjear su voucher</strong> en
                  tiendas especialmente seleccionadas.
                </p>
              </div>

              <div className="flex justify-center w-full mt-8">
                <Link
                  href="/back-to-school"
                  className="inline-block border border-black rounded-full px-6 py-2 hover:bg-black hover:text-[#B68AD4] transition-colors hover-scale"
                >
                  + INFO SOBRE LA CAMPAÑA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

