// File: components/Layout/Layout.js

import { useState, useEffect, useRef } from 'react'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  const [videoOpacity, setVideoOpacity] = useState(1)
  const mainRef = useRef(null)

  // Handle scroll-based video opacity
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return
      
      const scrollPosition = mainRef.current.scrollTop
      const windowHeight = window.innerHeight
      
      // Start fading at 40% of viewport height, complete fade by 90%
      const fadeStartPoint = windowHeight * 0.4
      const fadeEndPoint = windowHeight * 0.9
      const fadeRange = fadeEndPoint - fadeStartPoint
      
      if (scrollPosition <= fadeStartPoint) {
        setVideoOpacity(1)
      } else if (scrollPosition >= fadeEndPoint) {
        setVideoOpacity(0)
      } else {
        // Smooth fade between start and end points with easing
        const fadeProgress = (scrollPosition - fadeStartPoint) / fadeRange
        // Apply easing function for smoother transition
        const easedProgress = fadeProgress * fadeProgress
        const opacity = 1 - easedProgress
        setVideoOpacity(Math.max(0, Math.min(1, opacity)))
      }
    }

    const mainElement = mainRef.current
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll)
      return () => mainElement.removeEventListener('scroll', handleScroll)
    }
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
      
      {/* Fixed video background - controlled by scroll position */}
      <div 
        className={styles.fixedVideoContainer} 
        style={{ 
          opacity: videoOpacity,
          visibility: videoOpacity > 0 ? 'visible' : 'hidden'
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
      
      <main ref={mainRef} className={styles.main}>
        {children}
      </main>
    </div>
  )
}