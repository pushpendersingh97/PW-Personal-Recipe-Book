'use client'

import { Recipe } from '@/types/recipe'

interface RecipeMetaProps {
  recipe: Recipe
  size?: 'sm' | 'md' | 'lg'
  showCuisine?: boolean
  showIngredientsCount?: boolean
}

export default function RecipeMeta({ 
  recipe, 
  size = 'md',
  showCuisine = true,
  showIngredientsCount = false
}: RecipeMetaProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-4',
  }

  return (
    <div className={`flex flex-wrap ${gapClasses[size]} ${sizeClasses[size]} text-gray-500`}>
      <span className="flex items-center">
        <span className="mr-1">⏱️</span>
        {recipe.time} min
      </span>
      <span className="flex items-center">
        <span className="mr-1">📊</span>
        {recipe.difficulty}
      </span>
      <span className="flex items-center">
        <span className="mr-1">🍽️</span>
        <span className="capitalize">{recipe.type}</span>
      </span>
      {showCuisine && (
        <span className="flex items-center">
          <span className="mr-1">🌍</span>
          {recipe.cuisine}
        </span>
      )}
      {showIngredientsCount && (
        <span className="flex items-center">
          <span className="mr-1">📝</span>
          {recipe.ingredientsCount} ingredients
        </span>
      )}
    </div>
  )
}

