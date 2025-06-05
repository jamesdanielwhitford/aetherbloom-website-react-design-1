// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const sectionRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const features = entry.target.querySelectorAll(`.${styles.whyFeature}`)
            features.forEach((feature, index) => {
              setTimeout(() => {
                feature.style.opacity = '1'
                feature.style.transform = 'translateY(0)'
              }, index * 150)
            })
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
      
      // Initially hide features for animation
      const features = sectionRef.current.querySelectorAll(`.${styles.whyFeature}`)
      features.forEach(feature => {
        feature.style.opacity = '0'
        feature.style.transform = 'translateY(20px)'
        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      })
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="m22 21-3-3m0 0-3-3m3 3 3-3m-3 3-3 3"/>
        </svg>
      ),
      title: "Civil Service Expertise",
      description: "Founded by UK public sector leaders with decades of HR and data analysis experience"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M13 12h3"/>
          <path d="M11 12H8"/>
        </svg>
      ),
      title: "UK Compliance Ready",
      description: "Teams pre-trained in GDPR, ISO standards, and UK regulatory requirements from day one"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Transparent Pricing",
      description: "No hidden fees, flexible contracts, and real-time performance dashboards with SLA guarantees"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "Rapid Deployment",
      description: "Scale your team in 72 hours with our streamlined onboarding and talent matching process"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Data-Driven Matching",
      description: "20% faster talent placement through proprietary analytics and cultural fit assessment"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          <path d="M10 12h4"/>
        </svg>
      ),
      title: "Premium Talent Pool",
      description: "Access to South Africa's top STEM graduates with 92% English fluency in professional workforce"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Proven Track Record",
      description: "4.9/5 client satisfaction rating across 50+ UK SMEs with 4.8/5 employee happiness score"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "Ethical Partnership",
      description: "Supporting South African youth through training programs while delivering exceptional service"
    }
  ]

  return (
    <section className={styles.whyAetherbloomSection} ref={sectionRef}>
      <div className={styles.whyContainer}>
        <div className={styles.whyHeader}>
          <h2 className={styles.whyHeadline}>
            Everything you need <br />to scale with confidence
          </h2>
          <p className={styles.whySubheadline}>
            Founded by a UK Civil Service HR Leader and Met Office Data Analyst, Aetherbloom combines public sector rigor with data-driven talent matching to deliver exceptional BPO solutions.
          </p>
        </div>

        <div className={styles.whyFeaturesGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.whyFeature}>
              <div className={styles.whyFeatureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.whyFeatureTitle}>{feature.title}</h3>
              <p className={styles.whyFeatureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}