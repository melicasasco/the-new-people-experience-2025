"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ChristmasTrendsPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-black hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver
          </button>
        </div>

        {/* Solo las imágenes, una al lado de la otra en desktop, una debajo de otra en móvil */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-navidad-1-vXHS4nOmkFYyxFPejCRG05umBMnHaO.png"
              alt="Tendencias en cajas navideñas - Estadísticas de preferencias"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-navidad-2-xWd6XjJFUdXtGTtPX7CB9qhBKocMHf.png"
              alt="Tipos de cajas navideñas disponibles"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

