import { useState, useEffect } from 'react'
import { Recipe } from '@/types/recipe'

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/data/recipes.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch recipes')
        }
        return res.json()
      })
      .then((data) => {
        setRecipes(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading recipes:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { recipes, loading, error }
}

