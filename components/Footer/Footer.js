// File: components/Footer/Footer.js

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const footerContent = entry.target.querySelector(`.${styles.footerContent}`)
            if (footerContent) {
              footerContent.style.opacity = '1'
              footerContent.style.transform = 'translateY(0)'
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
      
      // Initially hide content for animation
      const footerContent = footerRef.current.querySelector(`.${styles.footerContent}`)
      if (footerContent) {
        footerContent.style.opacity = '0'
        footerContent.style.transform = 'translateY(30px)'
        footerContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      }
    }

    return () => observer.disconnect()
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} ref={footerRef}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <div className={styles.brandContainer}>
                <h3 className={styles.brandName}>Aetherbloom</h3>
            </div>
            <p className={styles.brandDescription}>
              Transform your business with expertly managed BPO solutions. UK expertise meets global talent for sustainable growth and meaningful impact.
            </p>
            <div className={styles.socialLinks}>
              <span className={styles.socialLabel}>Follow the community</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
                        0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 
                        0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 
                        1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 
                        1.12-2.5 2.5v5.5h-3v-10h3v1.28c.73-.84 1.78-1.28 
                        2.5-1.28 2.21 0 4 1.79 4 4v6z" />
                    </svg>
                </a>

                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.675 0h-21.35C.596 0 0 .595 0 
                        1.326v21.348C0 23.404.596 24 1.325 
                        24H12.82v-9.294H9.692V11.01h3.127V8.41c0-3.1 
                        1.894-4.788 4.659-4.788 1.325 0 2.464.099 
                        2.795.143v3.24l-1.918.001c-1.504 
                        0-1.796.715-1.796 1.763v2.31h3.59l-.467 
                        3.696h-3.123V24h6.116C23.404 24 24 
                        23.404 24 22.674V1.326C24 
                        .595 23.404 0 22.675 0z"/>
                    </svg>
                </a>

              </div>
            </div>
          </div>

          <div className={styles.footerNavigation}>
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#customer-support">Customer Support</a></li>
                <li><a href="#technical-support">Technical Support</a></li>
                <li><a href="#back-office">Back Office Operations</a></li>
                <li><a href="#sales-support">Sales Support</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#impact">Our Impact</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Resources</h4>
              <ul className={styles.columnLinks}>
                <li><a href="#pricing">Pricing Calculator</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <ul className={styles.columnLinks}>
                <li><a href="mailto:info@aetherbloom.com">info@aetherbloom.com</a></li>
                <li><a href="#strategy-session">Free Strategy Session</a></li>
                <li><a href="#contact">Get in Touch</a></li>
              </ul>
              <div className={styles.officeLocations}>
                <div className={styles.office}>
                  <strong>UK Office</strong>
                  <span>London, United Kingdom</span>
                </div>
                <div className={styles.office}>
                  <strong>SA Office</strong>
                  <span>Cape Town, South Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>Aetherbloom©{currentYear}</span>
            <div className={styles.legalLinks}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#gdpr">GDPR Compliance</a>
              <a href="#data-protection">Data Protection</a>
            </div>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.languageSelector}>
              <span>EN</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button 
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5"/>
            <polyline points="5,12 12,5 19,12"/>
          </svg>
        </button>
      </div>
    </footer>
  )
}