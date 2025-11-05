'use client'

import { useMemo } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Header from '@/components/Header'
import RecipesGrid from '@/components/RecipesGrid'
import Pagination from '@/components/Pagination'
import ViewToggle from '@/components/ViewToggle'
import EmptyState from '@/components/EmptyState'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useRecipes } from '@/hooks/useRecipes'
import { useViewMode } from '@/hooks/useViewMode'
import { usePagination } from '@/hooks/usePagination'

export default function CategoryPage() {
  const router = useRouter()
  const params = useParams()
  const cuisine = params.cuisine as string
  const { recipes, loading, error } = useRecipes()
  const { viewMode, setViewMode } = useViewMode('grid')

  const filteredRecipes = useMemo(() => {
    return recipes.filter(
      (recipe) => recipe.cuisine.toLowerCase() === cuisine.toLowerCase()
    )
  }, [recipes, cuisine])

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination({
    items: filteredRecipes,
  })

  const cuisineName = cuisine.charAt(0).toUpperCase() + cuisine.slice(1)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          title={`${cuisineName} Recipes`}
          leftButton={{ label: '← Home', onClick: () => router.push('/') }}
        />
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          title={`${cuisineName} Recipes`}
          leftButton={{ label: '← Home', onClick: () => router.push('/') }}
        />
        <EmptyState message={`Error loading recipes: ${error}`} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title={`${cuisineName} Recipes`}
        leftButton={{ label: '← Home', onClick: () => router.push('/') }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* View Toggle and Results Count */}
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              Found {filteredRecipes.length} {cuisineName} recipe{filteredRecipes.length !== 1 ? 's' : ''}
            </div>
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>

        {/* Recipes Display */}
        {filteredRecipes.length === 0 ? (
          <EmptyState 
            message={`No ${cuisineName} recipes found.`}
            actionLabel="Go Back Home"
            onAction={() => router.push('/')}
          />
        ) : (
          <>
            <RecipesGrid recipes={paginatedItems} viewMode={viewMode} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          </>
        )}
      </div>
    </div>
  )
}
