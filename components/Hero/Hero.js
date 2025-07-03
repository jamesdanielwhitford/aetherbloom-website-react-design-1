// File: components/Hero/Hero.js

import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef(null)

  const animatedTexts = ['Transformed.', 'Empowered.', 'in Full Bloom.']

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
      setIsTransitioning(true)
      
      // After fade out animation completes, change text and fade in
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => 
          (prevIndex + 1) % animatedTexts.length
        )
        setIsTransitioning(false)
      }, 800) // Wait for fade out animation to complete
    }, 4000) // Change text every 4 seconds (increased to accommodate animation)

    return () => clearInterval(interval)
  }, [animatedTexts.length])

  // Split text into individual characters for animation
  const renderAnimatedText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={`${currentTextIndex}-${index}`}
        className={styles.letter}
        style={{
          '--letter-index': index,
          '--total-letters': text.length,
          '--reverse-index': text.length - 1 - index,
          animationDelay: isTransitioning 
            ? `${index * 50}ms` // Fade out from first letter
            : `${index * 50}ms` // Fade in from first letter
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section ref={sectionRef} className={styles.heroContainer}>
      <div className={`${styles.heroContent} section-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Your Business</span>
            <span className={styles.titleLineAnimated}>
              <span 
                className={`${styles.animatedText} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
              >
                {renderAnimatedText(animatedTexts[currentTextIndex])}
              </span>
            </span>
          </h1>
          
          <p className={styles.heroDescription}>
            Scale your operations with expertly-sourced South African professionals trained to UK standards. Cut costs by 40%+ while scaling with confidence.
          </p>
          
          <div className={styles.heroButtons}>
            <a href="#why-aetherbloom" className={styles.learnMoreBtn}>
              Learn More
            </a>
            <a href="#pricing" className={styles.pricingBtn}>
              See our Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}