'use client'

import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
  leftButton?: {
    label: string
    onClick: () => void
  }
  rightButton?: {
    label: string
    onClick: () => void
  }
}

export default function Header({ title, leftButton, rightButton }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {leftButton ? (
            <button
              onClick={leftButton.onClick}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
            >
              {leftButton.label}
            </button>
          ) : (
            <div></div>
          )}
          
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 text-center">
            {title}
          </h1>
          
          {rightButton ? (
            <button
              onClick={rightButton.onClick}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
            >
              {rightButton.label}
            </button>
          ) : (
            <div className="w-24"></div>
          )}
        </div>
      </div>
    </header>
  )
}

