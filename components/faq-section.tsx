"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqCategories = [
  {
    title: "About Banana Editor",
    items: [
      {
        question: "What is Banana Editor?",
        answer: "Banana Editor is an AI-powered image generation and editing tool that uses natural language processing to transform your ideas into stunning visuals. It combines cutting-edge AI with intuitive controls for seamless creative workflows."
      },
      {
        question: "How does it compare to other AI tools like DALL-E or Gemini?",
        answer: "Banana Editor excels in character consistency, scene preservation, and one-shot editing. Unlike general-purpose AI tools, it's specifically optimized for creative workflows with features like multi-image context and professional-grade outputs."
      },
      {
        question: "What makes Banana Editor different from other AI tools?",
        answer: "Our unique selling points include exceptional character consistency across generations, lightning-fast processing (under 2 seconds), multi-image context understanding, and professional-grade commercial outputs."
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
        question: "Do I need an account to use Banana Editor?",
        answer: "You can try basic features without an account. However, signing up gives you access to higher resolution outputs, saved history, priority processing, and advanced features like batch generation."
      },
      {
        question: "How can I improve my generation results?",
        answer: "Be specific in your prompts, use reference images when possible, experiment with different models, and try our Pro Mode for advanced controls like style strength and detail level."
      }
    ]
  },
  {
    title: "Features & Tips",
    items: [
      {
        question: "What image formats are supported?",
        answer: "We support PNG, JPG, and WebP for both input reference images and output downloads. Premium users can also export in TIFF format for professional print workflows."
      },
      {
        question: "How does multi-image context work?",
        answer: "Multi-image context allows you to upload multiple reference images that the AI considers together. This is perfect for creating consistent characters, matching styles across images, or blending elements from different sources."
      },
      {
        question: "What is the character consistency feature?",
        answer: "Character consistency ensures that faces, clothing, and identifying features remain identical across multiple generations. This is essential for creating comic series, brand mascots, or AI influencer content."
      }
    ]
  },
  {
    title: "Commercial Use & API",
    items: [
      {
        question: "Can I use generated images commercially?",
        answer: "Yes! All images generated with Banana Editor are cleared for commercial use. You retain full rights to your creations, including for advertising, merchandise, and digital products."
      },
      {
        question: "Do you offer an API for developers?",
        answer: "Yes, we offer a comprehensive REST API for developers. It includes all generation features, webhooks for async processing, and dedicated support. Contact us for enterprise pricing and custom solutions."
      }
    ]
  },
  {
    title: "Technical Details",
    items: [
      {
        question: "Why are my generations sometimes different from my prompt?",
        answer: "AI models interpret prompts based on training data. For best results, be specific, use clear descriptive language, and experiment with different phrasings. Our Pro Mode offers more precise control over outputs."
      },
      {
        question: "Why does AI sometimes struggle with text in images?",
        answer: "Text rendering is challenging for AI models. Our Text Rendering feature specifically addresses this - use it when you need legible text in your images, and keep text short for best results."
      },
      {
        question: "Why do some generations have artifacts?",
        answer: "Artifacts can occur with complex prompts or certain edge cases. Try simplifying your prompt, using a different model, or regenerating. Our Ultra model has the lowest artifact rate for demanding projects."
      }
    ]
  }
]

export function FAQSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full" />
                {category.title}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {category.items.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-4 bg-card data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
