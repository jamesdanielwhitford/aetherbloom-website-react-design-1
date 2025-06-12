// File: components/Footer/Footer.js

import styles from './Footer.module.css'

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Instagram', url: '#', icon: '📸' }
  ]

  const quickLinks = [
    { name: 'Why Us', href: '#why-aetherbloom' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>Aetherbloom</h3>
            <p className={styles.brandTagline}>
              Where expertise meets impact. Bridging UK business needs with South Africa's untapped potential.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  <span className={styles.socialIcon}>{link.icon}</span>
                  <span className={styles.socialName}>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerNavigation}>
            <h4 className={styles.navTitle}>Quick Links</h4>
            <nav className={styles.navLinks}>
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className={styles.navLink}>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.contactTitle}>Get in Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div className={styles.contactDetails}>
                  <span>UK Office: London, UK</span>
                  <span>SA Office: Cape Town, South Africa</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>info@aetherbloom.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerDivider}></div>
          <div className={styles.footerMeta}>
            <p className={styles.copyright}>
              © 2025 Aetherbloom. All rights reserved.
            </p>
            <p className={styles.mission}>
              Ethical outsourcing that uplifts individuals and communities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}