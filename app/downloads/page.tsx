"use client"

import {useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {Download, Menu, ExternalLink, Info, Check} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ThemeToggle} from "@/components/theme-toggle"
import {Badge} from "@/components/ui/badge"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {useTheme} from "next-themes"
import {useToast} from "@/hooks/use-toast"
import {LINKS} from "@/app/links";

// Define version data with more metadata
const versions = {
    Fabric: [
        {
            version: "1.0.0-1.21.1",
            mcVersion: "1.21.1",
            date: "2025-04-15",
            isLatest: true,
            downloadUrl: "https://cdn.modrinth.com/data/FSsFIek4/versions/nqfE7zF9/Record-1.21-1.1.1.jar"
        },
        {
            version: "1.0.0-1.20.4",
            mcVersion: "1.20.4",
            date: "2025-03-10",
            isLatest: false,
            downloadUrl: "https://example.com/fabric-1.0.0-1.20.4.jar"
        },
        {
            version: "1.0.0-1.20.1",
            mcVersion: "1.20.1",
            date: "2025-02-05",
            isLatest: false,
            downloadUrl: "https://example.com/fabric-1.0.0-1.20.1.jar"
        },
    ],
    Forge: [
        {
            version: "1.0.0-1.21.1",
            mcVersion: "1.21.1",
            date: "2025-04-10",
            isLatest: true,
            downloadUrl: "https://example.com/forge-1.0.0-1.21.1.jar"
        },
        {
            version: "1.0.0-1.20.4",
            mcVersion: "1.20.4",
            date: "2025-03-05",
            isLatest: false,
            downloadUrl: "https://example.com/forge-1.0.0-1.20.4.jar"
        },
        {
            version: "1.0.0-1.20.1",
            mcVersion: "1.20.1",
            date: "2025-02-01",
            isLatest: false,
            downloadUrl: "https://example.com/forge-1.0.0-1.20.1.jar"
        },
    ],
    NeoForge: [
        {
            version: "1.0.0-1.21.1",
            mcVersion: "1.21.1",
            date: "2025-04-05",
            isLatest: true,
            downloadUrl: "https://example.com/neoforge-1.0.0-1.21.1.jar"
        },
        {
            version: "1.0.0-1.20.4",
            mcVersion: "1.20.4",
            date: "2025-03-01",
            isLatest: false,
            downloadUrl: "https://example.com/neoforge-1.0.0-1.20.4.jar"
        },
    ],
}

export default function DownloadsPage() {
    const [showAllVersions, setShowAllVersions] = useState({
        Fabric: false,
        Forge: false,
        NeoForge: false,
    })
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("Fabric")
    const {theme} = useTheme()
    const {toast} = useToast()

    const handleDownload = (loader: string, version: string, mcVersion: string, downloadUrl: string) => {
        toast({
            title: "Download Started",
            description: `Downloading RefinedObsidian ${version} for ${loader} (MC ${mcVersion})`,
            duration: 3000,
        })

        window.location.href = downloadUrl
    }

    const getLatestVersion = (loader: string) => {
        return (
            versions[loader as keyof typeof versions].find((v) => v.isLatest) || versions[loader as keyof typeof versions][0]
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <header
                className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur theme-transition">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image src="/assets/icon.png" alt="RefinedObsidian Icon" width={24} height={24}
                               className="animate-pulse-glow"/>
                        <span className="text-xl font-bold text-primary">RefinedObsidian</span>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium hover-lift relative group">
                            Wiki
                            <span
                                className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                        </Link>
                        <Link href="/downloads" className="text-sm font-medium hover-lift relative group">
                            Downloads
                            <span
                                className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-100 transition-transform"></span>
                        </Link>
                        <ThemeToggle/>
                    </div>
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle/>
                        <Button variant="ghost" size="icon" className="hover:bg-secondary transition-colors">
                            <Menu className="h-5 w-5"/>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="container py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary">Download RefinedObsidian</h1>
                    <p className="text-xl text-muted-foreground max-wxl mx-auto">Choose your preferred platform and
                        download the latest version</p>
                </div>

                {/* Quick Download Section */}
                <div className="max-w-4xl mx-auto mb-16 p-6 rounded-xl border border-border bg-secondary/30">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Quick Download</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.keys(versions).map((loader) => {
                            const latest = getLatestVersion(loader)
                            return (
                                <Card key={loader} className="bg-background">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg">{loader}</CardTitle>
                                        <CardDescription>MC {latest.mcVersion}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pb-2">
                                        <Button
                                            className="w-full bg-primary hover:bg-primary/90"
                                            onClick={() => handleDownload(loader, latest.version, latest.mcVersion, latest.downloadUrl)}
                                        >
                                            <Download className="mr-2 h-4 w-4"/>
                                            Download Latest
                                        </Button>
                                    </CardContent>
                                    <CardFooter
                                        className="text-xs text-muted-foreground">Released: {latest.date}</CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>

                {/* Platform Tabs with Extended Background */}
                <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-border bg-secondary/30">
                    <Tabs defaultValue="Fabric" value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid grid-cols-3 w-full p-1 gap-1 bg-secondary/30 rounded-none">
                            <TabsTrigger value="Fabric"
                                         className="text-lg py-3 rounded-md data-[state=active]:text-primary data-[state=inactive]:text-secondary/-30 data-[state=inactive]:hover:text-accent bg-secondary/30">Fabric</TabsTrigger>
                            <TabsTrigger value="Forge"
                                         className="text-lg py-3 rounded-md data-[state=active]:text-primary data-[state=inactive]:text-secondary/-30 data-[state=inactive]:hover:text-accent bg-secondary/30">Forge</TabsTrigger>
                            <TabsTrigger value="NeoForge"
                                         className="text-lg py-3 rounded-md data-[state=active]:text-primary data-[state=inactive]:text-secondary/-30 data-[state=inactive]:hover:text-accent bg-secondary/30">NeoForge</TabsTrigger>
                        </TabsList>

                        <div className="mx-auto bg-secondary/30 p-6">
                            {Object.entries(versions).map(([loader, loaderVersions]) => (
                                <TabsContent key={loader} value={loader} className="space-y-6 mt-0">
                                    <Card
                                        className="data-[state=active]:bg-zinc-800 border border-border bg-background">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <CardTitle className="text-2xl -mt-1">
                                                        {loader}
                                                        <Badge variant="outline"
                                                               className="ml-2 text-xs">{loaderVersions.length} versions</Badge>
                                                    </CardTitle>
                                                    <CardDescription>RefinedObsidian for {loader}</CardDescription>
                                                </div>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button variant="ghost" size="icon"><Info
                                                                className="h-5 w-5"/><span className="sr-only">Installation Info</span></Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent side="left" className="max-w-[300px]">
                                                            <p>Download the JAR file and place it in your Minecraft mods
                                                                folder.</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div
                                                className="divide-y divide-border border bg-secondary/20 rounded-lg overflow-hidden">
                                                {/* Table Header */}
                                                <div className="grid grid-cols-12 gap-4 px-4 py-3 font-medium text-sm">
                                                    <div className="col-span-3 truncate">Mod Version</div>
                                                    <div className="col-span-3 truncate">Minecraft Version</div>
                                                    <div className="col-span-3 hidden sm:block truncate">Release Date
                                                    </div>
                                                    <div className="col-span-3 sm:col-span-3 text-right">Download</div>
                                                </div>

                                                {/* Table Body */}
                                                <div className="divide-y divide-border bg-secondary/50">
                                                    {loaderVersions.map((version) => (
                                                        <div key={version.version}
                                                             className="grid grid-cols-12 gap-4 px-4 py-3.5 items-center hover:bg-secondary transition-colors">
                                                            <div className="col-span-3 flex items-center">
                                                                <span className="truncate">{version.version}</span>
                                                            </div>
                                                            <div className="col-span-3">{version.mcVersion}</div>
                                                            <div
                                                                className="col-span-3 text-muted-foreground hidden sm:block">{version.date}</div>
                                                            <div className="col-span-3 sm:col-span-3 flex justify-end">
                                                                <Button size="sm"
                                                                        onClick={() => handleDownload(loader, version.version, version.mcVersion, version.downloadUrl)}>
                                                                    <Download className="h-4 w-4"/>
                                                                    <span
                                                                        className="sr-only sm:not-sr-only sm:ml-2">Download</span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Table Footer */}
                                                <div className="grid grid-cols-12 gap-4 px-4 py-3 text-sm">
                                                    <div
                                                        className="col-span-6 text-muted-foreground">{loaderVersions.length} version{loaderVersions.length !== 1 ? "s" : ""} available
                                                    </div>
                                                    <div className="col-span-6 text-right text-muted-foreground">Last
                                                        updated: {new Date().toLocaleDateString()}</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </div>

                {/* Download Platforms */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-primary">Available On</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card
                            className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full group">
                            <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                                <div className="relative mb-4">
                                    <Image src="/assets/modrinth.png" alt="Modrinth" width={64} height={64}
                                           className="transition-transform group-hover:scale-110"/>
                                    <div className="absolute -bottom-2 -right-2">
                                        <Badge variant="secondary" className="text-xs"><Check
                                            className="h-3 w-3 mr-1"/> Official</Badge>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">Modrinth</h3>
                                <p className="text-muted-foreground text-center mt-2 mb-4">Download from our official
                                    Modrinth page</p>
                                <a href={LINKS.modrinth_project} target="_blank" rel="noopener noreferrer"
                                   className="block">
                                    <Button variant="outline" size="sm"
                                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        Visit Modrinth <ExternalLink className="ml-2 h-3 w-3"/>
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                        <Card
                            className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 h-full group">
                            <CardContent className="flex flex-col items-center justify-center p-8 h-full">
                                <div className="relative mb-4">
                                    <Image src="/assets/curseforge.svg" alt="CurseForge" width={64} height={64}
                                           className={`transition-transform group-hover:scale-110 ${theme === 'light' ? 'invert' : ''}`}/>
                                    <div className="absolute -bottom-2 -right-2">
                                        <Badge variant="secondary" className="text-xs"><Check
                                            className="h-3 w-3 mr-1"/> Official</Badge>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">CurseForge</h3>
                                <p className="text-muted-foreground text-center mt-2 mb-4">Download from our official
                                    CurseForge page</p>
                                <a href={LINKS.curseforge_project} target="_blank" rel="noopener noreferrer"
                                   className="block">
                                    <Button variant="outline" size="sm"
                                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        Visit CurseForge <ExternalLink className="ml-2 h-3 w-3"/>
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 bg-background py-6 theme-transition mt-12">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <Image src="/assets/icon.png" alt="RefinedObsidian Icon" width={20} height={20}
                               className="animate-pulse-glow"/>
                        <span className="text-lg font-semibold text-primary">RefinedObsidian</span>
                    </div>
                    <p className="text-center text-sm text-muted-foreground md:text-left">© 2025 EmberForge Development
                        | All Rights Reserved</p>
                    <div className="flex gap-4">
                        <a href="https://github.com/EmberForge-Development" target="_blank" rel="noopener noreferrer"
                           className="block">
                            <Button variant="ghost" size="icon"
                                    className="text-muted-foreground hover:text-primary transition-colors hover-lift">
                                <Image src="/assets/github.svg" alt="GitHub" width={20} height={20}
                                       className={`${theme === 'light' ? 'invert' : ''}`}/>
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}