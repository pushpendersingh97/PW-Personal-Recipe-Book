import { useState, useEffect } from 'react'

export function useViewMode(defaultMode: 'list' | 'grid' = 'grid') {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>(defaultMode)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode('list')
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { viewMode, setViewMode }
}

