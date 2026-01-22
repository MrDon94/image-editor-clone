import React from "react"
export function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm">&#127820;</span>
            </div>
            <span className="text-sm text-muted-foreground">
              2025 Banana Editor. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <FooterLink href="#">Quick Start</FooterLink>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">API Docs</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </a>
  )
}
