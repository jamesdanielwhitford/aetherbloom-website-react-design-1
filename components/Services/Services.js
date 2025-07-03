// File: components/Services/Services.js

import { useState, useEffect, useRef } from 'react'
import styles from './Services.module.css'

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  // Intersection Observer for animations
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
      if (cardRef.current && sectionRef.current) {
        const section = sectionRef.current
        const card = cardRef.current
        const sectionRect = section.getBoundingClientRect()
        const cardRect = card.getBoundingClientRect()
        
        // Get mouse position relative to the card center
        const cardCenterX = cardRect.left + cardRect.width / 2
        const cardCenterY = cardRect.top + cardRect.height / 2
        
        const deltaX = e.clientX - cardCenterX
        const deltaY = e.clientY - cardCenterY
        
        // Normalize the values based on card size
        const rotateX = (deltaY / cardRect.height) * -10 // Max 10 degrees
        const rotateY = (deltaX / cardRect.width) * 10   // Max 10 degrees
        const translateX = (deltaX / cardRect.width) * 10 // Max 10px movement
        const translateY = (deltaY / cardRect.height) * 10 // Max 10px movement
        
        setMousePosition({
          x: translateX,
          y: translateY,
          rotateX: Math.max(-10, Math.min(10, rotateX)),
          rotateY: Math.max(-10, Math.min(10, rotateY))
        })
      }
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setMousePosition({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
    }

    if (sectionRef.current) {
      const section = sectionRef.current
      section.addEventListener('mousemove', handleMouseMove)
      section.addEventListener('mouseenter', handleMouseEnter)
      section.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        section.removeEventListener('mousemove', handleMouseMove)
        section.removeEventListener('mouseenter', handleMouseEnter)
        section.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Calculate transform style for the card
  const getCardTransform = () => {
    if (!isHovering) {
      return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)'
    }
    
    return `perspective(1000px) rotateX(${mousePosition.rotateX || 0}deg) rotateY(${mousePosition.rotateY || 0}deg) translateX(${mousePosition.x || 0}px) translateY(${mousePosition.y || 0}px) scale(1.02)`
  }

  const services = [
    {
      title: "Customer Support",
      subtitle: "Omnichannel Excellence",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      features: [
        "24/7 Multi-channel Support",
        "UK Compliance Training", 
        "Real-time Quality Monitoring",
        "Native-level Communication"
      ]
    },
    {
      title: "Back Office Operations", 
      subtitle: "Streamlined Efficiency",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      features: [
        "Data Processing & Entry",
        "Financial Administration", 
        "HR Support Services"
      ]
    },
    {
      title: "Technical Support",
      subtitle: "Expert Problem Solving", 
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      features: [
        "Tiered IT Helpdesk",
        "Software Support",
        "Technical Documentation", 
        "System Troubleshooting"
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="services" className={styles.servicesSection}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>
      
      <div className={styles.servicesContainer}>
        <div className={`${styles.servicesContent} ${isVisible ? styles.visible : ''}`}>
          {/* Left Side - Services List */}
          <div className={styles.servicesList}>
            <div className={styles.servicesMenu}>
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`${styles.serviceMenuItem} ${activeService === index ? styles.active : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className={`${styles.serviceArrow} ${activeService === index ? styles.visible : ''}`}>
                    →
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Service Details Card */}
          <div className={styles.serviceCard}>
            <div 
              ref={cardRef}
              className={styles.cardContent}
              style={{
                transform: getCardTransform(),
                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out'
              }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>
                  {String(activeService + 1).padStart(2, '0')}
                </span>
                <div className={styles.cardTitleGroup}>
                  <h3 className={styles.cardTitle}>{services[activeService].title}</h3>
                  <span className={styles.cardSubtitle}>{services[activeService].subtitle}</span>
                </div>
              </div>
              
              <p className={styles.cardDescription}>
                {services[activeService].description}
              </p>
              
              <div className={styles.cardFeatures}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}