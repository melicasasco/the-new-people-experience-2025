"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    campaign: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

/*   const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  } */

/*   const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario")
      }

      setSubmitSuccess(true)
      setFormData({ name: "", company: "", campaign: "", email: "" })

      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setSubmitError(error.message || "Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  } */

  return (
    <form onSubmit={()=> console.log("handleSubmit")} className="space-y-8">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={()=>console.log("handleInputChange")}
          placeholder="Nombre y Apellido"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={()=>console.log("handleInputChange")}
          placeholder="Empresa"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <input
          type="text"
          name="campaign"
          value={formData.campaign}
          onChange={()=>console.log("handleInputChange")}
          placeholder="Campaña de interés"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={()=>console.log("handleInputChange")}
          placeholder="Email"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
          required
          disabled={isSubmitting}
        />
      </div>

      {submitSuccess && (
        <div className="pt-4">
          <span className="text-green-600">¡Mensaje enviado con éxito! Te contactaremos pronto.</span>
        </div>
      )}

      {submitError && (
        <div className="pt-4">
          <span className="text-red-600">{submitError}</span>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          className="border border-black rounded-full px-8 py-2 hover:bg-black hover:text-white transition-colors hover-scale"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  )
}

