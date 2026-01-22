"use client"

import React, { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Upload, X, Sparkles, ArrowRight, ChevronDown } from "lucide-react"

const aspectRatios = ["1:1", "4:3", "3:4", "16:9", "9:16"]
const models = ["Nano Banana", "Banana Pro", "Banana Ultra"]

export function ImageEditor() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [prompt, setPrompt] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [selectedRatio, setSelectedRatio] = useState("1:1")
  const [selectedModel, setSelectedModel] = useState("Nano Banana")

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setUploadedImage(null)
  }

  return (
    <section id="editor" className="relative pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-lg">&#127820;</span>
              </div>
              <CardTitle className="text-lg font-semibold text-foreground">AI Image Generator</CardTitle>
            </div>
            <Button variant="outline" size="sm" className="bg-transparent border-border text-muted-foreground hover:text-foreground">
              <Sparkles className="w-4 h-4 mr-1" />
              Pro Mode
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Prompt Input */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Image Description</label>
              <Textarea
                placeholder="A cute golden retriever playing fetch in a sunny park with autumn leaves..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px] resize-none bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Reference Image Upload */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Reference Image (Optional)</label>
              <div
                className={`relative border-2 border-dashed rounded-xl p-4 transition-colors ${
                  isDragging
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
                onDragOver={(e) => {
                  e.preventDefault()
                  setIsDragging(true)
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                {uploadedImage ? (
                  <div className="relative flex items-center gap-4">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded reference"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">Reference image uploaded</p>
                      <p className="text-xs text-muted-foreground">Click to replace or drag a new image</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-foreground"
                      onClick={clearImage}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex items-center gap-4 cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Upload className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="text-sm text-foreground">Drop image here or click to upload</span>
                      <p className="text-xs text-muted-foreground mt-0.5">PNG, JPG up to 10MB</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Options Row */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Aspect Ratio */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ratio:</span>
                <div className="flex gap-1">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setSelectedRatio(ratio)}
                      className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                        selectedRatio === ratio
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>

              {/* Model Selector */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Model:</span>
                <div className="relative">
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="appearance-none bg-secondary border border-border rounded-md px-3 py-1.5 pr-8 text-xs text-foreground cursor-pointer"
                  >
                    {models.map((model) => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Generate Button */}
              <Button className="ml-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Sparkles className="w-4 h-4" />
                Generate Image
              </Button>
            </div>

            {/* Bottom Link */}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Need advanced image editing features?
              </span>
              <Button variant="link" className="text-primary gap-1 p-0 h-auto">
                Visit Full Editor
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
