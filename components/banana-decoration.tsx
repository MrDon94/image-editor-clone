"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface BananaDecorationProps {
  className?: string
}

export function BananaDecoration({ className }: BananaDecorationProps) {
  return (
    <svg
      className={cn("text-primary", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Banana body */}
      <path
        d="M75 20C60 15 35 25 20 50C10 70 15 85 30 90C45 95 70 80 85 55C95 35 90 25 75 20Z"
        fill="currentColor"
      />
      {/* Banana tip */}
      <path
        d="M20 50C15 45 12 42 8 45C5 48 8 55 15 55C18 55 20 53 20 50Z"
        fill="oklch(0.65 0.12 85)"
      />
      {/* Banana stem */}
      <path
        d="M75 20C78 18 82 16 85 18C88 20 88 24 85 26C82 28 78 25 75 20Z"
        fill="oklch(0.45 0.08 140)"
      />
      {/* Highlight */}
      <path
        d="M55 35C50 38 40 50 35 65"
        stroke="oklch(0.9 0.08 85)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

// Floating bananas on both sides of the page
export function FloatingBananas() {
  const leftBananas = [
    { top: "8%", size: "w-14 h-14", rotate: "rotate-[-25deg]", opacity: "opacity-40" },
    { top: "22%", size: "w-12 h-12", rotate: "rotate-[15deg]", opacity: "opacity-35" },
    { top: "36%", size: "w-16 h-16", rotate: "rotate-[-40deg]", opacity: "opacity-40" },
    { top: "50%", size: "w-10 h-10", rotate: "rotate-[30deg]", opacity: "opacity-30" },
    { top: "64%", size: "w-14 h-14", rotate: "rotate-[-15deg]", opacity: "opacity-35" },
    { top: "78%", size: "w-12 h-12", rotate: "rotate-[45deg]", opacity: "opacity-40" },
    { top: "92%", size: "w-10 h-10", rotate: "rotate-[-30deg]", opacity: "opacity-30" },
  ]

  const rightBananas = [
    { top: "5%", size: "w-12 h-12", rotate: "rotate-[35deg]", opacity: "opacity-35" },
    { top: "18%", size: "w-14 h-14", rotate: "rotate-[-20deg]", opacity: "opacity-40" },
    { top: "32%", size: "w-10 h-10", rotate: "rotate-[50deg]", opacity: "opacity-30" },
    { top: "46%", size: "w-16 h-16", rotate: "rotate-[-35deg]", opacity: "opacity-40" },
    { top: "60%", size: "w-12 h-12", rotate: "rotate-[25deg]", opacity: "opacity-35" },
    { top: "74%", size: "w-14 h-14", rotate: "rotate-[-45deg]", opacity: "opacity-40" },
    { top: "88%", size: "w-10 h-10", rotate: "rotate-[15deg]", opacity: "opacity-30" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left side bananas */}
      {leftBananas.map((banana, i) => (
        <BananaDecoration
          key={`left-${i}`}
          className={cn(
            "absolute left-4 md:left-8",
            banana.size,
            banana.rotate,
            banana.opacity
          )}
          style={{ top: banana.top }}
        />
      ))}

      {/* Right side bananas */}
      {rightBananas.map((banana, i) => (
        <BananaDecoration
          key={`right-${i}`}
          className={cn(
            "absolute right-4 md:right-8",
            banana.size,
            banana.rotate,
            banana.opacity
          )}
          style={{ top: banana.top }}
        />
      ))}
    </div>
  )
}

// Add style prop support
declare module "react" {
  interface HTMLAttributes<T> {
    style?: React.CSSProperties
  }
}
