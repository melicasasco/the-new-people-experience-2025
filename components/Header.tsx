"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [showCampaignsMenu, setShowCampaignsMenu] = useState(false)

  const toggleCampaignsMenu = () => {
    setShowCampaignsMenu(!showCampaignsMenu)
  }

  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center hover-scale">
          <Image src="/be-logo.svg" alt="be People Experience" width={100} height={40} className="h-10 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-8 text-[16px] font-poppins">
            <li>
              <a href="#hero" className="font-medium hover:text-[#b48cd4]">
                HOME
              </a>
            </li>
            <li className="relative">
              <button onClick={toggleCampaignsMenu} className="font-medium hover:text-[#b48cd4] flex items-center">
                CAMPAÑAS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {showCampaignsMenu && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <a
                    href="#birthday"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowCampaignsMenu(false)}
                  >
                    Los Cumpleaños
                  </a>
                  <a
                    href="#lunch"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowCampaignsMenu(false)}
                  >
                    Los Almuerzos
                  </a>
                  <a
                    href="#births"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowCampaignsMenu(false)}
                  >
                    Los Nacimientos
                  </a>
                  <a
                    href="#childrens-day"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowCampaignsMenu(false)}
                  >
                    Día de la Infancia
                  </a>
                  <a
                    href="#christmas-box"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowCampaignsMenu(false)}
                  >
                    La Caja Navideña
                  </a>
                  <a
                    href="#back-to-school"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowCampaignsMenu(false)}
                  >
                    La Vuelta al Cole
                  </a>
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
    </header>
  )
}

