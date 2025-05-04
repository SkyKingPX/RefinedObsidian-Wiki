"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  FileText,
  Github,
  Menu,
  Package,
  Pickaxe,
  Search,
  Flame,
  Scissors,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommunityCredits } from "@/components/community-credits"

export default function DocumentationPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [recipeIndex, setRecipeIndex] = useState(0)
  const [recipeType, setRecipeType] = useState("crafting")

  // Sample recipes data with different types
  const recipes = [
    {
      name: "Refined Obsidian Ingot",
      description: "The core crafting material, created by smelting obsidian with blaze powder.",
      type: "crafting",
      ingredients: [
        { name: "Obsidian", position: 0 },
        { name: "Blaze Powder", position: 1 },
        { name: "Ender Pearl", position: 3 },
        { name: "Diamond", position: 4 },
        { name: "Blaze Powder", position: 7 },
      ],
      result: { name: "Refined Obsidian Ingot", count: 2 },
    },
    {
      name: "Obsidian Crystal",
      description: "A rare gem used for advanced crafting and enchanting.",
      type: "crafting",
      ingredients: [
        { name: "Refined Obsidian Ingot", position: 0 },
        { name: "Diamond", position: 1 },
        { name: "Ender Pearl", position: 3 },
        { name: "Glowstone Dust", position: 4 },
        { name: "Quartz", position: 7 },
      ],
      result: { name: "Obsidian Crystal", count: 1 },
    },

    {
      name: "Refined Obsidian Pickaxe",
      description: "A powerful pickaxe that can mine faster than netherite.",
      type: "crafting",
      ingredients: [
        { name: "Refined Obsidian Ingot", position: 0 },
        { name: "Refined Obsidian Ingot", position: 1 },
        { name: "Refined Obsidian Ingot", position: 2 },
        { name: "Stick", position: 4 },
        { name: "Stick", position: 7 },
      ],
      result: { name: "Refined Obsidian Pickaxe", count: 1 },
    },
    {
      name: "Obsidian Dust",
      description: "Fine obsidian dust used in advanced recipes.",
      type: "stonecutter",
      ingredients: [{ name: "Obsidian", position: 0 }],
      result: { name: "Obsidian Dust", count: 4 },
    },
    {
      name: "Purified Obsidian",
      description: "Purified obsidian with enhanced properties.",
      type: "smelting",
      ingredients: [{ name: "Obsidian", position: 0 }],
      result: { name: "Purified Obsidian", count: 1 },
    },
  ]

  // Filter recipes by type
  const filteredRecipes = recipes.filter((recipe) => recipe.type === recipeType)
  const currentRecipeIndex = recipeIndex % filteredRecipes.length

  const nextRecipe = () => {
    setRecipeIndex((prevIndex) => (prevIndex + 1) % filteredRecipes.length)
  }

  const prevRecipe = () => {
    setRecipeIndex((prevIndex) => (prevIndex - 1 + filteredRecipes.length) % filteredRecipes.length)
  }

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Reset recipe index when changing recipe type
  useEffect(() => {
    setRecipeIndex(0)
  }, [recipeType])

  return (
    <div className="min-h-screen theme-transition">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur theme-transition">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icon.png"
              alt="Refined Obsidian Icon"
              width={24}
              height={24}
              className="animate-pulse-glow"
            />
            <span className="text-xl font-bold text-primary">Refined Obsidian</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover-lift relative group">
              Wiki
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/downloads" className="text-sm font-medium hover-lift relative group">
              Downloads
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="rounded-full bg-secondary pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-40 transition-all duration-300 focus:w-60"
                />
              </div>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hover:bg-secondary transition-colors">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8 md:grid md:grid-cols-[240px_1fr] md:gap-10 lg:grid-cols-[280px_1fr] lg:gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-20 overflow-y-auto pb-12">
            <div className="space-y-4">
              <div className="py-2">
                <h2 className="mb-2 text-lg font-semibold tracking-tight text-primary">Navigation</h2>
                <div className="space-y-1">
                  <Link href="#overview" className="w-full">
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2 hover-lift group">
                      <FileText className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span>Overview</span>
                    </Button>
                  </Link>
                  <Link href="#features" className="w-full">
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2 hover-lift group">
                      <FileText className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span>Features</span>
                    </Button>
                  </Link>
                  <Link href="#crafting" className="w-full">
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2 hover-lift group">
                      <Pickaxe className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span>Crafting</span>
                    </Button>
                  </Link>
                  <Link href="#compatibility" className="w-full">
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2 hover-lift group">
                      <Package className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span>Compatibility</span>
                    </Button>
                  </Link>
                  <Link href="#installation" className="w-full">
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2 hover-lift group">
                      <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span>Download</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <Separator className="bg-border/50" />

              {/* Community Credits */}
              <CommunityCredits />

              {/* Animated sidebar element */}
              <div className="mt-8 rounded-lg border border-border/50 bg-card p-4 hover-glow">
                <div className="flex justify-center mb-3">
                  <Image
                    src="/assets/icon.png"
                    alt="Refined Obsidian Icon"
                    width={48}
                    height={48}
                    className="animate-float"
                  />
                </div>
                <h3 className="text-center text-sm font-medium">Join our Discord</h3>
                <p className="mt-2 text-xs text-muted-foreground text-center">
                  Get help, share your creations, and connect with the community
                </p>
                <a href="https://discord.gg/3ENgHTEcmT" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full mt-3 bg-primary/90 hover:bg-primary transition-colors">
                    Join Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-10">
          {/* Hero Section */}
          <div
            id="overview"
            className="relative overflow-hidden rounded-xl border border-border/50 bg-card theme-transition"
          >
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-center bg-cover mix-blend-overlay"></div>
            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/assets/icon.png"
                  alt="Refined Obsidian Icon"
                  width={64}
                  height={64}
                  className="mb-4 animate-pulse-glow"
                />
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">
                  Refined Obsidian Wiki
                </h1>
                <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                  Transform ordinary obsidian into powerful tools, armor, and building blocks with enhanced properties
                  and stunning visual effects.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/downloads">
                    <Button className="bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-primary/20">
                      Download Mod
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section id="introduction" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-primary">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Refined Obsidian is a comprehensive Minecraft mod that expands upon the vanilla obsidian block,
              introducing a new tier of materials, tools, weapons, armor, and decorative blocks. By processing obsidian
              through various methods, players can create refined obsidian - a material that rivals netherite in
              durability while offering unique magical properties.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="bg-card border-border/50 hover-scale theme-transition">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Enhanced Durability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tools and armor with exceptional durability and efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 hover-scale theme-transition">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Magical Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Special effects and enchantments unique to refined obsidian.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 hover-scale theme-transition">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">Aesthetic Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Beautiful decorative blocks with unique textures and lighting effects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-primary">Key Features</h2>
            <Tabs defaultValue="items" className="w-full">
              <TabsList className="bg-background border border-border/50 p-1 theme-transition">
                <TabsTrigger
                  value="items"
                  className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Items & Blocks
                </TabsTrigger>
                <TabsTrigger
                  value="tools"
                  className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Tools & Weapons
                </TabsTrigger>
                <TabsTrigger
                  value="armor"
                  className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Armor
                </TabsTrigger>
                <TabsTrigger
                  value="machines"
                  className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Machines
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="items"
                className="mt-6 space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/refined-obsidian-ingot.png"
                        alt="Refined Obsidian Ingot"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Refined Obsidian Ingot</h3>
                      <p className="text-sm text-muted-foreground">
                        The core crafting material, created by smelting obsidian with blaze powder.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/obsidian-crystal.png"
                        alt="Obsidian Crystal"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Obsidian Crystal</h3>
                      <p className="text-sm text-muted-foreground">
                        A rare gem used for advanced crafting and enchanting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/refined-obsidian-block.png"
                        alt="Refined Obsidian Block"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Refined Obsidian Block</h3>
                      <p className="text-sm text-muted-foreground">
                        Blast-resistant building block with a sleek appearance.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/glowing-obsidian.png"
                        alt="Glowing Obsidian"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Glowing Obsidian</h3>
                      <p className="text-sm text-muted-foreground">
                        Decorative block that emits a purple glow, perfect for atmospheric lighting.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="tools"
                className="mt-6 space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/refined-obsidian-pickaxe.png"
                        alt="Refined Obsidian Pickaxe"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Refined Obsidian Pickaxe</h3>
                      <p className="text-sm text-muted-foreground">
                        Mines faster than netherite and has a chance to double ore drops.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/obsidian-sword.png"
                        alt="Obsidian Sword"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Obsidian Sword</h3>
                      <p className="text-sm text-muted-foreground">
                        Deals additional fire damage and has a chance to apply Wither effect.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="armor"
                className="mt-6 space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/refined-obsidian-helmet.png"
                        alt="Refined Obsidian Helmet"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Refined Obsidian Helmet</h3>
                      <p className="text-sm text-muted-foreground">
                        Provides night vision and protection from fire damage.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/refined-obsidian-chestplate.png"
                        alt="Refined Obsidian Chestplate"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Refined Obsidian Chestplate</h3>
                      <p className="text-sm text-muted-foreground">
                        Reduces explosion damage and provides fire resistance.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="machines"
                className="mt-6 space-y-6 animate-in fade-in-50 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/obsidian-infuser.png"
                        alt="Obsidian Infuser"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Obsidian Infuser</h3>
                      <p className="text-sm text-muted-foreground">
                        Special crafting station for creating refined obsidian items.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group hover-lift">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/50 bg-card theme-transition group-hover:border-primary/50">
                      <Image
                        src="/assets/crystal-forge.png"
                        alt="Crystal Forge"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Crystal Forge</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced machine for creating obsidian crystals and enchanting items.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Crafting */}
          <section id="crafting" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-primary">Crafting Guide</h2>
            <div className="mb-4">
              <Tabs defaultValue="crafting" className="w-full" onValueChange={setRecipeType}>
                <TabsList className="bg-background border border-border/50 p-1 theme-transition">
                  <TabsTrigger
                    value="crafting"
                    className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    <Pickaxe className="h-4 w-4 mr-2" />
                    Crafting Table
                  </TabsTrigger>
                  <TabsTrigger
                    value="stonecutter"
                    className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    <Scissors className="h-4 w-4 mr-2" />
                    Stone Cutter
                  </TabsTrigger>
                  <TabsTrigger
                    value="smelting"
                    className="transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                  >
                    <Flame className="h-4 w-4 mr-2" />
                    Smelting
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="rounded-lg border border-border/50 bg-card p-6 hover-glow theme-transition">
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="icon" onClick={prevRecipe} className="hover:bg-primary/10">
                  <ArrowLeft className="h-5 w-5 text-primary" />
                  <span className="sr-only">Previous recipe</span>
                </Button>
                <h3 className="text-xl font-semibold text-primary">{filteredRecipes[currentRecipeIndex].name}</h3>
                <Button variant="ghost" size="icon" onClick={nextRecipe} className="hover:bg-primary/10">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span className="sr-only">Next recipe</span>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  {recipeType === "crafting" && (
                    <div className="grid grid-cols-3 gap-1 rounded-lg border border-border/50 bg-background p-2 theme-transition">
                      {Array.from({ length: 9 }).map((_, index) => {
                        const ingredient = filteredRecipes[currentRecipeIndex].ingredients.find(
                          (i) => i.position === index,
                        )
                        return (
                          <div
                            key={index}
                            className="aspect-square rounded border border-border/50 bg-card/80 p-1 transition-all duration-300 hover:border-primary/50 hover:bg-card theme-transition"
                          >
                            {ingredient && (
                              <Image
                                src={`/assets/${ingredient.name.toLowerCase().replace(/\s+/g, "-")}.png`}
                                alt={ingredient.name}
                                width={50}
                                height={50}
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {recipeType === "stonecutter" && (
                    <div className="rounded-lg border border-border/50 bg-background p-4 theme-transition">
                      <div className="flex items-center gap-4">
                        <div className="aspect-square w-16 rounded border border-border/50 bg-card/80 p-1">
                          <Image
                            src={`/assets/${filteredRecipes[currentRecipeIndex].ingredients[0].name.toLowerCase().replace(/\s+/g, "-")}.png`}
                            alt={filteredRecipes[currentRecipeIndex].ingredients[0].name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 text-center">
                          <Scissors className="h-8 w-8 text-primary mx-auto" />
                          <p className="text-xs text-muted-foreground mt-1">Stone Cutter</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {recipeType === "smelting" && (
                    <div className="rounded-lg border border-border/50 bg-background p-4 theme-transition">
                      <div className="flex flex-col items-center gap-2">
                        <div className="aspect-square w-16 rounded border border-border/50 bg-card/80 p-1">
                          <Image
                            src={`/assets/${filteredRecipes[currentRecipeIndex].ingredients[0].name.toLowerCase().replace(/\s+/g, "-")}.png`}
                            alt={filteredRecipes[currentRecipeIndex].ingredients[0].name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <Flame className="h-8 w-8 text-primary animate-pulse" />
                        <p className="text-xs text-muted-foreground">Furnace</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <ChevronRight className="h-8 w-8 text-primary animate-pulse" />
                    <div className="rounded border border-border/50 bg-card/80 p-2 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-md hover:shadow-primary/20 theme-transition">
                      <Image
                        src={`/assets/${filteredRecipes[currentRecipeIndex].result.name.toLowerCase().replace(/\s+/g, "-")}.png`}
                        alt={filteredRecipes[currentRecipeIndex].result.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-lg font-medium text-primary">
                      {filteredRecipes[currentRecipeIndex].result.count > 1
                        ? `x${filteredRecipes[currentRecipeIndex].result.count}`
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{filteredRecipes[currentRecipeIndex].description}</p>
              <div className="mt-4 flex justify-center">
                <p className="text-xs text-muted-foreground">
                  Recipe {currentRecipeIndex + 1} of {filteredRecipes.length}
                </p>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-primary">Gallery</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg border border-border/50 group hover-glow theme-transition">
                <Image
                  src="/assets/gallery-1.png"
                  alt="Refined Obsidian Tools"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-border/50 group hover-glow theme-transition">
                <Image
                  src="/assets/gallery-2.png"
                  alt="Obsidian Castle"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-border/50 group hover-glow theme-transition">
                <Image
                  src="/assets/gallery-3.png"
                  alt="Obsidian Armor Set"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </section>

          {/* Compatibility */}
          <section id="compatibility" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-primary">Compatibility</h2>
            <Card className="bg-card border-border/50 hover-scale theme-transition">
              <CardHeader>
                <CardTitle className="text-primary">Compatible With</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Refined Obsidian is compatible with the following platforms and mods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Supported Platforms</h3>
                  <ul className="grid gap-2 md:grid-cols-3">
                    <li className="flex items-center gap-2 group hover-lift">
                      <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                      <span>Fabric 1.20.1-1.21.4</span>
                    </li>
                    <li className="flex items-center gap-2 group hover-lift">
                      <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                      <span>Forge 1.20.1-1.21.4</span>
                    </li>
                    <li className="flex items-center gap-2 group hover-lift">
                      <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                      <span>NeoForge 1.20.4-1.21.4</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-primary mb-2">Compatible Mods</h3>
                  <div className="flex items-center gap-2 group hover-lift">
                    <ChevronRight className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                    <span>Just Enough Items (JEI)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Available on{" "}
                  <a href="https://modrinth.com" className="text-primary hover:underline">
                    Modrinth
                  </a>{" "}
                  and{" "}
                  <a href="https://curseforge.com" className="text-primary hover:underline">
                    CurseForge
                  </a>
                </p>
              </CardFooter>
            </Card>
          </section>

          {/* Download */}
          <section id="installation" className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-primary">Download</h2>
            <div className="rounded-lg border border-border/50 bg-card p-6 hover-glow theme-transition">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-primary">Get Refined Obsidian Mod</h3>
                  <p className="text-muted-foreground">
                    Download the latest version of Refined Obsidian for your Minecraft version.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link href="/downloads">
                    <Button className="bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-primary/20">
                      Download v2.4.1
                    </Button>
                  </Link>
                  <Link href="/downloads">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                    >
                      All Versions
                    </Button>
                  </Link>
                </div>
              </div>
              <Separator className="my-6 bg-border/50" />
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Requirements</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Minecraft 1.20.1 or newer</li>
                    <li>Fabric, Forge, or NeoForge</li>
                    <li>Java 17 or newer</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Installation</h4>
                  <p className="text-sm text-muted-foreground">
                    Place the downloaded .jar file in your Minecraft mods folder.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Download Options</h4>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://modrinth.com"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <Image src="/assets/icon.png" alt="Modrinth" width={12} height={12} /> Modrinth
                    </a>
                    <a
                      href="https://curseforge.com"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <Package className="h-3 w-3" /> CurseForge
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-6 theme-transition">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icon.png"
              alt="Refined Obsidian Icon"
              width={20}
              height={20}
              className="animate-pulse-glow"
            />
            <span className="text-lg font-semibold text-primary">Refined Obsidian</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">All Rights Reserved</p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">CurseForge</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Image src="/assets/icon.png" alt="Modrinth" width={20} height={20} />
              <span className="sr-only">Modrinth</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
