"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

const showcaseItems = [
  {
    title: "Product Photography",
    description: "Professional commercial shots with AI-enhanced lighting and composition",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    speed: "0.8s"
  },
  {
    title: "Phoenix Rising",
    description: "Mythical creature generation with cinematic quality and detail",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop",
    speed: "1.2s"
  },
  {
    title: "AI Digital Art",
    description: "Transform concepts into stunning digital artwork with consistent style",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600&h=400&fit=crop",
    speed: "0.9s"
  },
  {
    title: "Landscape Generation",
    description: "Create breathtaking natural scenery from simple descriptions",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    speed: "1.1s"
  }
]

export function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lightning-Fast AI Creations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See what Banana Editor generates in milliseconds
          </p>
        </div>

        {/* Showcase grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {showcaseItems.map((item) => (
            <Card 
              key={item.title} 
              className="bg-card border-border overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 right-3 bg-card/90 text-foreground backdrop-blur-sm gap-1">
                    <Zap className="w-3 h-3 text-primary" />
                    {item.speed}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Experience the power of Banana Editor yourself
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            onClick={() => document.getElementById("editor")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>&#127820;</span>
            Try Banana Generator
          </Button>
        </div>
      </div>
    </section>
  )
}
