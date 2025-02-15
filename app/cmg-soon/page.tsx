'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import BlurText from '@/BlurText/BlurText'
import ScrollVelocity from '@/ScrollVelocity/ScrollVelocity'

export default function About() {
  const handleAnimationComplete = useCallback(() => {
    console.log('Animation completed!')
  }, [])

  return (
    <main className="relative min-h-screen bg-black selection:bg-white selection:text-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Hero Title with ScrollVelocity */}
          <div className="w-screen -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden mt-16">
            <ScrollVelocity
              texts={['WattSwap', 'WattSwap']}
              velocity={60}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap"
            />
          </div>

          {/* Animated Section Title */}
          <BlurText
            text="Coming Soon"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg sm:text-xl lg:text-2xl text-center font-medium tracking-wide"
          />
        </div>
      </div>
    </main>
  )
}