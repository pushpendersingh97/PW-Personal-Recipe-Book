'use client'

interface ViewToggleProps {
  viewMode: 'list' | 'grid'
  onViewModeChange: (mode: 'list' | 'grid') => void
  showOnMobile?: boolean
}

export default function ViewToggle({ 
  viewMode, 
  onViewModeChange, 
  showOnMobile = false 
}: ViewToggleProps) {
  const displayClass = showOnMobile ? 'flex' : 'hidden md:flex'
  
  return (
    <div className={`${displayClass} gap-2`}>
      <button
        onClick={() => onViewModeChange('list')}
        className={`px-4 py-2 rounded-lg transition ${
          viewMode === 'list'
            ? 'bg-orange-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="List view"
      >
        List
      </button>
      <button
        onClick={() => onViewModeChange('grid')}
        className={`px-4 py-2 rounded-lg transition ${
          viewMode === 'grid'
            ? 'bg-orange-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Grid view"
      >
        Grid
      </button>
    </div>
  )
}

