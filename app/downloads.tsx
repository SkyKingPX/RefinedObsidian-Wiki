"use client"
import { Diamond, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";

export default function DownloadsPage() {
  return (
    <div className="min-h-screen py-12 theme-transition">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">Download RefinedObsidian</h1>
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
                <CardTitle className="text-primary text-2xl">Fabric 1.20.1</CardTitle>
                <CardDescription>Latest version: 1.0.0 (Released May 4, 2025)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-auto py-3 bg-primary hover:bg-primary/80">Download Latest</Button>
                  <Button variant="outline" className="h-auto py-3 border-primary text-primary">
                    View All Versions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forge Downloads */}
          <TabsContent value="forge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Forge 1.21.4</CardTitle>
                <CardDescription>Latest version: 1.0.0 (Released May 4, 2025)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-auto py-3 bg-primary hover:bg-primary/80">Download Latest</Button>
                  <Button variant="outline" className="h-auto py-3 border-primary text-primary">
                    View All Versions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* NeoForge Downloads */}
          <TabsContent value="neoforge" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">NeoForge 1.21.1</CardTitle>
                <CardDescription>Latest version: 1.0.0 (Released May 4, 2025)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="h-auto py-3 bg-primary hover:bg-primary/80">Download Latest</Button>
                  <Button variant="outline" className="h-auto py-3 border-primary text-primary">
                    View All Versions
                  </Button>
                </div>
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
                  <Image src="/assets/modrinth.png" alt="Modrinth" width={64} height={64} className="animate-pulse-glow" />
                  <h3 className="text-xl font-bold">Modrinth</h3>
                  <p className="text-muted-foreground text-center mt-2">Download from Modrinth</p>
                </CardContent>
              </Card>
            </a>
            <a href="https://curseforge.com" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full">
                <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                  <Image src="/assets/curseforge.png" alt="CurseForge" width={64} height={64} className="animate-pulse-glow" />
                  <h3 className="text-xl font-bold">CurseForge</h3>
                  <p className="text-muted-foreground text-center mt-2">Download from CurseForge</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
