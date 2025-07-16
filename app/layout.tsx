import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "The New People Experience",
  description: "Diseñamos la experiencia empleado de forma significativa y con impacto real"}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
      <link rel="icon" href="/favicon.svg" />
       {/* Google Analytics */}
       <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-3798H9G6FJ`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3798H9G6FJ', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
      </head>
      <body>
      <Header />
        {children}
      </body>
    </html>
  )
}

