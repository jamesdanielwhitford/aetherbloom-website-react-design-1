// File: components/Hero/Hero.js

import { useState, useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef(null)

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

  return (
    <section ref={sectionRef} className={styles.heroContainer}>
      <div className={`${styles.heroContent} section-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {/* Empty content - just for video background */}
      </div>
    </section>
  )
}