'use client'

import { Recipe } from '@/types/recipe'
import RecipeCard from './RecipeCard'

interface RecipesGridProps {
  recipes: Recipe[]
  viewMode: 'list' | 'grid'
}

export default function RecipesGrid({ recipes, viewMode }: RecipesGridProps) {
  if (recipes.length === 0) {
    return null
  }

  return (
    <div
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-4'
      }
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} viewMode={viewMode} />
      ))}
    </div>
  )
}

