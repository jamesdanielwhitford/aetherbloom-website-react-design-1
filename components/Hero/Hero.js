// File: components/Hero/Hero.js

import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef(null)

  const textSequence = [
    "Transformed.",
    "Empowered.", 
    "in Full Bloom."
  ]

  // Text animation effect with proper fade in/out
  useEffect(() => {
    const initialDelay = currentTextIndex === 0 ? 4000 : 4000; // Longer delay for first transition
    
    if (currentTextIndex < textSequence.length - 1) {
      const timer = setTimeout(() => {
        setIsAnimating(true)
        
        // After fade out completes, change text and fade in
        setTimeout(() => {
          setCurrentTextIndex(currentTextIndex + 1)
          setIsAnimating(false)
        }, 700) // Half second for fade out
        
      }, initialDelay) // Longer initial delay, then normal timing
      
      return () => clearTimeout(timer)
    }
  }, [currentTextIndex, textSequence.length])

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
      {/* Hero Content */}
      <div className={`${styles.heroContent} section-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Your Business</span>
            <span 
              className={`${styles.titleLine2} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}
              key={currentTextIndex}
            >
              {textSequence[currentTextIndex]}
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Scale your operations with expertly-sourced<br/>South African professionals trained to UK standards.<br/>
            Cut costs by 40%+ while scaling with confidence.
          </p>
          <div className={styles.heroActions}>
            <a href="#why-aetherbloom" className={styles.primaryButton}>
              Discover How
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}