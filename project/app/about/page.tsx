"use client"
import Cherished from '@/components/sections/Cherished'
import FeaturedBanner from '@/components/sections/FeaturedBanner'
import PeopleBehindSJ from '@/components/sections/PeopleBehindSj'
import RandomSection from '@/components/sections/RandomSection'
import { ScrollTimeline } from '@/components/sections/scroll-timeline'
import React from 'react'

const page = () => {
  return (
    <div>
      <ScrollTimeline/>
      <div data-dark-section>

      {/* <PeopleBehindSJ /> */}
      <RandomSection/>
      </div>
        
        {/* <FeaturedBanner /> */}
        <Cherished/>
    </div>
  )
}

export default page