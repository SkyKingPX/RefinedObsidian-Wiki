import Image from "next/image"
import {Button} from "@/components/ui/button"
import {useTheme} from "next-themes"

export function Footer() {
    const {theme} = useTheme()

    return (
        <footer className="border-t border-border/40 bg-background py-6 theme-transition mt-12">
            <div className="container flex flex-col items-center gap-2 md:flex-row md:justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/assets/icon.png" alt="RefinedObsidian Icon" width={20} height={20}
                           className="animate-pulse-glow"/>
                    <span className="text-lg font-semibold text-primary">RefinedObsidian</span>
                </div>
                <p className="text-sm text-muted-foreground text-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    © 2025 EmberForge Development | All Rights Reserved
                </p>
                <div className="flex gap-2">
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
    )
}