import React from 'react'
import Intro from './components/Intro'
import PlatformLayout from './components/PlatformLayout'
import platformData from '@/app/data/platformData.json'
import BottomSection from './components/BottomSection'
import { useSectionTracking } from "@/hooks/use-section-tracking"

const page = () => {
  const introRef = useSectionTracking({ sectionName: "platform_intro" });
  const bottomRef = useSectionTracking({ sectionName: "platform_bottom" });

  return ( 
    <div>
       <div ref={introRef}>
         <Intro />
       </div>
       {platformData.map((item, index) => (
        <PlatformLayout key={index} index={index} item={item} reverse={index % 2 === 0} />
       ))}
       <div ref={bottomRef}>
         <BottomSection />
       </div>
    </div>
  )
}

export default page