'use client'

import { useState, useEffect } from 'react'
import { isFavorite, toggleFavorite } from '@/lib/utils'

interface FavoriteButtonProps {
  recipeId: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function FavoriteButton({ recipeId, size = 'md', className = '' }: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    setFavorite(isFavorite(recipeId))
  }, [recipeId])

  const handleClick = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    toggleFavorite(recipeId)
    setFavorite(!favorite)
  }

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} focus:outline-none ${className}`}
      aria-label="Toggle favorite"
    >
      {favorite ? '❤️' : '🤍'}
    </button>
  )
}

