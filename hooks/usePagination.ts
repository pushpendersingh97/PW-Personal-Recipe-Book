import { useState, useEffect, useMemo } from 'react'

interface UsePaginationProps<T> {
  items: T[]
  itemsPerPage?: number
  resetOnItemsChange?: boolean
}

export function usePagination<T>({ 
  items, 
  itemsPerPage = 12,
  resetOnItemsChange = true 
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return items.slice(startIndex, endIndex)
  }, [items, currentPage, itemsPerPage])

  useEffect(() => {
    if (resetOnItemsChange) {
      setCurrentPage(1)
    }
  }, [items.length, resetOnItemsChange])

  const goToPage = (page: number) => {
    const validPage = Math.max(1, Math.min(page, totalPages))
    setCurrentPage(validPage)
  }

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    setCurrentPage,
  }
}

