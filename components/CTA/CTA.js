// File: components/CTA/CTA.js

import { useEffect, useRef } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const ctaContent = entry.target.querySelector(`.${styles.ctaContent}`)
            if (ctaContent) {
              ctaContent.style.opacity = '1'
              ctaContent.style.transform = 'translateY(0)'
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      
      // Initially hide content for animation
      const ctaContent = sectionRef.current.querySelector(`.${styles.ctaContent}`)
      if (ctaContent) {
        ctaContent.style.opacity = '0'
        ctaContent.style.transform = 'translateY(30px)'
        ctaContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      }
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.ctaSection} ref={sectionRef}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <div className={styles.ctaLabel}>Ready to transform your business?</div>
            <h2 className={styles.ctaHeadline}>
              Create <span className={styles.highlightText}>partnership.</span><br />
              not just <span className={styles.highlightText}>outsourcing.</span>
            </h2>
            <p className={styles.ctaSubheadline}>
              Join 50+ UK businesses already saving 40%+ on operational costs while scaling with confidence. Start your transformation today.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a href="#strategy-session" className={`btn btn-primary ${styles.ctaPrimary}`}>
              Claim Your Free Strategy Session
              <span className={styles.ctaArrow}>→</span>
            </a>
            <a href="#pricing" className={`btn btn-secondary ${styles.ctaSecondary}`}>
              View Pricing Calculator
            </a>
          </div>

          <div className={styles.ctaTrustSignals}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Get instant access</span>
            </div>
            <div className={styles.trustDivider}>|</div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>No setup fees</span>
            </div>
            <div className={styles.trustDivider}>|</div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Scale in 72 hours</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.decorativeShape1}></div>
          <div className={styles.decorativeShape2}></div>
          <div className={styles.decorativeShape3}></div>
        </div>
      </div>
    </section>
  )
}