// File: components/Hero/Hero.js

import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const sectionRef = useRef(null)

  const animatedTexts = ['Transformed', 'Empowered', 'in Full Bloom']

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
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

  // Text animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % animatedTexts.length
      )
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [animatedTexts.length])

  return (
    <section ref={sectionRef} className={styles.heroContainer}>
      <div className={`${styles.heroContent} section-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Your Business</span>
            <span className={styles.titleLineAnimated}>
              <span 
                key={currentTextIndex}
                className={styles.animatedText}
              >
                {animatedTexts[currentTextIndex]}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}