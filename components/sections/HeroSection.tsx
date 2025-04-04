import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex justify-center h-[600px]">
      <section
        id="hero"
        className="relative overflow-hidden bg-white"
        style={{
          backgroundImage: 'url("/fondo-hero.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
  
        <div className="mb-8 md:pl-[110px] pl-4 mt-[12rem] ">
          <p className="font-normal text-regular font-poppins text-[22px] pl-1">
            Diseñamos la
          </p>
          <Image
            src="/experiencia-empleado.svg"
            alt="EXPERIENCIA EMPLEADO de forma significativa y con impacto real"
            width={800}
            height={800}
            className="w-[600px] object-contain hover-scale  hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ease-out"
            priority
          />

          <div className="relative">
            {/* Contenido del lado derecho se mantiene vacío para mantener el espacio */}
          </div>
        </div>
      </section>
    </div>
  );
}
