import React from 'react'
import Navbar from './Nav'
import HeroSection from './HeroSection'

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <div className="bg-[url('/backkk.jpg')] absolute inset-0 bg-cover bg-center h-screen" >
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  )
}

export default MainLayout
