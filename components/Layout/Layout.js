// File: components/Layout/Layout.js

import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  const [currentSection, setCurrentSection] = useState('hero')

  // Map section IDs to CSS class names
  const sectionToClass = {
    'hero': 'hero',
    'why-aetherbloom': 'whyAetherbloom',
    'services': 'services',
    'pricing': 'pricing',
    'contact': 'contact'
  }

  useEffect(() => {
    let ticking = false
    let lastSection = 'hero'
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['hero', 'why-aetherbloom', 'services', 'pricing', 'contact']
          const scrollPosition = window.scrollY + window.innerHeight / 3
          let newSection = lastSection

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId)
            if (element) {
              const { offsetTop, offsetHeight } = element
              // Add buffer zone to prevent rapid switching
              const buffer = 50
              if (scrollPosition >= offsetTop - buffer && scrollPosition < offsetTop + offsetHeight + buffer) {
                newSection = sectionId
                break
              }
            }
          }

          // Only update if section actually changed and add small delay
          if (newSection !== lastSection) {
            setTimeout(() => {
              setCurrentSection(newSection)
              lastSection = newSection
            }, 50)
          }
          
          ticking = false
        })
        ticking = true
      }
    }

    // Throttle scroll events more aggressively
    let timeoutId
    const throttledScroll = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 16) // ~60fps
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  const currentCssClass = sectionToClass[currentSection] || 'hero'

  return (
    <div className={styles.layout}>
      {/* Global Animated Background */}
      <div className={`${styles.globalBackground} ${styles[currentCssClass]}`}>
        <div className={styles.petalsContainer}>
          <div className={`${styles.petal} ${styles.petal1}`}></div>
          <div className={`${styles.petal} ${styles.petal2}`}></div>
          <div className={`${styles.petal} ${styles.petal3}`}></div>
          <div className={`${styles.petal} ${styles.petal4}`}></div>
        </div>
      </div>

      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}