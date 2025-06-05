// File: components/Services/Services.js

import { useEffect, useRef } from 'react'
import ServiceCard from './ServiceCard/ServiceCard'
import styles from './Services.module.css'

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-service-card]')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1'
                card.style.transform = 'translateY(0)'
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
      
      // Initially hide cards for animation
      const cards = sectionRef.current.querySelectorAll('[data-service-card]')
      cards.forEach(card => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      })
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Customer Support",
      description: "Omnichannel customer service teams trained in UK communication standards. Deliver exceptional customer experiences across phone, email, chat, and social media channels.",
      link: "#customer-support",
      mockupType: "customer-support"
    },
    {
      title: "Technical Support",
      description: "Multi-tiered IT helpdesk and software support teams. From Level 1 troubleshooting to complex technical solutions, all delivered with UK-standard professionalism.",
      link: "#technical-support",
      mockupType: "technical-support"
    },
    {
      title: "Back Office Operations",
      description: "Streamlined data entry, administration, finance, and HR support. GDPR-compliant operations that integrate seamlessly with your existing workflows and systems.",
      link: "#back-office",
      mockupType: "back-office"
    },
    {
      title: "Sales Support",
      description: "Lead generation, CRM management, and appointment setting services. Boost your sales pipeline with dedicated professionals who understand UK business culture.",
      link: "#sales-support",
      mockupType: "sales-support"
    }
  ]

  return (
    <section className={styles.servicesSection} id="services" ref={sectionRef}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesHeadline}>
            Comprehensive BPO solutions<br />tailored to your needs
          </h2>
          <p className={styles.servicesSubheadline}>
            We've identified the biggest operational challenges for UK businesses, then created solutions that deliver measurable results with South Africa's top talent.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              mockupType={service.mockupType}
            />
          ))}
        </div>
      </div>
    </section>
  )
}