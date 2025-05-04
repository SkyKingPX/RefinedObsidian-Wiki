"use client"

import Link from "next/link"
import { Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center theme-transition">
      <div className="text-center space-y-6">
        <Diamond className="h-24 w-24 text-primary animate-pulse-glow mx-auto" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">
          Refined Obsidian
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
          Transform ordinary obsidian into powerful tools, armor, and building blocks
        </p>
        <div className="pt-6">
          <Link href="/documentation">
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-primary/20 text-lg px-8 py-6">
              Documentation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
