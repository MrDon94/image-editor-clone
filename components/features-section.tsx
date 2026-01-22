import { Card, CardContent } from "@/components/ui/card"
import { 
  MessageSquare, 
  User, 
  Layers, 
  Type, 
  Images, 
  Wand2 
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language",
    description: "Edit images using simple text prompts. Our AI understands complex instructions like GPT for images.",
    color: "text-amber-400"
  },
  {
    icon: User,
    title: "Character Consistency",
    description: "Maintain perfect character details across edits. Excels at preserving faces and identities.",
    color: "text-rose-400"
  },
  {
    icon: Layers,
    title: "Scene Control",
    description: "Seamlessly blend edits with original backgrounds. Superior scene fusion technology.",
    color: "text-violet-400"
  },
  {
    icon: Type,
    title: "Text Rendering",
    description: "Generate clear, legible text in images. Perfect for posters, logos, and marketing materials.",
    color: "text-blue-400"
  },
  {
    icon: Images,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows.",
    color: "text-emerald-400"
  },
  {
    icon: Wand2,
    title: "Pro Outputs",
    description: "Get professional-grade outputs every time. Optimized for commercial and creative use.",
    color: "text-orange-400"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Banana Editor?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combining cutting-edge AI with intuitive controls for seamless image creation and editing.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="pt-6">
                <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
