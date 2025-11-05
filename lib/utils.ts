import { Recipe } from '@/types/recipe'

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : []
}

export function toggleFavorite(recipeId: string): void {
  if (typeof window === 'undefined') return
  const favorites = getFavorites()
  const index = favorites.indexOf(recipeId)
  
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(recipeId)
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export function isFavorite(recipeId: string): boolean {
  if (typeof window === 'undefined') return false
  return getFavorites().includes(recipeId)
}

export function filterRecipes(
  recipes: Recipe[],
  searchTerm: string,
  mealType: string,
  cookingTime: string
): Recipe[] {
  return recipes.filter((recipe) => {
    const matchesSearch = 
      searchTerm === '' || 
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesMealType = mealType === 'all' || recipe.type === mealType
    
    const matchesCookingTime = (() => {
      if (cookingTime === 'all') return true
      const time = parseInt(recipe.time)
      if (cookingTime === 'under-30') return time < 30
      if (cookingTime === '30-60') return time >= 30 && time <= 60
      if (cookingTime === 'over-60') return time > 60
      return true
    })()
    
    return matchesSearch && matchesMealType && matchesCookingTime
  })
}

