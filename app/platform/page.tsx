import React from 'react'
import Intro from './components/Intro'
import PlatformLayout from './components/PlatformLayout'
import platformData from '@/app/data/platformData.json'
import BottomSection from './components/BottomSection'

const page = () => {
  return ( 
    <div>
       <Intro />
       {platformData.map((item, index) => (
        <PlatformLayout key={index} index={index} item={item} reverse={index % 2 === 0} />
       ))}
       <BottomSection />
    </div>
  )
}

export default page