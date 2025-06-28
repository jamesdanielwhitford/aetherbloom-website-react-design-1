// File: components/WhyAetherbloom/WhyAetherbloom.js

import { useState, useEffect, useRef } from 'react'
import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Sample card data
  const cards = [
    { id: 1, title: "Card One", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Card Two", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 3, title: "Card Three", content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { id: 4, title: "Card Four", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 5, title: "Card Five", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { id: 6, title: "Card Six", content: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt." }
  ]

  return (
    <section ref={sectionRef} id="why-aetherbloom" className={styles.whySection}>
      <div className={`${styles.whyContainer} ${isVisible ? 'fade-in' : 'fade-out'}`}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Why Choose Aetherbloom</h2>
          <div className={styles.textParagraph}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            {cards.map((card) => (
              <div key={card.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardContent}>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}