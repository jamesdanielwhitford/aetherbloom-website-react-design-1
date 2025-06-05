// File: components/Navbar/Navbar.js

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (link) => {
    setActiveLink(link)
    setIsMobileMenuOpen(false)
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    
    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.navbar}`)) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className={`${styles.navbar} ${!isVisible ? styles.hidden : ''}`}>
      {/* Mobile Menu Toggle */}
      <button 
        className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Logo/Brand */}
      <div className={styles.navbarBrand}>
        <Image 
          src="/logo.webp" 
          alt="Aetherbloom Logo" 
          width={32} 
          height={32}
          onError={() => {
            // Handle logo error by hiding the image
            // In a real app, you might show a text fallback
          }}
        />
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navbarNav} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li>
          <a 
            href="#home" 
            className={`${styles.navLink} ${activeLink === 'home' ? styles.active : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#services" 
            className={`${styles.navLink} ${activeLink === 'services' ? styles.active : ''}`}
            onClick={() => handleNavClick('services')}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#impact" 
            className={`${styles.navLink} ${activeLink === 'impact' ? styles.active : ''}`}
            onClick={() => handleNavClick('impact')}
          >
            Impact
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={`${styles.navLink} ${activeLink === 'contact' ? styles.active : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className={styles.navbarActions}>
        <a href="#pricing" className="btn btn-secondary">Pricing</a>
        <a href="#get-started" className="btn btn-primary">Get Started</a>
      </div>
    </nav>
  )
}