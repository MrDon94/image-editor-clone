import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-lg">🍌</span>
          </div>
          <span className="font-bold text-lg text-white">Nano Banana</span>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink href="#editor" label="AI Image" hasDropdown />
          <NavLink href="#features" label="Features" />
          <NavLink href="#showcase" label="Showcase" />
          <NavLink href="#faq" label="FAQ" />
          <NavLink href="#" label="Pricing" />
          <NavLink href="#" label="API" />
        </nav>

        <div className="flex items-center gap-2">
          <Button size="sm" className="btn-primary px-4 py-2 rounded-lg text-sm">
            Sign In
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex px-4 py-2 rounded-lg text-sm border border-white/20 text-white bg-transparent hover:bg-white/5"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, label, hasDropdown }: { href: string; label: string; hasDropdown?: boolean }) {
  return (
    <a
      href={href}
      className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors"
    >
      {label}
      {hasDropdown && <ChevronDown className="w-3 h-3" />}
    </a>
  )
}
