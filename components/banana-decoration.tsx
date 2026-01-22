"use client"

import React from "react"

export function FloatingBananas() {
  const bananas: Array<{
    top: string
    left?: string
    right?: string
    animationDelay: string
  }> = [
    { top: "10%", left: "5%", animationDelay: "0s" },
    { top: "30%", right: "8%", animationDelay: "2s" },
    { top: "60%", left: "3%", animationDelay: "4s" },
    { top: "80%", right: "5%", animationDelay: "1s" },
  ]

  return (
    <>
      {bananas.map((banana) => (
        <div
          key={`${banana.top}-${banana.left ?? ""}-${banana.right ?? ""}`}
          className="fixed pointer-events-none opacity-[0.15] text-5xl z-0 select-none animate-[float_6s_ease-in-out_infinite]"
          style={{
            top: banana.top,
            left: banana.left,
            right: banana.right,
            animationDelay: banana.animationDelay,
          }}
        >
          🍌
        </div>
      ))}
    </>
  )
}
