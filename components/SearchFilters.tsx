'use client'

interface SearchFiltersProps {
  searchTerm: string
  mealType: string
  cookingTime: string
  onSearchChange: (value: string) => void
  onMealTypeChange: (value: string) => void
  onCookingTimeChange: (value: string) => void
  resultsCount?: number
  totalCount?: number
}

export default function SearchFilters({
  searchTerm,
  mealType,
  cookingTime,
  onSearchChange,
  onMealTypeChange,
  onCookingTimeChange,
  resultsCount,
  totalCount,
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search recipes by name or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Meal Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meal Type
          </label>
          <select
            value={mealType}
            onChange={(e) => onMealTypeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Types</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        {/* Cooking Time Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cooking Time
          </label>
          <select
            value={cookingTime}
            onChange={(e) => onCookingTimeChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Times</option>
            <option value="under-30">Under 30 minutes</option>
            <option value="30-60">30-60 minutes</option>
            <option value="over-60">Over 60 minutes</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      {resultsCount !== undefined && totalCount !== undefined && (
        <div className="text-sm text-gray-600">
          Showing {resultsCount} of {totalCount} recipes
        </div>
      )}
    </div>
  )
}

