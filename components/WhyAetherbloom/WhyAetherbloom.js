// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useState, useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} id="why-aetherbloom" className={`${styles.whySection} snap-section`}>
      <div className={`${styles.whyContainer} section-content ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {/* Content removed - keeping just the structure for smooth scrolling */}
      </div>
    </section>
  )
}