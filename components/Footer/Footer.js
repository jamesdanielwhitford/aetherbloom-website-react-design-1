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
              <Image 
                src="/logo.webp" 
                alt="Aetherbloom Logo" 
                width={40} 
                height={40}
                onError={() => {
                  // Handle logo error
                }}
              />
              <div className={styles.brandText}>
                <h3 className={styles.brandName}>Aetherbloom</h3>
                <p className={styles.brandTagline}>
                  Your future starts<br />here
                </p>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Transform your business with expertly managed BPO solutions. UK expertise meets global talent for sustainable growth and meaningful impact.
            </p>
            <div className={styles.socialLinks}>
              <span className={styles.socialLabel}>Follow the community</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5.839 4.101c.05-.071.105-.142.165-.21.379-.42.868-.629 1.394-.629.526 0 1.015.21 1.394.629.06.068.115.139.165.21l6.698 6.897 6.733-6.934c.05-.071.105-.141.165-.209.379-.42.868-.629 1.394-.629.526 0 1.015.21 1.394.629.379.42.394 1.017.033 1.455l-7.365 7.602c-.192.403-.586.629-1.002.629-.416 0-.81-.226-1.002-.629l-7.331-7.554c-.362-.438-.347-1.035.033-1.455z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48"/>
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