"use client"
import ImpactRecognition from "./components/ImpactRecognition"
import RelationRecognition from "./components/RelationRecognition"
import CampaignObjectives from "./components/CampaignObjectives"
import HowItWorks from "./components/HowItWorks"
import Gesture from "./components/Gesture"
import GetYourDemo from "./components/GetYourDemo"

export default function RecognitionPage() {

  return (
    <>
      <ImpactRecognition />
      <RelationRecognition />
      <CampaignObjectives />
      <HowItWorks />
      <Gesture />
      <GetYourDemo />
    </>
  )
}
