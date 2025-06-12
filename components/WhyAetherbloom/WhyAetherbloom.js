// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useState, useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)

  const cards = [
    {
      title: "High Quality Recruitment and Training",
      description: "UK-trained teams delivering exceptional customer experiences with rigorous selection processes and ongoing development programs.",
      details: "Our comprehensive 10-step talent selection process ensures only top-tier professionals join your team. From cultural fit analysis to technical interviews and background checks.",
      pattern: "recruitment",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=faces"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees with real-time reporting dashboards and flexible contracts that scale with your business needs.",
      details: "SLA guarantees with real consequences, live performance dashboards, and the ability to scale your team in just 72 hours with complete cost transparency.",
      pattern: "pricing",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=entropy"
    },
    {
      title: "GDPR Compliance",
      description: "Built-in UK compliance standards with civil service-grade audits and data protection protocols from day one.",
      details: "ISO standards integrated, comprehensive data protection training, and regular compliance audits ensure your business meets all UK regulatory requirements.",
      pattern: "compliance",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&crop=entropy"
    },
    {
      title: "Ethical Impact",
      description: "Creating meaningful opportunities for South African youth through job readiness programs and leadership development.",
      details: "Free training programs, paid internships, leadership pipelines, and partnerships with community organizations to uplift individuals and communities.",
      pattern: "impact",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&crop=faces"
    }
  ]

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
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${styles[card.pattern]}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
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
                <div className={`${styles.cardDetails} ${hoveredCard === index ? styles.visible : ''}`}>
                  <p>{card.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}