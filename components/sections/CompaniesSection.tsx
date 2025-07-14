"use client";

import Image from "next/image";

export default function CompaniesSection() {
  return (
    <div className="w-full mx-auto">
      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="mx-auto">
          
          <div className="flex justify-center relative w-fit mx-auto md:mb-10 mb-5">
          <h1 className="text-center font-matahari md:text-[40px] text-[25px] font-black">EMPRESAS QUE NOS ELIGEN
            <span className="flex justify-end absolute right-0">
              <Image src="/underline-yellow.svg" alt="underline" width={10} height={10} className="object-contain md:w-[200px] w-[100px] " />
            </span>
            </h1></div>

          <div className="overflow-hidden relative">
            <div
              className="flex pt-4 pb-1 whitespace-nowrap animate-scroll"
              style={{ width: "max-content" }}
            >
              {/* Repetimos la misma imagen varias veces para que el scroll sea fluido */}
              {[...Array(3)].map((_, i) => (
                <Image
                  key={i}
                  src="/logos-blancos-new.png"
                  alt={`Carrusel de logos ${i}`}
                  width={1000} // Ajustalo si tu imagen es más grande o más chica
                  height={100}
                  className="h-20 w-auto object-contain flex-shrink-0"
                  priority
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.3333%);
            }
          }

          .animate-scroll {
            animation: scroll 50s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
}
