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

  // Mouse tracking for card interaction
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
        
        // Normalize the values based on card size
        const rotateX = (deltaY / cardRect.height) * -8 // Max 8 degrees
        const rotateY = (deltaX / cardRect.width) * 8   // Max 8 degrees
        const translateX = (deltaX / cardRect.width) * 8 // Max 8px movement
        const translateY = (deltaY / cardRect.height) * 8 // Max 8px movement
        
        setMousePosition({
          x: translateX,
          y: translateY,
          rotateX: Math.max(-8, Math.min(8, rotateX)),
          rotateY: Math.max(-8, Math.min(8, rotateY))
        })
      }
    }

    const handleMouseLeave = () => {
      setHoveredCard(null)
      setMousePosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
    }

    if (sectionRef.current) {
      const section = sectionRef.current
      section.addEventListener('mousemove', handleMouseMove)
      section.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [hoveredCard])

  // Calculate transform style for cards
  const getCardTransform = (index) => {
    if (hoveredCard !== index) {
      return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)'
    }
    
    return `perspective(1000px) rotateX(${mousePosition.rotateX || 0}deg) rotateY(${mousePosition.rotateY || 0}deg) translateX(${mousePosition.x || 0}px) translateY(${mousePosition.y || 0}px) scale(1.05)`
  }

  const handleCardMouseEnter = (index) => {
    setHoveredCard(index)
  }

  const handleCardMouseLeave = () => {
    setHoveredCard(null)
    setMousePosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
  }

  // Card data with specific content and icons
  const cards = [
    { 
      id: 1, 
      title: "High Quality Recruitment", 
      content: "Rigorous vetting process ensures only top-tier talent joins your team. Every candidate undergoes comprehensive skills assessment and cultural fit evaluation.",
      icon: "👥"
    },
    { 
      id: 2, 
      title: "Transparent Pricing", 
      content: "No hidden costs or surprise fees. Clear, upfront pricing structure with detailed breakdown of all services and costs included in your package.",
      icon: "💎"
    },
    { 
      id: 3, 
      title: "Ethical Impact", 
      content: "Supporting fair employment practices and sustainable business growth. We create meaningful career opportunities while delivering exceptional value.",
      icon: "🌱"
    },
    { 
      id: 4, 
      title: "GDPR Compliance", 
      content: "Full adherence to UK and EU data protection regulations. Comprehensive security protocols ensure your data remains protected and compliant.",
      icon: "🔐"
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
                className={`${styles.card} ${hoveredCard === index ? styles.cardHovered : ''}`}
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={handleCardMouseLeave}
                style={{
                  transform: getCardTransform(index),
                  transition: hoveredCard === index ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out'
                }}
              >
                <div className={styles.cardImage}>
                  <span className={styles.cardIcon}>{card.icon}</span>
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