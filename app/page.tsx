'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const cuisines = [
  { name: 'Italian', image: 'https://images.unsplash.com/photo-1498579397066-22750a3cb424?w=300&h=300&fit=crop' },
  { name: 'Indian', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=300&fit=crop' },
  { name: 'Chinese', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=300&fit=crop' },
  { name: 'Thai', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=300&h=300&fit=crop' },
  { name: 'Mexican', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=300&fit=crop' },
  { name: 'American', image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&h=300&fit=crop' },
]

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    // Simulate login delay
    setTimeout(() => {
      router.push('/dashboard')
    }, 500)
  }

  const handleCuisineClick = (cuisine: string) => {
    router.push(`/category/${cuisine.toLowerCase()}`)
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="mb-12 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xl font-semibold rounded-lg shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>

        {/* Cuisine Categories */}
        <div className="w-full max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Explore Cuisines
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine.name}
                onClick={() => handleCuisineClick(cuisine.name)}
                className="cursor-pointer transform transition hover:scale-110"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h3 className="text-white font-semibold text-center">{cuisine.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

