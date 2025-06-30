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
  const sectionRef = useRef(null)

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

            <div className={styles.benefitsList}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>⚡</span>
                <span className={styles.benefitText}>Start saving within 72 hours</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>🎯</span>
                <span className={styles.benefitText}>UK-trained specialists</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>📈</span>
                <span className={styles.benefitText}>Scalable solutions</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>🛡️</span>
                <span className={styles.benefitText}>100% compliance guaranteed</span>
              </div>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:hello@aetherbloom.com" className={styles.contactLink}>
                  hello@aetherbloom.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+44207123456" className={styles.contactLink}>
                  +44 20 7123 4567
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🏢</span>
                <span className={styles.contactText}>
                  London, UK & Manila, Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={styles.formContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Get Your Free Strategy Session</h3>
                <p className={styles.formSubtitle}>
                  Discover exactly how much you could save with a personalized assessment
                </p>
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

              <p className={styles.formNote}>
                ✓ No commitment required • ✓ 30-minute strategy call • ✓ Custom savings calculation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}