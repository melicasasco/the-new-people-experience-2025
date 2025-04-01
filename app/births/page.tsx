"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Header from "@/components/Header"

export default function BirthsTrendsPage() {
  const router = useRouter()

  const handleBack = () => {
    // Navegar a la página principal
    router.push("/")

    // Dar tiempo para que la página se cargue y luego desplazarse a la sección
    setTimeout(() => {
      const section = document.getElementById("births")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="mb-6">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-nacimientos-jidq5yhREZ6zxFw9nQQiKzkOl9wdwa.png"
              alt="Tendencias en Nacimientos - Ranking de elecciones"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tendencia-nacimientos-2-cqxQkSbmmAvuQ31I7mCu28tfQc95c6.png"
              alt="Plataforma digital para elegir regalos de nacimiento"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

