import Image from "next/image"
import Link from "next/link"
import ContactForm from "../ContactForm"

export default function ContactSection() {
  return (
<section id="contact" >
<div className="bg-white  h-fit w-full mt-8 mx-auto">
      <div className="w-full mx-auto  px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start ">
          {/* Lado izquierdo - Título y logo */}
          <div className="flex flex-col md:ml-[80px]">
            <div className="mb-12">
              <Image
                src="/contactanos-title.svg"
                alt="CONTACTANOS"
                width={500}
                height={150}
                className="w-[340px] object-contain hover-scale"
              />
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="md:mr-[80px]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer con los elementos alineados según la imagen */}
      <div className="w-full mx-auto px-6 md:px-12 mt-12 py-8 md:mx-[80px] ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="flex items-center hover-scale">
              <Image src="/be-logo.svg" alt="be People Experience" width={100} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            <span className="md:mr-[80px]">@bepeopleexperience</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

