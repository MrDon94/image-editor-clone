import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    handle: "@sarahcreates",
    content: "Banana Editor has completely transformed my workflow. The character consistency is unmatched - I can create series with the same characters effortlessly!",
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
    content: "We've tried every AI tool out there. Banana Editor stands out for commercial work - the quality is consistently professional.",
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
    content: "Product photography costs dropped 80% since we started using Banana Editor. The results look professional and our conversion rates improved.",
    avatar: "LW",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            User Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices from Creators
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of satisfied creators who have transformed their workflow
          </p>
        </div>

        {/* Testimonials grid - 3x2 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="pt-6">
                {/* Header with avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/20 text-primary text-sm font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-primary/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {testimonial.content}
                </p>

                {/* Handle */}
                <span className="text-xs text-primary">
                  {testimonial.handle}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
