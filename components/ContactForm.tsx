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
        fetch("https://formsubmit.co/ajax/hello@bepeopleexperience.com", {
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
          fetch("https://script.google.com/macros/s/AKfycbz83AuNNnJbUlLkH3pmmQXqlbta-Y1Mkj4J9bNcnBH9oJYY-tSSC96eV2hP1GC5B46wYQ/exec", {
            method: "POST",
            mode: "no-cors", // 👈 evita error CORS
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then(() => {
              console.log("✅ Datos enviados a Google Sheets")
              setSubmitted(true)
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              })
              form.reset()
            })
            .catch((err) => {
              alert("Error al enviar a Google Sheets.")
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
     id="contact-form"
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
    </form>
    {submitted && (
     /*  <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-yellow-300 border border-yellow-500 rounded-xl px-6 py-4 text-black font-semibold shadow-lg animate-fadeIn text-center max-w-[90%] w-full md:w-auto">
          🎉 ¡Formulario enviado exitosamente!
        </div>
      </div> */
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative rounded-xl overflow-hidden w-full max-w-[90%] md:max-w-[400px] h-[8rem] flex items-center justify-center bg-white border border-yellow-500 shadow-2xl animate-fadeIn text-center text-black font-semibold text-xl md:text-2xl px-3 py-6">
        
        {/* Partículas mágicas */}
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 80 + 10}%`, // evita que toquen bordes
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? "✨" : "🎊"}
          </span>
        ))}
    
        <span className="text-[16px] z-50 bg-opacity-5	 bg-white p-2">🎉 ¡Formulario enviado exitosamente! ✨</span>
    
        {/* Estilos mágicos */}
        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
    
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
    
          .particle {
            position: absolute;
            font-size: 1rem;
            opacity: 0;
            animation: float 3s ease-in-out infinite;
            pointer-events: none;
            z-index: 10;
          }
    
          @keyframes float {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateY(-50px) scale(0.8);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
    
    )}

    </>
  )
}
