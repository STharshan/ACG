import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServiceSection from '../components/Home/ServiceSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'
import ScrollingTestimonials from '../components/Home/ScrollTest'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TestimonialsSection />
      <ScrollingTestimonials />
      <ServiceSection />
    </div>
  )
}

export default Home
