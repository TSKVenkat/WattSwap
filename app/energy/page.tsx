'use client'

import { useCallback, useState } from 'react'
import BlurText from '@/BlurText/BlurText'
import ScrollVelocity from '@/ScrollVelocity/ScrollVelocity'
import { Check } from 'lucide-react'

export default function About() {
    const [showSuccess, setShowSuccess] = useState(false)
    const [formData, setFormData] = useState({
        date: '',
        type: 'solar', // default value as shown in image
        amount: '',
        price: ''
    })

    const handleAnimationComplete = useCallback(() => {
        console.log('Animation completed!')
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically make your API call
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000) // Hide after 3 seconds
    }

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
                        text="Energy Contract"
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

                            <p className="text-white text-center text-lg sm:text-xl font-medium">
                                "A world where energy is accessible, affordable, and fairly traded for all."
                            </p>


                        </div>

                        {/* Energy Form Section */}
                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg border border-gray-800">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-300">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-300">
                                        Type
                                    </label>
                                    <select
                                        id="type"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        required
                                    >
                                        <option value="solar">Solar</option>
                                        <option value="wind">Wind</option>
                                        <option value="hydro">Hydro</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
                                        Amount (KWh)
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.amount}
                                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-300">
                                        Price (Per KWh)
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           focus:ring-offset-gray-900 transition-all duration-200 ease-out"
                                >
                                    Submit
                                </button>

                                {/* Success Message */}
                                {showSuccess && (
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-green-500 rounded-md transition-all duration-300 ease-in-out">
                                        <div className="flex items-center space-x-2 text-white">
                                            <Check className="w-6 h-6" />
                                            <span>Successfully added!</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}