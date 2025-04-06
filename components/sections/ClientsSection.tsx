"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationActive, setAnimationActive] = useState(true)


  useEffect(() => {
    // Duplicar los logos para crear un efecto de carrusel infinito
    if (containerRef.current) {
      const originalContent = containerRef.current.innerHTML
      containerRef.current.innerHTML = originalContent + originalContent
    }
  }, [])

  return (
    <section className=" mt-4 ">
      <div className="w-full mx-auto  h-fit">
        <div className="flex justify-center mt-3">
          <Image
            src="/clientes-title.svg"
            alt="CLIENTES"
            width={386}
            height={62}
            className="w-[340px] object-contain mb-3 mt-6"
            />
        </div>

       <div className="overflow-hidden relative bg-[#FAFAF8] mt-4">
                  <div
                    className="flex py-4  whitespace-nowrap animate-scroll"
                    style={{ width: "max-content" }}
                  >
                    {/* Repetimos la misma imagen varias veces para que el scroll sea fluido */}
                    {[...Array(3)].map((_, i) => (
                      <Image
                        key={i}
                        src="/logos-black-new.png"
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
  )
}

