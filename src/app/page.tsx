'use client'

import { useEffect, useRef } from 'react'

export default function ScratchGame() {
  const scratchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Scratch project when component mounts
    if (scratchRef.current) {
      // This will embed the Scratch project
      const iframe = document.createElement('iframe')
      iframe.src = '/scratch/poshpoule-farm-game.html'
      iframe.width = '800'
      iframe.height = '600'
      iframe.style.border = 'none'
      iframe.style.borderRadius = '12px'
      scratchRef.current.appendChild(iframe)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            PoshPOULE Farms Scratch Game
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Interactive farm simulation built in Scratch
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              🎮 Play Game
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              📊 View Code
            </button>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Game Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🌱</div>
              <h3 className="font-semibold text-green-700">Plant Crops</h3>
              <p className="text-gray-600">Grow various farm crops</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🐄</div>
              <h3 className="font-semibold text-blue-700">Raise Animals</h3>
              <p className="text-gray-600">Care for farm animals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-yellow-700">Earn Money</h3>
              <p className="text-gray-600">Sell products for profit</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Scratch Game Player
          </h2>
          <div 
            ref={scratchRef}
            className="flex justify-center items-center min-h-[600px] bg-gray-100 rounded-lg"
          >
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">🎮</div>
              <p className="text-xl">Loading Scratch Game...</p>
              <p className="text-sm mt-2">Upload your .sb3 file to /public/scratch/</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
