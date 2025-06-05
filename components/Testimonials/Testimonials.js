// File: components/Testimonials/Testimonials.js

import { useEffect, useRef, useState } from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Responsive card width calculation
      const isMobile = window.innerWidth <= 480
      const isTablet = window.innerWidth <= 768
      let cardWidth = 320 + 32 // desktop: card width + gap
      
      if (isMobile) {
        cardWidth = 260 + 20 // mobile: card width + gap
      } else if (isTablet) {
        cardWidth = 280 + 24 // tablet: card width + gap
      }
      
      scrollRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      // Responsive card width calculation
      const isMobile = window.innerWidth <= 480
      const isTablet = window.innerWidth <= 768
      let cardWidth = 320 + 32 // desktop: card width + gap
      
      if (isMobile) {
        cardWidth = 260 + 20 // mobile: card width + gap
      } else if (isTablet) {
        cardWidth = 280 + 24 // tablet: card width + gap
      }
      
      scrollRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-testimonial-card]')
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
      const cards = sectionRef.current.querySelectorAll('[data-testimonial-card]')
      cards.forEach(card => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(20px)'
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      })
    }

    // Set up scroll event listener
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons() // Initial check
    }

    return () => {
      observer.disconnect()
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', checkScrollButtons)
      }
    }
  }, [])

  const testimonials = [
    {
      name: "James Mitchell",
      title: "Operations Director",
      company: "TechFlow Solutions",
      avatar: "JM",
      quote: "Aetherbloom transformed our customer support operations. Within 72 hours, we had a dedicated team handling our inquiries with the same professionalism as our in-house staff. The cultural alignment is remarkable.",
      service: "Customer Support"
    },
    {
      name: "Sarah Chen",
      title: "Finance Director", 
      company: "GreenLeaf Consulting",
      avatar: "SC",
      quote: "We've cut our operational costs by 45% while actually improving service quality. The GDPR compliance training and UK work standards made the transition seamless for our London-based business.",
      service: "Back Office Operations"
    },
    {
      name: "David Thompson",
      title: "CTO",
      company: "InnovateUK Ltd",
      avatar: "DT",
      quote: "Their technical support team resolved complex issues that our previous provider couldn't handle. The multi-tiered approach and genuine expertise have been game-changing for our SaaS platform.",
      service: "Technical Support"
    },
    {
      name: "Emma Rodriguez",
      title: "Sales Manager",
      company: "Meridian Enterprises",
      avatar: "ER",
      quote: "The sales support team has doubled our qualified leads pipeline. They understand UK business culture perfectly and represent our brand with the same values we would expect internally.",
      service: "Sales Support"
    },
    {
      name: "Michael Barnes",
      title: "Managing Director",
      company: "Heritage Holdings",
      avatar: "MB",
      quote: "As a former civil servant myself, I appreciated Aetherbloom's public sector-grade compliance approach. The founders' background gives real confidence in their governance and quality standards.",
      service: "Strategic Partnership"
    },
    {
      name: "Lisa Patel",
      title: "HR Director",
      company: "Quantum Dynamics",
      avatar: "LP",
      quote: "The data-driven talent matching delivered exactly the skill sets we needed. No lengthy recruitment cycles, no cultural mismatches – just professional, capable team members from day one.",
      service: "Talent Matching"
    }
  ]

  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.testimonialsHeadline}>
            Trusted by forward-thinking<br />UK businesses
          </h2>
          <p className={styles.testimonialsSubheadline}>
            See how companies across various industries are transforming their operations and achieving significant cost savings with Aetherbloom's expert BPO solutions.
          </p>
        </div>

        <div className={styles.testimonialsWrapper}>
          <button 
            className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll testimonials left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <div className={styles.testimonialsScroll} ref={scrollRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard} data-testimonial-card>
                <div className={styles.testimonialContent}>
                  <div className={styles.quoteIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                    </svg>
                  </div>
                  <blockquote className={styles.testimonialQuote}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className={styles.testimonialService}>
                    {testimonial.service}
                  </div>
                </div>
                <div className={styles.testimonialFooter}>
                  <div className={styles.testimonialAvatar}>
                    <span>{testimonial.avatar}</span>
                  </div>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorTitle}>{testimonial.title}</div>
                    <div className={styles.authorCompany}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll testimonials right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.testimonialsStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>UK SMEs Served</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>40%+</span>
            <span className={styles.statLabel}>Average Cost Reduction</span>
          </div>
        </div>
      </div>
    </section>
  )
}