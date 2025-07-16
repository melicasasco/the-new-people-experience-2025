"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ChildrensDayTrendsPage() {
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-infancia-1-jamV302qVts1ti5W82y7vZ6ZGm1Jg1.png"
              alt="Tendencias en Día de la Infancia - Estadísticas por categorías"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-infancia-2-fQHLSFajVLM1WzRD6eDZlJrMP7dRUD.png"
              alt="Plataforma digital para elegir regalos del Día de la Infancia"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

