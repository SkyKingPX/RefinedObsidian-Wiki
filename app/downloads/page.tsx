"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Package, Download, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Define version data
const fabricVersions = [
  "1.0.0-1.20.1",
  "1.0.0-1.20.4",
  "1.0.0-1.21.1",
]

const forgeVersions = [
  "1.0.0-1.20.1",
  "1.0.0-1.20.4",
  "1.0.0-1.21.1",
]

const neoforgeVersions = [
  "1.0.0-1.20.4",
  "1.0.0-1.21.1",
]

export default function DownloadsPage() {
  const [showAllVersions, setShowAllVersions] = useState({
    fabric: false,
    forge: false,
    neoforge: false,
  })

  const handleDownload = (loader: string, version: string) => {
    // Construct the file path
    const filePath = `/jars/${loader}-${version}.jar`

    // Create a link element
    const link = document.createElement("a")
    link.href = filePath
    link.download = `refined-obsidian-${loader}-${version}.jar`

    // Append to the document, click it, and remove it
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/downloads" className="text-sm font-medium hover-lift relative group">
              Downloads
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-100 transition-transform"></span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hover:bg-secondary transition-colors">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Download Refined Obsidian</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred platform and download the latest version
          </p>
        </div>

        {/* Platform Tabs */}
        <Tabs defaultValue="fabric" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="fabric" className="text-lg py-3">
              Fabric
            </TabsTrigger>
            <TabsTrigger value="forge" className="text-lg py-3">
              Forge
            </TabsTrigger>
            <TabsTrigger value="neoforge" className="text-lg py-3">
              NeoForge
            </TabsTrigger>
          </TabsList>

          {/* Fabric Downloads */}
          <TabsContent value="fabric" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Fabric</CardTitle>
                <CardDescription>V1 - Refined Obsidian for Fabric</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Button
                    className="h-auto py-3 bg-primary hover:bg-primary/80"
                    onClick={() => handleDownload("fabric", "1.0.0-1.21.4")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Latest (1.21.4)
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 border-primary text-primary"
                    onClick={() => setShowAllVersions({ ...showAllVersions, fabric: !showAllVersions.fabric })}
                  >
                    <ChevronDown
                      className={`mr-2 h-4 w-4 transition-transform duration-200 ${showAllVersions.fabric ? "rotate-180" : ""}`}
                    />
                    {showAllVersions.fabric ? "Hide Versions" : "Show All Versions"}
                  </Button>
                </div>

                {showAllVersions.fabric && (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="versions">
                      <AccordionTrigger>All Fabric Versions</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                          {fabricVersions.map((version) => (
                            <Button
                              key={version}
                              variant="ghost"
                              className="justify-start hover:bg-primary/10 hover:text-primary"
                              onClick={() => handleDownload("fabric", version)}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Fabric {version}
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forge Downloads */}
          <TabsContent value="forge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Forge</CardTitle>
                <CardDescription>V1 - Refined Obsidian for Forge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Button
                    className="h-auto py-3 bg-primary hover:bg-primary/80"
                    onClick={() => handleDownload("forge", "1.0.0-1.21.4")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Latest (1.21.4)
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 border-primary text-primary"
                    onClick={() => setShowAllVersions({ ...showAllVersions, forge: !showAllVersions.forge })}
                  >
                    <ChevronDown
                      className={`mr-2 h-4 w-4 transition-transform duration-200 ${showAllVersions.forge ? "rotate-180" : ""}`}
                    />
                    {showAllVersions.forge ? "Hide Versions" : "Show All Versions"}
                  </Button>
                </div>

                {showAllVersions.forge && (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="versions">
                      <AccordionTrigger>All Forge Versions</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                          {forgeVersions.map((version) => (
                            <Button
                              key={version}
                              variant="ghost"
                              className="justify-start hover:bg-primary/10 hover:text-primary"
                              onClick={() => handleDownload("forge", version)}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Forge {version}
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* NeoForge Downloads */}
          <TabsContent value="neoforge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">NeoForge</CardTitle>
                <CardDescription>V1 - Refined Obsidian for NeoForge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Button
                    className="h-auto py-3 bg-primary hover:bg-primary/80"
                    onClick={() => handleDownload("neoforge", "1.0.0-1.21.4")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Latest (1.21.4)
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-3 border-primary text-primary"
                    onClick={() => setShowAllVersions({ ...showAllVersions, neoforge: !showAllVersions.neoforge })}
                  >
                    <ChevronDown
                      className={`mr-2 h-4 w-4 transition-transform duration-200 ${showAllVersions.neoforge ? "rotate-180" : ""}`}
                    />
                    {showAllVersions.neoforge ? "Hide Versions" : "Show All Versions"}
                  </Button>
                </div>

                {showAllVersions.neoforge && (
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="versions">
                      <AccordionTrigger>All NeoForge Versions</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                          {neoforgeVersions.map((version) => (
                            <Button
                              key={version}
                              variant="ghost"
                              className="justify-start hover:bg-primary/10 hover:text-primary"
                              onClick={() => handleDownload("neoforge", version)}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              NeoForge {version}
                            </Button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Download Platforms */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Available On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://modrinth.com" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                  <Image src="/assets/icon.png" alt="Modrinth" width={64} height={64} className="mb-4" />
                  <h3 className="text-xl font-bold">Modrinth</h3>
                  <p className="text-muted-foreground text-center mt-2">
                    Download from the open-source modding platform
                  </p>
                </CardContent>
              </Card>
            </a>
            <a href="https://curseforge.com" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                  <Package className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-bold">CurseForge</h3>
                  <p className="text-muted-foreground text-center mt-2">Download from CurseForge mod repository</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-6 theme-transition mt-12">
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
          <p className="text-center text-sm text-muted-foreground md:text-left">Made by Hyrx With 💖</p>
          <div className="flex gap-4">
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
