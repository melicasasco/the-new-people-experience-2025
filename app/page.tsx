"use client"

import HeroSection from "@/components/sections/HeroSection"
import CompaniesSection from "@/components/sections/CompaniesSection"
import ContactSection from "@/components/sections/ContactSection"
import BenefitsToChoose from "@/components/sections/BenefitsToChoose"
import SayHello from "@/components/sections/SayHello"
import Recognition from "@/components/sections/Recognition"
import BornTuSurprise from "@/components/sections/BornTuSurprise"
import HeyTeam from "@/components/sections/HeyTeam"
import { useSectionTracking } from "@/hooks/use-section-tracking"

export default function Home() {
  const heroRef = useSectionTracking({ sectionName: "hero" });
  const companiesRef = useSectionTracking({ sectionName: "companies" });
  const benefitsRef = useSectionTracking({ sectionName: "benefits" });
  const sayHelloRef = useSectionTracking({ sectionName: "say_hello" });
  const recognitionRef = useSectionTracking({ sectionName: "recognition" });
  const bornToSurpriseRef = useSectionTracking({ sectionName: "born_to_surprise" });
  const heyTeamRef = useSectionTracking({ sectionName: "hey_team" });
  const contactRef = useSectionTracking({ sectionName: "contact" });

  return (
    <main className="min-h-screen">
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={companiesRef}>
        <CompaniesSection />
      </div>
      <div ref={benefitsRef}>
        <BenefitsToChoose />
      </div>
      <div ref={sayHelloRef}>
        <SayHello />
      </div>
      <div ref={recognitionRef}>
        <Recognition />
      </div>
      <div ref={bornToSurpriseRef}>
        <BornTuSurprise />
      </div>
      <div ref={heyTeamRef}>
        <HeyTeam />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  )
}

