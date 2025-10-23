import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const wallpapersDir = path.join(process.cwd(), "public", "wallpapers")

    // Check if directory exists
    if (!fs.existsSync(wallpapersDir)) {
      return NextResponse.json({ wallpapers: [] })
    }

    // Read all files in the directory
    const files = fs.readdirSync(wallpapersDir)

    // Filter for video files only
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"]
    const videos = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase()
        return videoExtensions.includes(ext)
      })
      .map((file) => `/wallpapers/${file}`)

    return NextResponse.json({ wallpapers: videos })
  } catch (error) {
    console.error("Error reading wallpapers directory:", error)
    return NextResponse.json({ wallpapers: [] })
  }
}
