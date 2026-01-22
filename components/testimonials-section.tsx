import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    handle: "@sarahcreates",
    content: "Nano Banana has completely transformed my workflow. The character consistency is unmatched - I can create series with the same characters effortlessly!",
    avatar: "SC",
    rating: 5
  },
  {
    name: "Marcus Rivera",
    role: "Digital Artist",
    handle: "@marcusart",
    content: "The speed is incredible. What used to take hours now takes seconds. The AI understands exactly what I want from my prompts.",
    avatar: "MR",
    rating: 5
  },
  {
    name: "AI Studio Team",
    role: "Creative Agency",
    handle: "@aistudio",
    content: "We've tried every AI tool out there. Nano Banana stands out for commercial work - the quality is consistently professional.",
    avatar: "AS",
    rating: 5
  },
  {
    name: "Emily Foster",
    role: "Marketing Lead",
    handle: "@emfoster",
    content: "Perfect for our social media campaigns. We create hundreds of on-brand images weekly with consistent style and quality.",
    avatar: "EF",
    rating: 5
  },
  {
    name: "Jake Thompson",
    role: "Indie Game Dev",
    handle: "@jakegames",
    content: "The multi-image context feature is a game-changer for creating consistent game assets. Highly recommend for any creative project.",
    avatar: "JT",
    rating: 5
  },
  {
    name: "Lisa Wong",
    role: "E-commerce Owner",
    handle: "@lisashop",
    content: "Product photography costs dropped 80% since we started using Nano Banana. The results look professional and our conversion rates improved.",
    avatar: "LW",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-badge">User Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Voices from Creators
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Join thousands of satisfied creators who have transformed their workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card border border-white/10 testimonial-card rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white">{testimonial.name}</h4>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-primary/30" />
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-3">{testimonial.content}</p>
              <span className="text-xs text-primary">{testimonial.handle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
