"use client"

import HeroSection from "@/components/sections/HeroSection"
import CompaniesSection from "@/components/sections/CompaniesSection"
import ContactSection from "@/components/sections/ContactSection"
import BenefitsToChoose from "@/components/sections/BenefitsToChoose"
import SayHello from "@/components/sections/SayHello"
import Recognition from "@/components/sections/Recognition"
import BornTuSurprise from "@/components/sections/BornTuSurprise"
import HeyTeam from "@/components/sections/HeyTeam"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompaniesSection />
      <BenefitsToChoose />
      <SayHello />
      <Recognition />
      <BornTuSurprise />
      <HeyTeam />
      <ContactSection />
    </main>
  )
}

