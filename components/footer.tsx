import React from "react"
export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm">🍌</span>
            </div>
            <span className="text-sm text-white/70">
              © 2026 Nano Banana. All rights reserved.
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/40">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Refund Policy</FooterLink>
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
      className="hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}
