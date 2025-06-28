// File: components/Layout/Layout.js

import { useState, useEffect, useRef } from 'react'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  const [videoOpacity, setVideoOpacity] = useState(1)
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const heroSectionRef = useRef(null)

  // Intersection Observer to detect when hero section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.className?.includes('heroContainer')) {
            setIsInHeroSection(entry.isIntersecting)
          }
        })
      },
      {
        threshold: [0, 0.1, 0.5, 0.9],
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    // Find hero section in the DOM
    const heroSection = document.querySelector('[class*="heroContainer"]')
    
    if (heroSection) {
      heroSectionRef.current = heroSection
      observer.observe(heroSection)
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current)
      }
    }
  }, [])

  // Handle scroll-based video opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      if (scrollPosition <= windowHeight * 0.7) {
        setVideoOpacity(1)
      } else {
        setVideoOpacity(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const finalVideoOpacity = isInHeroSection ? videoOpacity : 0

  return (
    <div className={styles.layout}>
      {/* Fixed animated petals container */}
      <div className="fixed-petals-container">
        <div className="fixed-petal fixed-petal1"></div>
        <div className="fixed-petal fixed-petal2"></div>
        <div className="fixed-petal fixed-petal3"></div>
        <div className="fixed-petal fixed-petal4"></div>
      </div>
      
      {/* Fixed video background - only visible on hero section */}
      <div 
        className={styles.fixedVideoContainer} 
        style={{ 
          opacity: finalVideoOpacity,
          visibility: finalVideoOpacity > 0 ? 'visible' : 'hidden'
        }}
      >
        <video
          className={styles.fixedVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <div className={styles.videoFallback}></div>
        </video>
      </div>
      
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}