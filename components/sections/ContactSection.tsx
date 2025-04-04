import Image from "next/image";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="bg-white pt-8 h-fit w-full mt-8 mx-auto">
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

       { <div className="w-full  mx-auto mt-10 mb-10 px-4">
          <Footer />
        </div>}
      </div>
    </section>
  );
}
