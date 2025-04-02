"use client"
import confetti from "canvas-confetti"
import { useEffect, useRef, useState } from "react"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

/*   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    // Usamos Formsubmit manualmente
    const formData = new FormData(form);

      fetch("https://formsubmit.co/ajax/545acec691ecf7a86b56ebb75f2716", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("empresa"),
          campaign: formData.get("campania"),
          email: formData.get("email"),
        }),
      })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true)
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        form.reset()
      })
      .catch((err) => {
        alert("Error al enviar. Intentalo de nuevo.")
        console.error(err)
      })
  } */

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
      
        const form = formRef.current
        if (!form) return
      
        const formData = new FormData(form)
        console.log(formData,'formData')
        const data = {
          name: formData.get("name"),
          company: formData.get("empresa"),
          campaign: formData.get("campania"),
          email: formData.get("email"),
        }
      console.log(data,'data form')
        // 1️⃣ Enviar email con Formsubmit
        fetch("https://formsubmit.co/ajax/melaniecasasco@gmail.com", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then(() => {
            console.log("✅ Email enviado con Formsubmit")
          })
          .catch((err) => {
            alert("Error al enviar el email.")
            console.error(err)
          })
      
        // 2️⃣ Guardar en Google Sheets
/*         fetch("https://script.google.com/macros/s/AKfycbyG5ZjLBGrAXiwaJdEH24aJfKglbj79Nq7sBLkKkfC65Q3W9UWshzrVA4AwN2eHUx0plg/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }) */
          fetch("/api/send-to-sheet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then((res) => res.json())
          .then(() => {
            console.log("✅ Datos guardados en Google Sheets")
            setSubmitted(true)
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            })
            form.reset()
          })
          .catch((err) => {
            alert("Error al guardar en Google Sheets.")
            console.error(err)
          })
      }

      
  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => setSubmitted(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [submitted]);

  return (
    <>
    <form
    ref={formRef}
    onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Anti-captcha y redirección (opcional) */}
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre y Apellido"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-text-[16px] text-[16px]"
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-text-[16px] text-[16px]"
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="campania"
          placeholder="Campaña de interés"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-text-[16px] text-[16px]"
          required
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black placeholder-text-[16px] text-[16px]"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="border border-black rounded-full px-8 py-2 hover:bg-black hover:text-white transition-colors hover-scale text-[16px]"
        >
          Enviar
        </button>
      </div>
    </form>
    {submitted && (
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn">
        <div className="bg-yellow-300 border-4 border-yellow-500 rounded-xl px-6 py-4 text-black font-semibold shadow-lg">
          🎉 ¡Formulario enviado exitosamente!
        </div>
      </div>
    )}</>
  )
}
