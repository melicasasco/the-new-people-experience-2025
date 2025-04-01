import Image from "next/image";
import Link from "next/link";

export default function LunchSection() {
  return (
    <section id="lunch" className="overflow-hidden ">
      <div className="w-full  shadow-md">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Image - Reemplazada con un div de color */}

          <div className="relative w-full h-[500px] bg-[#fb5434]">
            <Image
              src="/lunchh.svg"
              alt="LOS ALMUERZOS"
              fill
              className="object-right object-contain "
            />
          </div>

          {/* Right side - Content */}
          <div className="bg-[#333333] text-white h-[500px] px-8 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              {/* Título centrado - Ajustado para que quede más abajo y dentro del contenedor */}
              <div className="mb-4 w-full flex justify-center mt-12">
                <div className="w-full  flex justify-center">
                  <h2 className="text-2xl font-bold">
                    <Image
                  src="/los-almuerzos-titulo.svg"
                  alt="LOS ALMUERZOS"
                      width={300}
                      height={850}
                      className="w-[240px] object-contain hover-scale"
                      />
                  </h2>
                </div>
              </div>

              <div className="space-y-8 mb-4  px-8">
                <p className=" text-[16px]">
                  Los colaboradores reciben créditos para poder elegir sus
                  almuerzos. La campaña se calendariza de acuerdo a las
                  necesidades de cada empresa.
                </p>
                <p className=" text-[16px]">
                  Las opciones para elegir son muy variadas entre alternativas
                  de delivery, viandas, healthy food y restaurantes.
                </p>
                <p className=" text-[16px]">
                  También se puede sumar la versión <strong>SNACK TIME</strong>.
                </p>
              </div>

              <div className="flex justify-center w-full mb-8">
                <Link
                  href="/lunch"
                  className="inline-block border border-white rounded-full mb-4 px-6 py-2 hover:bg-white hover:text-[#333333] transition-colors hover-scale"
                >
                  + INFO SOBRE LA CAMPAÑA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
