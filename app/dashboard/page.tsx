'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import SearchFilters from '@/components/SearchFilters'
import RecipesGrid from '@/components/RecipesGrid'
import Pagination from '@/components/Pagination'
import ViewToggle from '@/components/ViewToggle'
import EmptyState from '@/components/EmptyState'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useRecipes } from '@/hooks/useRecipes'
import { useViewMode } from '@/hooks/useViewMode'
import { usePagination } from '@/hooks/usePagination'
import { filterRecipes } from '@/lib/utils'

export default function Dashboard() {
  const router = useRouter()
  const { recipes, loading, error } = useRecipes()
  const { viewMode, setViewMode } = useViewMode('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [mealType, setMealType] = useState('all')
  const [cookingTime, setCookingTime] = useState('all')

  const filteredRecipes = useMemo(() => {
    return filterRecipes(recipes, searchTerm, mealType, cookingTime)
  }, [recipes, searchTerm, mealType, cookingTime])

  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination({
    items: filteredRecipes,
    resetOnItemsChange: true,
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="Recipe Book" rightButton={{ label: 'Home', onClick: () => router.push('/') }} />
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="Recipe Book" rightButton={{ label: 'Home', onClick: () => router.push('/') }} />
        <EmptyState message={`Error loading recipes: ${error}`} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Recipe Book" 
        rightButton={{ label: 'Home', onClick: () => router.push('/') }} 
      />

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar and Filters */}
          <SearchFilters
            searchTerm={searchTerm}
            mealType={mealType}
            cookingTime={cookingTime}
            onSearchChange={setSearchTerm}
            onMealTypeChange={setMealType}
            onCookingTimeChange={setCookingTime}
            resultsCount={paginatedItems.length}
            totalCount={filteredRecipes.length}
          />

          {/* View Toggle - Only on desktop */}
          <div className="hidden md:block mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              View Mode
            </label>
            <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
          </div>
        </div>

        {/* Recipes Display */}
        {paginatedItems.length === 0 ? (
          <EmptyState message="No recipes found matching your criteria." />
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
