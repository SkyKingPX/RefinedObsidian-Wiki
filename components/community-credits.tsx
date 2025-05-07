import { Code, Users } from "lucide-react"
import {LINKS} from "@/app/links";

export function CommunityCredits() {
  return (
    <div className="credits-badge rounded-lg p-4 flex flex-col items-center text-center space-y-2">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-1">
        <Users className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-sm font-medium">This mod is made by</h3>
        <a href={LINKS.github_org} target="_blank" rel="noopener noreferrer" className="text-primary">
      <p className="text-xs font-semibold text-primary">EmberForge Development</p>
        </a>
      <div className="text-xs text-muted-foreground">
        Special Thanks to
        <div className="flex flex-wrap justify-center gap-2 mt-1">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
            <Code className="h-3 w-3 mr-1" />
            <a href="https://github.com/Hyrrx" target="_blank" rel="noopener noreferrer">
            Hyrx
            </a>
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
            <Code className="h-3 w-3 mr-1" />
            <a href="https://github.com/SkyKingPX" target="_blank" rel="noopener noreferrer">
            SkyKing_PX
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
