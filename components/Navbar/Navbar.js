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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navBrand}>
          <a href="#" className={styles.brandLink}>
            <span className={styles.brandName}>Aetherbloom</span>
          </a>
        </div>
      </div>
    </nav>
  )
}