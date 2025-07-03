// File: components/CTA/CTA.js

import { useState, useEffect, useRef } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
  }

  return (
    <section className={styles.ctaSection} id="contact" ref={sectionRef}>
      <div className={styles.ctaContainer}>
        <div className={`${styles.ctaWrapper} ${isVisible ? styles.visible : ''}`}>
          
          {/* Left Side - Content */}
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>
                Ready to Transform Your Business?
              </h2>
              <p className={styles.ctaSubtitle}>
                Join hundreds of UK businesses already saving up to 70% on operational costs while maintaining exceptional quality standards.
              </p>
            </div>

            <div className={styles.additionalInfo}>
              <p className={styles.assessmentText}>
                Discover exactly how much you could save with a personalized assessment. Our team will analyze your current operations and provide a detailed cost-benefit analysis within 24 hours.
              </p>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <a href="mailto:info@aetherbloom.co.za" className={styles.contactLink}>
                  info@aetherbloom.co.za
                </a>
              </div>
              <div className={styles.contactItem}>
                <a href="tel:+44207123456" className={styles.contactLink}>
                  +44 20 7123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={styles.formContainer}>
            <form 
              ref={cardRef}
              className={styles.contactForm} 
              onSubmit={handleSubmit}
              style={{
                transform: getCardTransform(),
                transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out'
              }}
            >
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Start Your Free Assessment</h3>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your business needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    rows="4"
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                <span className={styles.buttonText}>Claim Your Free Session</span>
                <span className={styles.buttonArrow}>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}