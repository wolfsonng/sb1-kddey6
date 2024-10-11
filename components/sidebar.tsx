"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight, Home, Database, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      } else {
        setIsCollapsed(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call on initial load

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = [
    { href: '/home', icon: Home, label: 'Home' },
    { href: '/sql-playground', icon: Database, label: 'SQL Playground' },
    { href: '/general-search', icon: Search, label: 'General Search' },
  ]

  return (
    <div className={`bg-background border-r transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} flex flex-col`}>
      <div className="p-4 flex justify-between items-center">
        {!isCollapsed && <span className="font-semibold text-sm md:text-base lg:text-lg">Menu</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="md:hidden"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="mt-4 flex-grow">
        {menuItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className={cn(
              "flex items-center p-4 hover:bg-accent text-sm md:text-base lg:text-lg",
              pathname === item.href && "bg-accent"
            )}
          >
            <item.icon className="h-5 w-5 mr-2" />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
}