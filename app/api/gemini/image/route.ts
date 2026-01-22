import { NextResponse } from "next/server"

export const runtime = "nodejs"

type GenerateImageResponse = {
  images: Array<{ mimeType: string; data: string }>
  text?: string
}

function badRequest(message: string, details?: unknown) {
  return NextResponse.json(
    { error: message, details: details ?? null },
    { status: 400 },
  )
}

function serverError(message: string, details?: unknown) {
  return NextResponse.json(
    { error: message, details: details ?? null },
    { status: 500 },
  )
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) return serverError("Missing GEMINI_API_KEY in environment.")

  let form: FormData
  try {
    form = await req.formData()
  } catch (e) {
    return badRequest("Request must be multipart/form-data.", String(e))
  }

  const prompt = form.get("prompt")
  if (typeof prompt !== "string" || !prompt.trim()) {
    return badRequest("Missing prompt.")
  }

  const image = form.get("image")
  if (!(image instanceof File)) {
    return badRequest("Missing image.")
  }
  if (!image.type?.startsWith("image/")) {
    return badRequest("Invalid image type.")
  }
  if (image.size > 10 * 1024 * 1024) {
    return badRequest("Image too large (max 10MB).")
  }

  const imageBytes = Buffer.from(await image.arrayBuffer())
  const imageBase64 = imageBytes.toString("base64")

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${encodeURIComponent(
    apiKey,
  )}`

  const body = {
    contents: [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: image.type || "image/png",
              data: imageBase64,
            },
          },
        ],
      },
    ],
  }

  let geminiResponse: Response
  try {
    geminiResponse = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  } catch (e) {
    return serverError("Failed to reach Gemini API.", String(e))
  }

  let payload: any
  try {
    payload = await geminiResponse.json()
  } catch (e) {
    return serverError("Gemini API returned non-JSON response.", String(e))
  }

  if (!geminiResponse.ok) {
    const message =
      payload?.error?.message ||
      payload?.message ||
      `Gemini API error (${geminiResponse.status}).`
    return NextResponse.json({ error: message, details: payload }, { status: 502 })
  }

  const parts: any[] = payload?.candidates?.[0]?.content?.parts ?? []
  const images: GenerateImageResponse["images"] = []
  let text: string | undefined

  for (const part of parts) {
    if (typeof part?.text === "string" && part.text.trim()) text = part.text
    const inline = part?.inlineData
    if (inline?.data && inline?.mimeType) {
      images.push({ mimeType: inline.mimeType, data: inline.data })
    }
  }

  if (images.length === 0) {
    return NextResponse.json(
      { error: "No image returned from Gemini API.", details: payload },
      { status: 502 },
    )
  }

  return NextResponse.json({ images, text } satisfies GenerateImageResponse)
}
