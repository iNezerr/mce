import React from 'react'
import Navbar from './Nav'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import LearningJourneySection from './LearningJourney'
import ProgramsSection from './ProgramsSection'
import Partners from './Partners'
import Footer from './Footer'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <div className="bg-[url('/backkk.jpg')] absolute inset-0 bg-cover bg-center h-screen" >
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <LearningJourneySection></LearningJourneySection>
      <ProgramsSection></ProgramsSection>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
