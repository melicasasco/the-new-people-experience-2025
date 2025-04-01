import Image from "next/image"

export default function PlatformSection() {
  return (
    <section className=" relative overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Ambos bloques con exactamente las mismas dimensiones y propiedades */}
          <div
            className="h-[500px] p-8 flex flex-col justify-center"
            style={{
              backgroundImage: 'url("/bg-plataforma-beneficios-1.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="md:ml-[80px]">
            <div className="mb-6">
              <Image
                src="/plataforma-de-beneficios.svg"
                alt="PLATAFORMA DE BENEFICIOS"
                width={500}
                height={150}
                className="w-[340px] object-contain hover-scale"
              />
            </div>

            <div className="bg-yellow-300 inline-block px-3 py-1 mb-6">
              <p className="font-bold font-poppings text-[16px]">Multidispositivo, multicampañas</p>
            </div>

            <p className="mb-4 font-poppings text-regular text-[16px]">Funciona como inbound para potenciar la propuesta de valor al empleado.</p>

            <p className="mb-4 font-poppings text-regular text-[16px]">
              Comunica todos los beneficios de manera
              <strong> positiva, simple y actual</strong>, asumiendo que hoy apreciamos la libertad de elegir.
            </p>

            <p className="mb-2 font-poppings text-regular text-[16px] ">Eleva el engagement, con la activación de <span className="font-bold">campañas de beneficios flex.</span></p>
          </div></div>

          <div
            className="h-[500px] p-8 flex items-center justify-center"
            style={{
              backgroundImage: 'url("/bg-plataforma-beneficios-2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Laptop mockup */}
            <div className="relative z-10 w-full max-w-md mx-auto md:mr-[100px]">
              <Image
                src="/mockup-plataforma-de-beneficios.svg"
                alt="Plataforma de beneficios en laptop"
                width={600}
                height={400}
                className="w-full h-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

