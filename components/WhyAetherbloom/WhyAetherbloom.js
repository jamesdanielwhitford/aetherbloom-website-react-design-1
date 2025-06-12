// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useState, useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const differentiators = [
    {
      icon: "💼",
      title: "UK Civil Service Foundation",
      description: "Built on public sector rigor and data-driven excellence"
    },
    {
      icon: "🔒",
      title: "UK Compliance Ready",
      description: "GDPR, ISO standards integrated from day one"
    },
    {
      icon: "📊",
      title: "20% Faster Matching",
      description: "Proprietary analytics ensure perfect cultural fit"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden fees with real-time reporting dashboards"
    },
    {
      icon: "🎓",
      title: "#1 STEM Graduates",
      description: "QS Rankings verified talent pool from South Africa"
    },
    {
      icon: "🗣️",
      title: "92% English Fluency",
      description: "Professional workforce with native-level communication"
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
          <span className={styles.sectionLabel}>Our Foundation</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleWord}>Where</span>
            <span className={styles.titleWord}>Expertise</span>
            <span className={styles.titleWord}>Meets</span>
            <span className={styles.titleWordHighlight}>Impact</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Bridging UK business needs with South Africa's untapped potential through 
            <strong> best-in-class outsourcing</strong> and <strong>meaningful opportunities</strong>.
          </p>
        </div>

        <div className={styles.differentiatorsList}>
          {differentiators.map((item, index) => (
            <div key={index} className={styles.differentiatorItem}>
              <div className={styles.differentiatorIcon}>{item.icon}</div>
              <div className={styles.differentiatorContent}>
                <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                <p className={styles.differentiatorDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.missionStatement}>
          <div className={styles.missionContent}>
            <h3 className={styles.missionTitle}>Our Dual Mission</h3>
            <div className={styles.missionPoints}>
              <div className={styles.missionPoint}>
                <span className={styles.missionNumber}>01</span>
                <span className={styles.missionText}>Deliver best-in-class outsourcing for UK businesses</span>
              </div>
              <div className={styles.missionPoint}>
                <span className={styles.missionNumber}>02</span>
                <span className={styles.missionText}>Create meaningful opportunities for South African youth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}