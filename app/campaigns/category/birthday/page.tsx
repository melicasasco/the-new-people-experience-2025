"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BirthdayTrendsPage() {
  const router = useRouter()

  const handleBack = () => {
    // Navegar a la página principal
    router.push("/")

    // Dar tiempo para que la página se cargue y luego desplazarse a la sección
    setTimeout(() => {
      const section = document.getElementById("birthday")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <main className="min-h-screen bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="">
          <button
            onClick={handleBack}
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-cumpleanos-1-LJIyuFN9g6vnpxXNOifxxFWRo0Ruc8.png"
              alt="Tendencias en cumpleaños - Estadísticas de preferencias"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-cumpleanos-2-NGTLegCROAOS07YHxADUQqmNDxoQar.png"
              alt="Plataforma digital de selección de regalos de cumpleaños"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

