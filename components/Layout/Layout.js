// File: components/Layout/Layout.js

import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  const [videoOpacity, setVideoOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Calculate opacity based on scroll position within the first viewport
      if (scrollPosition <= windowHeight * 0.3) {
        setVideoOpacity(1)
      } else if (scrollPosition <= windowHeight * 0.8) {
        // Fade out gradually as we scroll through the hero section
        const fadeProgress = (scrollPosition - windowHeight * 0.3) / (windowHeight * 0.5)
        setVideoOpacity(Math.max(0, 1 - fadeProgress))
      } else {
        setVideoOpacity(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className={styles.fixedVideoContainer} style={{ opacity: videoOpacity }}>
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
        <div className={styles.fixedVideoOverlay}></div>
      </div>
      
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}