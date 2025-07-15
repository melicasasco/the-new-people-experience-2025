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
import { useSectionTracking } from "@/hooks/use-section-tracking"

function CampaignsPage() {
  const benefitsRef = useSectionTracking({ sectionName: "campaigns_benefits" });
  const platformRef = useSectionTracking({ sectionName: "campaigns_platform" });
  const birthdayRef = useSectionTracking({ sectionName: "campaigns_birthday" });
  const lunchRef = useSectionTracking({ sectionName: "campaigns_lunch" });
  const birthsRef = useSectionTracking({ sectionName: "campaigns_births" });
  const childrensDayRef = useSectionTracking({ sectionName: "campaigns_childrens_day" });
  const christmasRef = useSectionTracking({ sectionName: "campaigns_christmas" });
  const backToSchoolRef = useSectionTracking({ sectionName: "campaigns_back_to_school" });

  return (
    <main className="min-h-screen">
      <div ref={benefitsRef}>
        <BenefitsSection />
      </div>
      <div ref={platformRef}>
        <PlatformSection />
      </div>
      <div ref={birthdayRef}>
        <BirthdaySection />
      </div>
      <div ref={lunchRef}>
        <LunchSection />
      </div>
      <div ref={birthsRef}>
        <BirthsSection />
      </div>
      <div ref={childrensDayRef}>
        <ChildrensDaySection />
      </div>
      <div ref={christmasRef}>
        <ChristmasBoxSection />
      </div>
      <div ref={backToSchoolRef}>
        <BackToSchoolSection />
      </div>
    </main>
  )
}

export default CampaignsPage 