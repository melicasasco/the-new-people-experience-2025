import Image from "next/image"
import Link from "next/link"

export default function BirthdaySection() {
  return (
    <section id="birthday" className="">
      <div className="max-w-full mx-auto shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          <div className="h-fit p-8 flex flex-col justify-center">
            <div className="mb-6 md:ml-[80px]">
              <Image
                src="/cumples-title.svg"
                alt="LOS CUMPLEAÑOS"
                width={500}
                height={150}
                className="w-[340px] object-contain hover-scale"
                />
            </div>

            <p className="mb-4 text-[16px] md:ml-[80px]">¡Momentos que se celebran!</p>

            <p className="mb-4 text-[16px] md:ml-[80px]">Activamos un saludo sorpresa en el día del cumpleaños de cada colaborador.</p>

            <div className=" text-white  py-2 mb-8 inline-block leading-none hover-scale text-sm font-bold md:ml-[80px]">
              <p className="bg-black tracking-wide w-fit p-1 text-[16px]">¡Y TAMBIÉN LO INVITAMOS A QUE</p>
              <p className="bg-black mt-1 w-fit text-[16px] p-1" >ELIJA ALGO PARA CELEBRARLO!</p>
            </div>


            <div className="flex justify-center w-full">
              <Link
                href="/birthday"
                className="inline-block border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition-colors hover-scale"
              >
                + INFO SOBRE LA CAMPAÑA
              </Link>
            </div>
          </div>

          <div className="bg-teal-400 h-[500px] p-8 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center md:ml-[80px]">
              <Image
                  src="/cumples-mockup.svg"
                alt="LOS CUMPLEAÑOS"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

