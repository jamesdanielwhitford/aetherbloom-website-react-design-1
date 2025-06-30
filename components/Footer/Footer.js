// File: components/Footer/Footer.js

import { useState } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  const footerLinks = {
    services: [
      { name: 'Customer Support', href: '#services' },
      { name: 'Back Office Operations', href: '#services' },
      { name: 'Technical Support', href: '#services' },
      { name: 'Data Processing', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#why-aetherbloom' },
      { name: 'Our Story', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    resources: [
      { name: 'Case Studies', href: '#' },
      { name: 'White Papers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📸' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <a href="#" className={styles.brandLink}>
              <span className={styles.brandIcon}>🌸</span>
              <span className={styles.brandName}>Aetherbloom</span>
            </a>
            <p className={styles.brandDescription}>
              Transforming businesses through expertly managed BPO solutions. 
              UK expertise meets global talent for exceptional results.
            </p>
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

          {/* Links Sections */}
          <div className={styles.linksGrid}>
            
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

            {/* Company */}
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Resources</h3>
              <ul className={styles.linkList}>
                {footerLinks.resources.map((link, index) => (
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
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.columnTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <a href="mailto:hello@aetherbloom.com" className={styles.contactLink}>
                  hello@aetherbloom.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+44207123456" className={styles.contactLink}>
                  +44 20 7123 4567
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🏢</span>
                <div className={styles.addressGroup}>
                  <span className={styles.addressLine}>London, United Kingdom</span>
                  <span className={styles.addressLine}>Manila, Philippines</span>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
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
            <div className={styles.certifications}>
              <span className={styles.certification}>🛡️ ISO 27001 Certified</span>
              <span className={styles.certification}>🔒 GDPR Compliant</span>
              <span className={styles.certification}>✅ SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}