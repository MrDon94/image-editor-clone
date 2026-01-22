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
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-badge">Core Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Nano Banana?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Combining cutting-edge AI with intuitive controls for seamless image creation and editing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title} 
              className="glass-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
