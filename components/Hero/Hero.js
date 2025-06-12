// File: components/Hero/Hero.js

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(1)

  const textSequence = [
    "Transformed.",
    "Empowered.", 
    "in Full Bloom."
  ]

  // Text animation effect
  useEffect(() => {
    if (currentTextIndex < textSequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1)
      }, 2000) // Change every 2 seconds
      
      return () => clearTimeout(timer)
    }
  }, [currentTextIndex, textSequence.length])

  // Scroll effect for video fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const fadeStart = windowHeight * 0.3 // Start fading at 30% scroll
      const fadeEnd = windowHeight * 0.8   // Complete fade at 80% scroll
      
      if (scrollTop <= fadeStart) {
        setVideoOpacity(1)
      } else if (scrollTop >= fadeEnd) {
        setVideoOpacity(0)
      } else {
        // Calculate opacity between fadeStart and fadeEnd
        const fadeProgress = (scrollTop - fadeStart) / (fadeEnd - fadeStart)
        setVideoOpacity(1 - fadeProgress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.heroContainer}>
      {/* Video Background */}
      <div 
        className={styles.videoBackground}
        style={{ opacity: videoOpacity }}
      >
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className={styles.videoFallback}></div>
        </video>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Your Business</span>
            <span className={styles.titleLine2} key={currentTextIndex}>
              {textSequence[currentTextIndex]}
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}