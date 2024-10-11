"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

// Mock function to simulate API call
async function searchDatabase(params: any): Promise<any[]> {
  // In a real application, this would be an API call to your Flask backend
  console.log('Search params:', params)
  return [
    ['Result 1', 'Associated Data 1'],
    ['Result 2', 'Associated Data 2'],
    ['Result 3', 'Associated Data 3'],
  ]
}

export default function GeneralSearch() {
  const [searchParams, setSearchParams] = useState({
    database: 'oracle/MAdbtrain',
    keyword: '',
    wildcard: '%keyword%',
    searchType: 'column'
  })
  const [results, setResults] = useState<any[]>([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const searchResults = await searchDatabase(searchParams)
    setResults(searchResults)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">General Database Search</h1>
      <SearchForm 
        searchParams={searchParams} 
        setSearchParams={setSearchParams} 
        handleSearch={handleSearch} 
      />
      <SearchResults results={results} />
    </div>
  )
}