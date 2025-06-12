// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useState, useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isCycling, setIsCycling] = useState(true)
  const [currentCycleIndex, setCurrentCycleIndex] = useState(0)
  const [userHasHovered, setUserHasHovered] = useState(false)
  const [lastHoveredCard, setLastHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const cycleTimerRef = useRef(null)

  const cards = [
    {
      title: "High Quality Recruitment and Training",
      description: "UK-trained teams delivering exceptional customer experiences with rigorous selection processes and ongoing development programs.",
      detailedDescription: "Our comprehensive 10-step talent selection process ensures only top-tier professionals join your team. From cultural fit analysis to technical interviews and background checks, we maintain the highest standards.",
      pattern: "recruitment",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=faces"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees with real-time reporting dashboards and flexible contracts that scale with your business needs.",
      detailedDescription: "SLA guarantees with real consequences, live performance dashboards, and the ability to scale your team in just 72 hours with complete cost transparency. No setup fees, just clear value.",
      pattern: "pricing",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=entropy"
    },
    {
      title: "GDPR Compliance",
      description: "Built-in UK compliance standards with civil service-grade audits and data protection protocols from day one.",
      detailedDescription: "ISO standards integrated, comprehensive data protection training, and regular compliance audits ensure your business meets all UK regulatory requirements with zero risk.",
      pattern: "compliance",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=entropy"
    },
    {
      title: "Ethical Impact",
      description: "Creating meaningful opportunities for South African youth through job readiness programs and leadership development.",
      detailedDescription: "Free training programs, paid internships, leadership pipelines, and partnerships with community organizations to uplift individuals and communities while delivering excellence.",
      pattern: "impact",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&crop=faces"
    }
  ]

  // Auto-cycling logic
  useEffect(() => {
    if (isCycling && isVisible && !userHasHovered) {
      cycleTimerRef.current = setInterval(() => {
        setCurrentCycleIndex((prevIndex) => (prevIndex + 1) % cards.length)
      }, 4500) // Change card every 3 seconds
    } else {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current)
      }
    }

    return () => {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current)
      }
    }
  }, [isCycling, isVisible, userHasHovered, cards.length])

  // Handle user hover
  const handleCardHover = (index) => {
    if (!userHasHovered) {
      setUserHasHovered(true)
      setIsCycling(false)
    }
    setHoveredCard(index)
    setLastHoveredCard(index)
  }

  const handleCardLeave = () => {
    setHoveredCard(null)
  }

  // Determine which card should be "active" (either from cycling or user hover)
  const getActiveCard = () => {
    if (userHasHovered) {
      return hoveredCard !== null ? hoveredCard : lastHoveredCard
    }
    return isCycling ? currentCycleIndex : null
  }

  const activeCardIndex = getActiveCard()

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
        <div className={styles.whyHeader}>
          <h2 className={styles.mainTitle}>
            <span className={styles.titleLine}>This is Aetherbloom.</span>
            <span className={styles.titleLine}>How can we help you?</span>
          </h2>
          <p className={styles.descriptionText}>
            Get your business ready to scale with high-quality, ethical outsourcing that streamline your business processes.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {cards.map((card, index) => {
            const isCardActive = activeCardIndex === index
            
            return (
              <div 
                key={index} 
                className={`${styles.card} ${styles[card.pattern]} ${isCardActive ? styles.active : ''}`}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div className={styles.cardBackground}>
                  <div 
                    className={styles.cardImage}
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  <div className={styles.cardGlassOverlay}></div>
                  <div className={styles.cardSheen}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}