import React from 'react'
import Intro from './components/Intro'
import KitsTemplate from './components/KitsTemplate'
import kitsData from '@/app/data/bornToSurpriseKits.json'

export default function BornToSurprise() {
  return (
    <div>
      <Intro />
      <div className=" mt-2 md:mt-0 mb-4">
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