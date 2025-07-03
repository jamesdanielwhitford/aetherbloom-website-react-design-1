// File: components/Footer/Footer.js

import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  const footerLinks = {
    navigation: [
      { name: 'About Us', href: '#why-aetherbloom' },
      { name: 'Services', href: '#services' },
      { name: 'Impact', href: '#impact' },
      { name: 'Pricing', href: '#pricing' }
    ],
    services: [
      { name: 'Customer Support', href: '#services' },
      { name: 'Back Office Operations', href: '#services' },
      { name: 'Technical Support', href: '#services' },
      { name: 'Data Processing', href: '#services' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  }

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      href: '#', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brandHeader}>
              <div className={styles.logoContainer}>
                <div className={styles.logo}>
                  <img 
                    src="/logo.png" 
                    alt="Aetherbloom Logo" 
                    className={styles.logoSymbol}
                  />
                  <span className={styles.logoText}>Aetherbloom</span>
                </div>
              </div>
              <p className={styles.brandDescription}>
                Transforming businesses through expertly managed BPO solutions. 
                UK expertise meets global talent for exceptional results.
              </p>
            </div>
            <div className={styles.contactEmail}>
              <a href="mailto:info@aetherbloom.co.za" className={styles.contactLink}>
                info@aetherbloom.co.za
              </a>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <ul className={styles.linkList}>
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <a href="tel:+44207123456" className={styles.contactLink}>
                  +44 20 7123 4567
                </a>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.addressGroup}>
                  <span className={styles.addressLine}>London, United Kingdom</span>
                  <span className={styles.addressLine}>Johannesburg, South Africa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletterSection}>
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterDescription}>
                Get insights on BPO trends and cost optimization strategies.
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>© {currentYear} Aetherbloom. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}