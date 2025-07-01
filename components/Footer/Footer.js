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
    { name: 'LinkedIn', href: '#', icon: '⚡' },
    { name: 'Facebook', href: '#', icon: '⬛' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          
          {/* Brand Section with Logo, Social Links and Email */}
          <div className={styles.brandSection}>
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
            <div className={styles.contactEmail}>
              <span className={styles.contactIcon}>@</span>
              <a href="mailto:hello@aetherbloom.com" className={styles.contactLink}>
                hello@aetherbloom.com
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
                  <span className={styles.socialIcon}>{social.icon}</span>
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
                <span className={styles.contactIcon}>☎</span>
                <a href="tel:+44207123456" className={styles.contactLink}>
                  +44 20 7123 4567
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⬜</span>
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