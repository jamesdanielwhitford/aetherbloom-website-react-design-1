// File: components/Hero/Hero.js

import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef(null)

  // Intersection Observer for section visibility and animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.heroContainer} snap-section`}>
      {/* Empty hero content - just the container for background animations */}
      <div className={`${styles.heroContent} section-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {/* Content removed - keeping just the structure */}
      </div>
    </section>
  )
}