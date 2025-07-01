// File: components/Navbar/Navbar.js

import styles from './Navbar.module.css'

export default function Navbar() {
  const navLinks = [
    { name: 'About us', href: '#why-aetherbloom' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          <a href="#" className={styles.brandLink}>
            <img 
              src="/logo.png" 
              alt="Aetherbloom Logo" 
              className={styles.brandIcon}
            />
            <span className={styles.brandName}>Aetherbloom</span>
          </a>
        </div>

        <div className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.navLink}>
              {link.name}
            </a>
          ))}
        </div>

        <div className={styles.navActions}>
          <a href="#contact" className={styles.getStartedBtn}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}