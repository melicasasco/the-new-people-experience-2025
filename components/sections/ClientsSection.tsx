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
    <section className=" ">
      <div className="w-full mx-auto  h-fit">
        <div className="flex justify-center mt-3 shadow-md ">
          <Image
            src="/clientes-title.svg"
            alt="CLIENTES"
            width={386}
            height={62}
            className="w-[340px] object-contain mb-9"
            />
        </div>

        <div className="overflow-hidden relative bg-[#FAFAFA]" >
          <div
            ref={containerRef}
            className="flex space-x-16 py-8 whitespace-nowrap"
            style={{
              animation: animationActive ? "scroll 30s linear infinite" : "none",
            }}
          >
            <div className="flex-shrink-0 flex items-center justify-center mx-8">
              <img
            src="/clientes-black.png"
              alt="Logos de clientes"
                className="h-16 object-contain"
              />
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
  )
}

