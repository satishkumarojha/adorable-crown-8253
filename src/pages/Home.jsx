import React from 'react'
import { BrandSlider } from '../components/Home/BrandSlider'
import { DoMore } from '../components/Home/DoMore'
import Hero from '../components/Home/Hero'
import { Meeting } from '../components/Home/Meeting'
import { MobileBar } from '../components/Home/MobileBar'
import { OnDemand } from '../components/Home/OnDemand'
import { Reminder } from '../components/Home/Reminder'
import { RulesCard } from '../components/Home/RulesCard'
import { Solution } from '../components/Home/Solution'
import { TryCalendly } from '../components/Home/TryCalendly'
export const Home = () => {
  return (
    <>
    <Hero/>
    <BrandSlider/>
    <RulesCard/>
    <Meeting/>
    <Solution/>
    <DoMore/>
    <Reminder/>
    <OnDemand/>
    <MobileBar/>
    <TryCalendly/>
    
    </>
  )
}
