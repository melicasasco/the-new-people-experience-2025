"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function CompaniesSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicar los logos para crear un efecto de carrusel infinito
    if (containerRef.current) {
      const originalContent = containerRef.current.innerHTML
      containerRef.current.innerHTML = originalContent + originalContent
    }
  }, [])

  return (
    <div className="max-w-5xl mx-auto  ">

      <section className="py-12 bg-[#1A1A1A] text-white">
        <div className="max-w-5xl mx-auto ">
          <div className="flex justify-center mb-10">

            <Image
              src="/empresas-nos-eligen.svg"
              alt="Empresas nos eligen"
              width={300}
              height={100}
              className="w-full object-contain h-12"
              priority
            />
          </div>

          <div className="overflow-hidden relative">
            <div
              ref={containerRef}
              className="flex space-x-16 py-4 whitespace-nowrap"
              style={{
                animation: "scroll 30s linear infinite"
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center mx-8">
                <div className="text-white text-lg">
                  <Image
                    src="/logos-blancos.png"
                    alt="Empresas nos eligen"
                    width={300}
                    height={200}
                    className="w-full object-contain h-20"
                    priority
                  /></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      </section>
    </div>
  )
}

