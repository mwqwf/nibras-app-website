"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-serif text-xl font-bold">ن</span>
            </div>
            <span className="text-2xl font-serif font-bold text-foreground">نِبراس</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              الرئيسية
            </Link>
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              المميزات
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              عن التطبيق
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              الخصوصية
            </Link>
            <Button asChild>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                حمّل التطبيق
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="فتح القائمة"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              الرئيسية
            </Link>
            <Link href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              المميزات
            </Link>
            <Link href="#about" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              عن التطبيق
            </Link>
            <Link href="/privacy" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              الخصوصية
            </Link>
            <Button asChild className="w-full">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                حمّل التطبيق
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
