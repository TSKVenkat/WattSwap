'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import BlurText from '@/BlurText/BlurText'
import ScrollVelocity from '@/ScrollVelocity/ScrollVelocity'

export default function Home() {
  const handleAnimationComplete = useCallback(() => {
    console.log('Animation completed!')
  }, [])

  return (
    <main className="relative top-[50px] min-h-screen bg-black selection:bg-white selection:text-black overflow-hidden">
      <div className="container mx-auto max-w-7xl sm:px-3 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Hero Title with ScrollVelocity */}
          <div className="w-screen -mx-4 sm:-mx-4 lg:-mx-8 overflow-hidden">
            <ScrollVelocity
              texts={['WattSwap', 'WattSwap']}
              velocity={60}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold whitespace-nowrap"
            />
          </div>


          {/* Animated Subtitle */}
          <BlurText
            text="Peer-to-Peer Energy Trading Platform"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg sm:text-xl lg:text-2xl text-center font-medium tracking-wide"
          />

          {/* Description */}
          <p className="text-gray-400 w-full max-w-2xl text-center sm:text-lg leading-relaxed">
            Powering the Future with Sustainable Energy.
            <span className="block mt-2">
              Seamless Energy Contracts, Transparent Pricing, and Hassle-Free Transactions.
            </span>
            <span className="block mt-2">
              Join us in revolutionizing the energy trade!
            </span>
          </p>

          {/* CTA Button */}
          <Link
            href="/energy"
            className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg
                     border border-white rounded-full
                     transition-all duration-300 ease-out
                     hover:-translate-y-2 hover:scale-105
                     hover:bg-white hover:text-black
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
                     active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  )
}