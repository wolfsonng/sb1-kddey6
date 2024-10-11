import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Database Explorer</h1>
        <p className="mb-8">Explore and search across multiple databases with ease.</p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/sql-playground">SQL Playground</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/general-search">General Search</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}