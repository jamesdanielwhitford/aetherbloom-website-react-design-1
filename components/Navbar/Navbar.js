// File: components/Navbar/Navbar.js

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      
      setIsScrolled(currentScrollY > 50)
      
      // Make compact when scrolling down past 100px
      // Expand when scrolling up or at top
      if (currentScrollY > 100 && isScrollingDown) {
        setIsCompact(true)
      } else if (!isScrollingDown || currentScrollY <= 100) {
        setIsCompact(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { href: '#why-aetherbloom', label: 'Why Us' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isCompact ? styles.compact : ''}`}>
      <div className={styles.navContainer}>
        {/* Logo/Brand */}
        <div className={styles.navBrand}>
          <a href="#" className={styles.brandLink}>
            <span className={styles.brandName}>
              Aetherbloom
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navMenu}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.navCta}>
          <a href="#pricing" className={styles.ctaButton}>
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#pricing" 
            className={styles.mobileCtaButton}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}