import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer({}) {
  return (
    <>
      <div 
      className=
      "flex w-full flex-col md:gap-0 gap-[40px] md:flex-row md:items-center md:justify-between justify-center space-y-8 md:space-y-0 w-full px-[24px] md:px-[100px]"
      >
      <Link href="/" className="order-2 flex md:items-center  hover-scale">
          <Image
            src="/bottom-logo.svg"
            alt="be People Experience"
            width={200}
            height={40}
            className="w-full max-w-[100px] md:max-w-[400px]"
            />
        </Link>

        <div className="order-3 flex items-center mb-4 md:mb-0">
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
            className="mr-2 w-[24px] h-[24px]"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
          <span className="md:mr-[80px]">
          <a
            href="https://www.instagram.com/bepeopleexperience/"
            target="_blank"
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:duration-300"
            >
            @bepeopleexperience
          </a>
          </span>
        </div>
        <button
          type="submit"
          form="contact-form"
          className="order-1 md:order-3 h-fit w-[150px] border border-black rounded-full px-8 py-2 hover:bg-black hover:text-white transition-colors hover-scale text-[16px] mb-[40px] md:mb-0"
        >
          Enviar
        </button>
      </div>
    </>
  );
}
