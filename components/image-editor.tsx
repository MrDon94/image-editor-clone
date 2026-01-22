"use client"

import React, { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Sparkles, ArrowRight, ChevronDown } from "lucide-react"

const aspectRatios = ["1:1", "4:3", "3:4", "16:9", "9:16"]
const models = ["Nano Banana", "Banana Pro", "Banana Ultra"]

export function ImageEditor() {
  const [prompt, setPrompt] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [selectedRatio, setSelectedRatio] = useState("1:1")
  const [selectedModel, setSelectedModel] = useState("Nano Banana")

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileSelect = (_e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <section id="editor" className="relative pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-border text-sm hover:bg-primary/5 transition-colors"
          >
            <span className="text-primary font-medium">NEW</span>
            <span className="text-white/70">Nano Banana Pro is now live</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </a>
        </div>

        <div className="glass-card border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg">🍌</span>
              </div>
              <h1 className="text-lg font-semibold text-white">AI Image Generator</h1>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="px-3 py-1.5 rounded-md border border-white/20 text-white/70 bg-transparent hover:text-white"
            >
              <Sparkles className="w-4 h-4" />
              Pro Mode
            </Button>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Image Description</label>
              <Textarea
                placeholder="A cute golden retriever playing fetch in a sunny park with autumn leaves..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px] resize-none rounded-lg bg-[#1C1C24] border border-white/10 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Reference Image (Optional)</label>
              <div
                className={`upload-zone rounded-xl p-4 ${
                  isDragging
                    ? "border-primary bg-primary/10"
                    : ""
                }`}
                onDragOver={(e) => {
                  e.preventDefault()
                  setIsDragging(true)
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <label className="flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C24] flex items-center justify-center">
                    <Upload className="w-5 h-5 text-white/40" />
                  </div>
                  <div>
                    <span className="text-sm text-white">Drop image here or click to upload</span>
                    <p className="text-xs text-white/40 mt-0.5">PNG, JPG up to 10MB</p>
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Ratio:</span>
                <div className="flex gap-1">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setSelectedRatio(ratio)}
                      className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                        selectedRatio === ratio
                          ? "bg-primary text-[#0A0A0F] font-medium"
                          : "bg-[#1C1C24] text-white/70 hover:text-white"
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-white/70">Model:</span>
                <div className="relative">
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="appearance-none bg-[#1C1C24] border border-white/10 rounded-md px-3 py-1.5 pr-8 text-xs text-white cursor-pointer focus:outline-none focus:border-primary/50"
                  >
                    {models.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-white/40 pointer-events-none" />
                </div>
              </div>

              <Button className="ml-auto btn-primary px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Generate Image
              </Button>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm text-white/70">Need advanced image editing features?</span>
              <a href="#" className="text-sm text-primary flex items-center gap-1 hover:underline">
                Visit Full Editor
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
