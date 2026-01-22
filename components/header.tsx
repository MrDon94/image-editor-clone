"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, MessageCircle, User, Settings } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-lg">&#127820;</span>
          </div>
          <span className="font-bold text-lg text-foreground">Banana Editor</span>
        </div>

        {/* Navigation - visible on lg+ */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavItem label="Home" hasDropdown />
          <NavItem label="AI Editor" hasDropdown />
          <NavItem label="AI Tools" hasDropdown />
          <NavItem label="Blog" />
          <NavItem label="API" />
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground">
            <MessageCircle className="w-4 h-4" />
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Sign In
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex bg-transparent border-border text-foreground hover:bg-accent">
            Sign Up
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

function NavItem({ label, hasDropdown }: { label: string; hasDropdown?: boolean }) {
  return (
    <button className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
      {label}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </button>
  )
}
