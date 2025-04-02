"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showCampaignsMenu, setShowCampaignsMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null); 

  const toggleCampaignsMenu = () => setShowCampaignsMenu(!showCampaignsMenu);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setShowCampaignsMenu(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowCampaignsMenu(false);
  };

  // 👇 cierro el menú si cliqueo x fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Solo aplicar esto en desktop
      if (window.innerWidth >= 768) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setShowCampaignsMenu(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center hover-scale">
          <Image
            src="/be-logo.svg"
            alt="be People Experience"
            width={100}
            height={40}
            className="h-8 w-auto md:h-10"
          />{" "}
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-[16px] font-poppins">
            <li>
              <a href="#hero" className="font-medium hover:text-[#b48cd4]">
                HOME
              </a>
            </li>
            <li className="relative" ref={menuRef}>
              <button
                onClick={toggleCampaignsMenu}
                className="font-medium hover:text-[#b48cd4] flex items-center"
              >
                CAMPAÑAS
                <svg
                  className="ml-1"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {showCampaignsMenu && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  {[
                    { href: "#birthday", label: "Los Cumpleaños" },
                    { href: "#lunch", label: "Los Almuerzos" },
                    { href: "#births", label: "Los Nacimientos" },
                    { href: "#childrens-day", label: "Día de la Infancia" },
                    { href: "#christmas-box", label: "La Caja Navideña" },
                    { href: "#back-to-school", label: "La Vuelta al Cole" },
                  ].map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setShowCampaignsMenu(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a href="#contact" className="font-medium hover:text-[#b48cd4]">
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Fondo oscuro con blur */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Menú lateral mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Botón de cierre */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="text-gray-700 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links de navegación */}
        <div className="flex flex-col px-6 text-[16px] font-poppins">
          <a
            href="#hero"
            onClick={closeMobileMenu}
            className="py-2 font-medium hover:text-[#b48cd4]"
          >
            HOME
          </a>

          <button
            onClick={toggleCampaignsMenu}
            className="py-2 font-medium hover:text-[#b48cd4] flex items-center justify-between"
          >
            CAMPAÑAS
            <svg
              className="ml-2"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {showCampaignsMenu && (
            <div className="ml-4 mt-2 space-y-1">
              {[
                { href: "#birthday", label: "Los Cumpleaños" },
                { href: "#lunch", label: "Los Almuerzos" },
                { href: "#births", label: "Los Nacimientos" },
                { href: "#childrens-day", label: "Día de la Infancia" },
                { href: "#christmas-box", label: "La Caja Navideña" },
                { href: "#back-to-school", label: "La Vuelta al Cole" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block py-1 text-sm hover:text-[#b48cd4]"
                  onClick={closeMobileMenu}
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="py-2 font-medium hover:text-[#b48cd4]"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </header>
  );
}
