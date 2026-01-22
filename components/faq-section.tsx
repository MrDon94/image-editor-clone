import { ChevronDown } from "lucide-react"

const faqCategories = [
  {
    title: "About Nano Banana",
    items: [
      {
        question: "What is Nano Banana?",
        answer: "Nano Banana is an AI-powered image generation and editing tool that uses natural language processing to transform your ideas into stunning visuals. It combines cutting-edge AI with intuitive controls for seamless creative workflows."
      },
      {
        question: "How does it compare to other AI tools?",
        answer: "Nano Banana excels in character consistency, scene preservation, and one-shot editing. Unlike general-purpose AI tools, it's specifically optimized for creative workflows with features like multi-image context and professional-grade outputs."
      }
    ]
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I get started with image generation?",
        answer: "Simply visit our editor, type a description of what you want to create, optionally upload a reference image, select your preferred aspect ratio and model, then click Generate. Your AI-created image will be ready in seconds."
      },
      {
        question: "Do I need an account to use Nano Banana?",
        answer: "You can try basic features without an account. However, signing up gives you access to higher resolution outputs, saved history, priority processing, and advanced features like batch generation."
      }
    ]
  },
  {
    title: "Commercial Use & API",
    items: [
      {
        question: "Can I use generated images commercially?",
        answer: "Yes! All images generated with Nano Banana are cleared for commercial use. You retain full rights to your creations, including for advertising, merchandise, and digital products."
      },
      {
        question: "Do you offer an API for developers?",
        answer: "Yes, we offer a comprehensive REST API for developers. It includes all generation features, webhooks for async processing, and dedicated support. Contact us for enterprise pricing and custom solutions."
      }
    ]
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-badge">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-white/40 mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.items.map((faq) => (
                  <details key={faq.question} className="faq-item glass-card border border-white/10 rounded-lg px-4">
                    <summary className="py-4 text-sm font-medium text-white flex items-center justify-between">
                      {faq.question}
                      <ChevronDown className="w-4 h-4 text-white/40 transition-transform" />
                    </summary>
                    <p className="text-sm text-white/70 pb-4 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
