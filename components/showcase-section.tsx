import { Button } from "@/components/ui/button"
import Image from "next/image"
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
        <div className="text-center mb-14">
          <span className="section-badge">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lightning-Fast AI Creations
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            See what Nano Banana generates in milliseconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {showcaseItems.map((item) => (
            <div
              key={item.title} 
              className="glass-card border border-white/10 rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-[rgba(20,20,25,0.9)] backdrop-blur-sm text-xs text-white flex items-center gap-1">
                  <Zap className="w-3 h-3 text-primary" />
                  {item.speed}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">
            Experience the power of Nano Banana yourself
          </p>
          <Button asChild size="lg" className="btn-primary px-6 py-3 rounded-lg text-sm">
            <a href="#editor" className="inline-flex items-center gap-2">
              <span>🍌</span>
              Try Nano Banana Generator
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
