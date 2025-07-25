'use client'
import React from 'react'
import Intro from './components/Intro'
import KitsTemplate from './components/KitsTemplate'
import kitsData from '@/app/data/bornToSurpriseKits.json'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSectionTracking } from "@/hooks/use-section-tracking"

export default function BornToSurprise() {
  const router = useRouter()
  const introRef = useSectionTracking({ sectionName: "born_to_surprise_intro" });
  const kitsRef = useSectionTracking({ sectionName: "born_to_surprise_kits" });

  return (
    <div>
            <button
        onClick={() => router.back()}
        className="inline-flex md:text-[20px] text-[14px] items-center text-black hover:text-gray-700 transition-colors ml-4 absolute z-10 mt-6 mb-4">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Volver
      </button>
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={kitsRef} className=" mt-2 md:mt-0 mb-4">
        {kitsData.map((kit, idx) => (
          <KitsTemplate
            key={idx}
            title={kit.title}
            items={kit.items}
            description={kit.description}
            backgroundColor={idx % 2 === 0 ? '#FFFC8A' : '#fff'}
          />
        ))}
      </div>
    </div>
  )
}