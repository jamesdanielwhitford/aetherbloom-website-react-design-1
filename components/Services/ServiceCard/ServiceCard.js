// File: components/Services/ServiceCard/ServiceCard.js

import { useEffect, useRef } from 'react'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ title, description, link, mockupType }) {
  const cardRef = useRef(null)

  const handleServiceClick = (e) => {
    e.preventDefault()
    console.log(`Service clicked: ${link.substring(1)}`)
    
    // Add feedback animation
    e.target.style.transform = 'translateX(4px)'
    setTimeout(() => {
      e.target.style.transform = 'translateX(0)'
    }, 150)
  }

  // Animation functions
  const animationFunctions = {
    typingEffect: (element, text, speed = 30) => {
      if (element.typingInterval) {
        clearInterval(element.typingInterval)
      }
      
      element.textContent = ''
      let i = 0
      element.typingInterval = setInterval(() => {
        element.textContent += text.charAt(i)
        i++
        if (i >= text.length) {
          clearInterval(element.typingInterval)
          element.typingInterval = null
        }
      }, speed)
    },

    animateProgress: (progressElement) => {
      progressElement.style.transition = 'none'
      progressElement.style.width = '0%'
      setTimeout(() => {
        progressElement.style.transition = 'width 1.5s ease-in-out'
        progressElement.style.width = '75%'
      }, 50)
    },

    animateDocuments: (container) => {
      const docStatuses = container.querySelectorAll(`.${styles.docStatus}`)
      docStatuses.forEach((status, index) => {
        setTimeout(() => {
          if (status.classList.contains(styles.processing)) {
            status.textContent = '✓'
            status.classList.remove(styles.processing)
            status.classList.add(styles.processed)
            setTimeout(() => {
              status.textContent = '⏳'
              status.classList.remove(styles.processed)
              status.classList.add(styles.processing)
            }, 1500)
          }
        }, index * 300)
      })
    },

    animateSalesNumbers: (container) => {
      const stageCounts = container.querySelectorAll(`.${styles.stageCount}`)
      stageCounts.forEach(count => {
        const targetNumber = parseInt(count.textContent)
        let currentNumber = 0
        count.textContent = '0'
        
        const countInterval = setInterval(() => {
          currentNumber += Math.ceil(targetNumber / 20)
          if (currentNumber >= targetNumber) {
            currentNumber = targetNumber
            clearInterval(countInterval)
          }
          count.textContent = currentNumber
        }, 50)
      })
    }
  }

  const handleMouseEnter = () => {
    const mockup = cardRef.current.querySelector(`.${styles.serviceMockup}`)
    if (mockup) {
      mockup.style.transform = 'scale(1.05) translateY(-2px)'
      mockup.style.transition = 'transform 0.3s ease'
    }

    // Trigger specific animations based on card type
    if (mockupType === 'customer-support') {
      const bubbles = cardRef.current.querySelectorAll(`.${styles.chatBubble}`)
      bubbles.forEach((bubble, index) => {
        const originalText = bubble.getAttribute('data-text') || bubble.textContent
        bubble.setAttribute('data-text', originalText)
        setTimeout(() => {
          animationFunctions.typingEffect(bubble, originalText)
        }, index * 600)
      })
    } else if (mockupType === 'technical-support') {
      const progressFill = cardRef.current.querySelector(`.${styles.progressFill}`)
      if (progressFill) {
        animationFunctions.animateProgress(progressFill)
      }
      
      const statusIndicator = cardRef.current.querySelector(`.${styles.statusIndicator}`)
      if (statusIndicator) {
        statusIndicator.style.animation = 'pulse 1s ease-in-out 3'
      }
    } else if (mockupType === 'back-office') {
      const mockupContent = cardRef.current.querySelector(`.${styles.mockupContent}`)
      if (mockupContent) {
        animationFunctions.animateDocuments(mockupContent)
      }
    } else if (mockupType === 'sales-support') {
      const mockupContent = cardRef.current.querySelector(`.${styles.mockupContent}`)
      if (mockupContent) {
        animationFunctions.animateSalesNumbers(mockupContent)
      }
    }
  }

  const handleMouseLeave = () => {
    const mockup = cardRef.current.querySelector(`.${styles.serviceMockup}`)
    if (mockup) {
      mockup.style.transform = 'scale(1) translateY(0)'
    }
    
    const statusIndicator = cardRef.current.querySelector(`.${styles.statusIndicator}`)
    if (statusIndicator) {
      statusIndicator.style.animation = ''
    }
  }

  const renderMockup = () => {
    switch (mockupType) {
      case 'customer-support':
        return (
          <div className={`${styles.serviceMockup} ${styles.customerSupportMockup}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className={styles.mockupContent}>
              <div className={`${styles.chatBubble} ${styles.incoming}`} data-text="Hi, I need help with my order">
                <span>Hi, I need help with my order</span>
              </div>
              <div className={`${styles.chatBubble} ${styles.outgoing}`} data-text="I'd be happy to help you with that right away!">
                <span>I'd be happy to help you with that right away!</span>
              </div>
            </div>
          </div>
        )
      
      case 'technical-support':
        return (
          <div className={`${styles.serviceMockup} ${styles.technicalSupportMockup}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>System Dashboard</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={`${styles.statusIndicator} ${styles.green}`}>
                <span className={styles.statusDot}></span>
                <span>All systems operational</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
            </div>
          </div>
        )
      
      case 'back-office':
        return (
          <div className={`${styles.serviceMockup} ${styles.backOfficeMockup}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Document Processing</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.documentRow}>
                <span className={styles.docIcon}>📄</span>
                <span className={styles.docName}>Invoice_2024_001.pdf</span>
                <span className={`${styles.docStatus} ${styles.processed}`}>✓</span>
              </div>
              <div className={styles.documentRow}>
                <span className={styles.docIcon}>📊</span>
                <span className={styles.docName}>Monthly_Report.xlsx</span>
                <span className={`${styles.docStatus} ${styles.processing}`}>⏳</span>
              </div>
            </div>
          </div>
        )
      
      case 'sales-support':
        return (
          <div className={`${styles.serviceMockup} ${styles.salesSupportMockup}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupTitle}>Sales Pipeline</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.pipelineStage}>
                <span className={styles.stageName}>Qualified Leads</span>
                <span className={styles.stageCount}>24</span>
              </div>
              <div className={styles.pipelineStage}>
                <span className={styles.stageName}>Meetings Booked</span>
                <span className={styles.stageCount}>12</span>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div 
      className={styles.serviceCard} 
      ref={cardRef}
      data-service-card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.serviceContent}>
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
        <a href={link} className={styles.serviceLink} onClick={handleServiceClick}>
          Learn more <span className={styles.serviceArrow}>→</span>
        </a>
      </div>
      <div className={styles.serviceImageContainer}>
        <div className={styles.serviceImagePlaceholder}>
          {renderMockup()}
        </div>
      </div>
    </div>
  )
}