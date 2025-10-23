"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const playbackRate = 0.4

  // Fetch available wallpapers and select one randomly
  useEffect(() => {
    const loadWallpapers = async () => {
      try {
        const response = await fetch("/api/wallpapers")
        const data = await response.json()
        const wallpapers = data.wallpapers || []

        if (wallpapers.length > 0) {
          const randomIndex = Math.floor(Math.random() * wallpapers.length)
          setSelectedVideo(wallpapers[randomIndex])
        }
      } catch (error) {
        console.error("Error loading wallpapers:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadWallpapers()
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }, [selectedVideo])

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate
    }
  }

  // Don't render video until loaded
  if (isLoading || !selectedVideo) {
    return (
      <div className='fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800' />
    )
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      key={selectedVideo}
      className='fixed top-0 left-0 w-full h-full object-cover -z-10'
      onLoadedMetadata={handleVideoLoad}
      onCanPlay={handleVideoLoad}
      onPlay={handleVideoLoad}
    >
      <source src={selectedVideo} type='video/mp4' />
    </video>
  )
}
