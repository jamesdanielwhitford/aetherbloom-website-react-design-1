// File: components/Services/Services.js

import { useState, useEffect, useRef } from 'react'
import styles from './Services.module.css'

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
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
        "HR Support Services",
        "Document Management"
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
    <section ref={sectionRef} id="services" className={`${styles.servicesSection} snap-section`}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>
      
      <div className={`${styles.servicesContainer} ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <div className={styles.servicesContent}>
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
            <div className={styles.cardContent}>
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