'use client'

import React, { useEffect } from 'react'
import {
  GiFamilyHouse,
  GiSkullStaff,
  GiLevelFourAdvanced,
} from 'react-icons/gi'
import { MdHighQuality } from 'react-icons/md'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import OurServicesCard from './OurServicesCard'

const cardData = [
  {
    title: 'Advanced Technology',
    icon: GiLevelFourAdvanced,
  },
  {
    title: 'Comfortable Place',
    icon: GiFamilyHouse,
  },
  {
    title: 'Quality Equipment',
    icon: MdHighQuality,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
  {
    title: 'Friendly Staff',
    icon: GiSkullStaff,
  },
]

const OurServices = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    cardData.forEach((card, index) => {
      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: `.service-card-${index}`,
          start: '70% bottom',
          end: ' center bottom',
          scrub: 1,
        },
        defaults: { duration: 1, ease: 'power2.out' },
      })

      cardAnimation.fromTo(
        `.service-card-${index}`,
        { opacity: 0, x: '-100%', scale: 0.5 },
        { opacity: 1, x: '0%', scale: 1 }
      )
    })
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-primary text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-secondary  mt-10 pb-2">
        Our Services
      </h1>
      <div className="mx-auto text-center px-2 md:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full md:w-[80%] lg:w-[70%] gap-4 mt-8">
        {cardData.map((card, index) => (
          <div key={index} className={`service-card-${index}`}>
            <OurServicesCard data={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurServices
