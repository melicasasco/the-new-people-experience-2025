import Image from "next/image"

export default function BenefitsSection() {
  return (
    <div className="flex justify-center h-fit">

    <section
      className="bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'url("/beneficios-con-impacto-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div className="w-full  px-6 md:px-12 mx-auto px-6 md:px-12 relative z-10 shadow-md">

        <div className="mb-6 w-[400px] mt-10 ml-20 ">
              <Image
                src="/beneficios-con-impacto-real-title.svg"
            alt="BENEFICIOS CON IMPACTO REAL"
                width={500}
                height={150}
                className="w-[340px] object-contain hover-scale"
              />
            </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="font-bold text-lg mb-8 text-[18px]">LOS BENEFICIOS FLEXIBLES ELEVAN LA PROPUESTA DE VALOR</p>

          <ul className="space-y-6 pb-[100px] text-[16px]">
            {/* Usando el mismo componente para todas las caritas para garantizar consistencia */}
            {[
              "Potenciamos la propuesta de valor dando a elegir a cada persona lo que más le gusta y necesita en cada momento, <strong>cocreando su propia Experiencia Empleado</strong>.",
              "Nos ocupamos de <strong>cada campaña de inicio a fin</strong>.",
              "Trabajamos con estadísticas, medimos tendencias y <strong>conocemos lo que las personas realmente valoran</strong>.",
              "Creamos una comunicación atractiva y con sentido, customizamos la <strong>plataforma multidispositivo</strong>, diseñamos las propuestas de <strong>beneficios y regalos a medida del target y presupuesto de cada empresa</strong>.",
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 w-6 h-6">
                  <Image src="/caritas.svg" alt="Carita sonriente" width={24} height={24} className="w-6 h-6" />
                </div>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

