'use client'
import React from 'react'
import PlatformSection from './sections/PlatformSection'
import BirthdaySection from './sections/BirthdaySection'
import LunchSection from './sections/LunchSection'
import BirthsSection from './sections/BirthsSection'
import ChildrensDaySection from './sections/ChildrensDaySection'
import ChristmasBoxSection from './sections/ChristmasBoxSection'
import BackToSchoolSection from './sections/BackToSchoolSection'
import BenefitsSection from './sections/BenefitsSection'

function CampaignsPage() {
  return (
    <main className="min-h-screen">
      <BenefitsSection />
      <PlatformSection />
      <BirthdaySection />
      <LunchSection />
      <BirthsSection />
      <ChildrensDaySection />
      <ChristmasBoxSection />
      <BackToSchoolSection />
    </main>
  )
}

export default CampaignsPage 