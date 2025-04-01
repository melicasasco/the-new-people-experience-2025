"use client"

import Header from "@/components/Header"
import HeroSection from "@/components/sections/HeroSection"
import CompaniesSection from "@/components/sections/CompaniesSection"
import FlexibilitySection from "@/components/sections/FlexibilitySection"
import PlatformSection from "@/components/sections/PlatformSection"
import BirthdaySection from "@/components/sections/BirthdaySection"
import LunchSection from "@/components/sections/LunchSection"
import BirthsSection from "@/components/sections/BirthsSection"
import ChildrensDaySection from "@/components/sections/ChildrensDaySection"
import ChristmasBoxSection from "@/components/sections/ChristmasBoxSection"
import BackToSchoolSection from "@/components/sections/BackToSchoolSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import ClientsSection from "@/components/sections/ClientsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CompaniesSection />
      <FlexibilitySection />
      <PlatformSection />
      <BirthdaySection />
      <LunchSection />
      <BirthsSection />
      <ChildrensDaySection />
      <ChristmasBoxSection />
      <BackToSchoolSection />
      <BenefitsSection />
      <ClientsSection />
      <ContactSection />
    </main>
  )
}

