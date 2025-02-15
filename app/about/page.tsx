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
            text="About Us"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-lg sm:text-xl lg:text-2xl text-center font-medium tracking-wide"
          />

          {/* Main Content */}
          <div className="max-w-3xl mx-auto space-y-8">
            {/* About Text */}
            <div className="text-gray-400 space-y-6 text-base sm:text-lg leading-relaxed">
              <p>
                We are a next-generation energy marketplace enabling businesses and individuals 
                to buy, sell, and trade energy efficiently. Using blockchain technology and 
                smart contracts, we ensure secure, transparent, and automated energy transactions.
              </p>
              
              <div className="space-y-2">
                <h3 className="text-white text-lg sm:text-xl font-medium">Our Vision</h3>
                <p>
                  A world where energy is accessible, affordable, and fairly traded for all.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white text-lg sm:text-xl font-medium">Our Technology Stack</h3>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    React.js & Next.js – Fast, scalable UI
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Smart Contracts (Solidity & Web3.js) – Secure energy agreements
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    TailwindCSS & ShadCN – Beautiful, responsive UI
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
              <Link 
                href="/cmg-soon"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg
                         border border-white rounded-full min-w-[200px] text-center
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:scale-105
                         hover:bg-white hover:text-black
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
                         active:scale-95"
              >
                Join Our Community
              </Link>
              <Link 
                href="/cmg-soon"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg
                         border border-white rounded-full min-w-[200px] text-center
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:scale-105
                         hover:bg-white hover:text-black
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
                         active:scale-95"
              >
                Explore Our Technology
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}