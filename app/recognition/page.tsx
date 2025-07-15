"use client"
import ImpactRecognition from "./components/ImpactRecognition"
import RelationRecognition from "./components/RelationRecognition"
import CampaignObjectives from "./components/CampaignObjectives"
import HowItWorks from "./components/HowItWorks"
import Gesture from "./components/Gesture"
import GetYourDemo from "./components/GetYourDemo"
import { useSectionTracking } from "@/hooks/use-section-tracking"

export default function RecognitionPage() {
  const impactRef = useSectionTracking({ sectionName: "recognition_impact" });
  const relationRef = useSectionTracking({ sectionName: "recognition_relation" });
  const objectivesRef = useSectionTracking({ sectionName: "recognition_objectives" });
  const howItWorksRef = useSectionTracking({ sectionName: "recognition_how_it_works" });
  const gestureRef = useSectionTracking({ sectionName: "recognition_gesture" });
  const demoRef = useSectionTracking({ sectionName: "recognition_demo" });

  return (
    <>
      <div ref={impactRef}>
        <ImpactRecognition />
      </div>
      <div ref={relationRef}>
        <RelationRecognition />
      </div>
      <div ref={objectivesRef}>
        <CampaignObjectives />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <div ref={gestureRef}>
        <Gesture />
      </div>
      <div ref={demoRef}>
        <GetYourDemo />
      </div>
    </>
  )
}
