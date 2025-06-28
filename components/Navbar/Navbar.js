// File: components/Navbar/Navbar.js

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#why-aetherbloom' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          <a href="#" className={styles.brandLink}>
            <span className={styles.brandIcon}>🌸</span>
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