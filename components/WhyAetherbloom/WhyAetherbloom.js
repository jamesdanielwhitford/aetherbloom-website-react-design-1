// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useState, useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
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

  // Simplified mouse tracking with reduced calculations
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoveredCard !== null && cardRefs.current[hoveredCard]) {
        const card = cardRefs.current[hoveredCard]
        const cardRect = card.getBoundingClientRect()
        
        // Get mouse position relative to the card center
        const cardCenterX = cardRect.left + cardRect.width / 2
        const cardCenterY = cardRect.top + cardRect.height / 2
        
        const deltaX = e.clientX - cardCenterX
        const deltaY = e.clientY - cardCenterY
        
        // Reduced intensity for smoother interaction
        const rotateX = (deltaY / cardRect.height) * -6 // Reduced from -8 to -6
        const rotateY = (deltaX / cardRect.width) * 6   // Reduced from 8 to 6
        const translateX = (deltaX / cardRect.width) * 6 // Reduced from 8 to 6
        const translateY = (deltaY / cardRect.height) * 6 // Reduced from 8 to 6
        
        setMousePosition({
          x: Math.max(-6, Math.min(6, translateX)),
          y: Math.max(-6, Math.min(6, translateY)),
          rotateX: Math.max(-6, Math.min(6, rotateX)),
          rotateY: Math.max(-6, Math.min(6, rotateY))
        })
      }
    }

    // Use RAF for smoother animation
    let rafId
    const throttledMouseMove = (e) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e)
        rafId = null
      })
    }

    const handleMouseLeave = () => {
      setHoveredCard(null)
      setMousePosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
    }

    if (sectionRef.current) {
      const section = sectionRef.current
      section.addEventListener('mousemove', throttledMouseMove)
      section.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        section.removeEventListener('mousemove', throttledMouseMove)
        section.removeEventListener('mouseleave', handleMouseLeave)
        if (rafId) cancelAnimationFrame(rafId)
      }
    }
  }, [hoveredCard])

  // Simplified transform calculation
  const getCardTransform = (index) => {
    if (hoveredCard !== index) {
      return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)'
    }
    
    return `perspective(1000px) rotateX(${mousePosition.rotateX || 0}deg) rotateY(${mousePosition.rotateY || 0}deg) translateX(${mousePosition.x || 0}px) translateY(${mousePosition.y || 0}px) scale(1.03)`
  }

  const handleCardMouseEnter = (index) => {
    setHoveredCard(index)
  }

  const handleCardMouseLeave = () => {
    setHoveredCard(null)
    setMousePosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
  }

  // Card data with specific content and images
  const cards = [
    { 
      id: 1, 
      title: "High Quality Recruitment", 
      content: "Rigorous vetting process ensures only top-tier talent joins your team. Every candidate undergoes comprehensive skills assessment and cultural fit evaluation.",
      image: "/quality-recruitment.png"
    },
    { 
      id: 2, 
      title: "Transparent Pricing", 
      content: "No hidden costs or surprise fees. Clear, upfront pricing structure with detailed breakdown of all services and costs included in your package.",
      image: "/transparent-pricing.png"
    },
    { 
      id: 3, 
      title: "Ethical Impact", 
      content: "Supporting fair employment practices and sustainable business growth. We create meaningful career opportunities while delivering exceptional value.",
      image: "/ethical-impact.png"
    },
    { 
      id: 4, 
      title: "GDPR Compliance", 
      content: "Full adherence to UK and EU data protection regulations. Comprehensive security protocols ensure your data remains protected and compliant.",
      image: "/gdpr-compliance.png"
    }
  ]

  return (
    <section ref={sectionRef} id="why-aetherbloom" className={styles.whySection}>
      <div className={styles.whyContainer}>
        <div 
          className={`${styles.textContent} ${isVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.sectionTitle}>
            This is Aetherbloom.<br />
            How can we help you?
          </h2>
          <div className={styles.textParagraph}>
            <p>
              High-quality, ethical outsourcing<br />
              that streamline your business processes.
            </p>
          </div>
        </div>

        <div 
          className={`${styles.cardsContainer} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.cardsGrid}>
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                ref={el => cardRefs.current[index] = el}
                className={`${styles.card} ${hoveredCard === index ? styles.cardHovered : ''} ${styles[`card${index + 1}`]}`}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
                style={{
                  transform: getCardTransform(index),
                  transition: hoveredCard === index ? 'transform 0.05s ease-out' : 'transform 0.2s ease-out'
                }}
              >
                <div className={styles.cardImage}>
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className={styles.cardIcon}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardContent}>{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}