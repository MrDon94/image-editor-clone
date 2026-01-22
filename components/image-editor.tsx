"use client"

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Sparkles, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

const aspectRatios = ["1:1", "4:3", "3:4", "16:9", "9:16"]
const models = ["Nano Banana", "Banana Pro", "Banana Ultra"]

type OutputImage = { src: string; mimeType: string }

export function ImageEditor() {
  const [prompt, setPrompt] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [selectedRatio, setSelectedRatio] = useState("1:1")
  const [selectedModel, setSelectedModel] = useState("Nano Banana")
  const [inputImage, setInputImage] = useState<File | null>(null)
  const [inputImagePreviewUrl, setInputImagePreviewUrl] = useState<string | null>(null)
  const [outputImages, setOutputImages] = useState<OutputImage[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const resolvedPrompt = useMemo(() => {
    const p = prompt.trim()
    if (!p) return ""
    return `${p}\n\nAspect ratio: ${selectedRatio}\nModel: ${selectedModel}`
  }, [prompt, selectedRatio, selectedModel])

  useEffect(() => {
    return () => {
      if (inputImagePreviewUrl) URL.revokeObjectURL(inputImagePreviewUrl)
    }
  }, [inputImagePreviewUrl])

  const setSelectedImage = useCallback((file: File | null) => {
    setError(null)
    setOutputImages([])

    if (!file) {
      if (inputImagePreviewUrl) URL.revokeObjectURL(inputImagePreviewUrl)
      setInputImage(null)
      setInputImagePreviewUrl(null)
      return
    }

    if (!file.type?.startsWith("image/")) {
      setError("仅支持图片文件（PNG/JPG/WebP）。")
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("图片过大，最大支持 10MB。")
      return
    }

    if (inputImagePreviewUrl) URL.revokeObjectURL(inputImagePreviewUrl)
    setInputImage(file)
    setInputImagePreviewUrl(URL.createObjectURL(file))
  }, [inputImagePreviewUrl])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0] ?? null
    setSelectedImage(file)
  }, [setSelectedImage])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setSelectedImage(file)
    e.target.value = ""
  }

  const handleGenerate = async () => {
    setError(null)
    setOutputImages([])

    if (!inputImage) {
      setError("请先点击 Add Image 上传一张图片。")
      return
    }
    if (!prompt.trim()) {
      setError("请在 Main Prompt 中输入提示词。")
      return
    }

    setIsGenerating(true)
    try {
      const form = new FormData()
      form.append("prompt", resolvedPrompt)
      form.append("image", inputImage)

      const res = await fetch("/api/gemini/image", { method: "POST", body: form })
      const json = await res.json()
      if (!res.ok) {
        setError(json?.error || "生成失败，请稍后重试。")
        return
      }

      const images = Array.isArray(json?.images) ? json.images : []
      const parsed: OutputImage[] = images
        .filter((img: any) => typeof img?.data === "string" && typeof img?.mimeType === "string")
        .map((img: any) => ({
          mimeType: img.mimeType,
          src: `data:${img.mimeType};base64,${img.data}`,
        }))

      if (parsed.length === 0) {
        setError("未获取到生成图片，请调整提示词后重试。")
        return
      }

      setOutputImages(parsed)
    } catch (e) {
      setError(typeof e === "string" ? e : "生成失败，请稍后重试。")
    } finally {
      setIsGenerating(false)
    }
  }

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
              <label className="text-sm text-white/70">Main Prompt</label>
              <Textarea
                placeholder="A cute golden retriever playing fetch in a sunny park with autumn leaves..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px] resize-none rounded-lg bg-[#1C1C24] border border-white/10 text-white placeholder:text-white/40 focus-visible:ring-0 focus-visible:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">Input Image</label>
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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#1C1C24] flex items-center justify-center">
                    <Upload className="w-5 h-5 text-white/40" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-white truncate">
                      {inputImage ? inputImage.name : "未选择图片"}
                    </div>
                    <p className="text-xs text-white/40 mt-0.5">PNG/JPG/WebP，最大 10MB</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {inputImage ? (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedImage(null)}
                        className="px-3 py-1.5 rounded-md border border-white/20 text-white/70 bg-transparent hover:text-white"
                      >
                        Remove
                      </Button>
                    ) : null}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-md border border-white/20 text-white/70 bg-transparent hover:text-white"
                    >
                      Add Image
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </div>
                </div>

                {inputImagePreviewUrl ? (
                  <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[#1C1C24]">
                    <Image
                      src={inputImagePreviewUrl}
                      alt="Input preview"
                      width={1024}
                      height={768}
                      unoptimized
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="w-full h-auto block"
                    />
                  </div>
                ) : null}
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

              <Button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating}
                className="ml-auto btn-primary px-4 py-2 rounded-lg text-sm flex items-center gap-2 disabled:opacity-60"
              >
                <Sparkles className="w-4 h-4" />
                {isGenerating ? "Generating..." : "Generate Now"}
              </Button>
            </div>

            {error ? (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Output Gallery</span>
                {outputImages.length ? (
                  <span className="text-xs text-white/40">{outputImages.length} image(s)</span>
                ) : null}
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0F0F15] p-4">
                {isGenerating ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-32 rounded-lg bg-white/5 animate-pulse" />
                    <div className="h-32 rounded-lg bg-white/5 animate-pulse" />
                  </div>
                ) : outputImages.length ? (
                  <div className="grid grid-cols-2 gap-3">
                    {outputImages.map((img, idx) => (
                      <div key={`${img.mimeType}-${idx}`} className="overflow-hidden rounded-lg border border-white/10 bg-[#1C1C24]">
                        <Image
                          src={img.src}
                          alt={`Output ${idx + 1}`}
                          width={1024}
                          height={768}
                          unoptimized
                          sizes="(min-width: 768px) 384px, 50vw"
                          className="w-full h-auto block"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-white/40">
                    上传图片并输入提示词后点击 Generate Now，即可在此查看生成结果。
                  </div>
                )}
              </div>
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
