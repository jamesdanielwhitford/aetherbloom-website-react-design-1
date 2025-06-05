// File: components/PricingCalculator/PricingCalculator.js

import { useState, useEffect, useRef } from 'react'
import styles from './PricingCalculator.module.css'

export default function PricingCalculator() {
  const [formData, setFormData] = useState({
    role: '',
    salary: '',
    hours: '40',
    tier: 'essentials'
  })
  const [results, setResults] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const sectionRef = useRef(null)

  const roleOptions = [
    { value: 'Customer Service Representative', salary: '26000' },
    { value: 'Admin Assistant', salary: '25000' },
    { value: 'Technical Support Specialist', salary: '32000' },
    { value: 'Data Analyst', salary: '38000' },
    { value: 'Bookkeeper', salary: '30000' },
    { value: 'Sales Support Coordinator', salary: '28000' }
  ]

  const tierOptions = [
    { value: 'essentials', cost: 4320, name: 'Digital Essentials (20 hrs/month – £360/mo)' },
    { value: 'growth', cost: 6000, name: 'Digital Growth (30 hrs/month – £500/mo)' },
    { value: 'enterprise', cost: 8760, name: 'Digital Enterprise (50 hrs/month – £730/mo)' },
    { value: 'engagement', cost: 19200, name: 'Call Centre Engagement (40 hrs/week – £1,600/mo)' },
    { value: 'sales', cost: 60000, name: 'Sales Accelerator (3 agents – £5,000/mo)' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const calculatorCard = entry.target.querySelector(`.${styles.calculatorCard}`)
            if (calculatorCard) {
              calculatorCard.style.opacity = '1'
              calculatorCard.style.transform = 'translateY(0)'
            }
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
      
      // Initially hide calculator card for animation
      const calculatorCard = sectionRef.current.querySelector(`.${styles.calculatorCard}`)
      if (calculatorCard) {
        calculatorCard.style.opacity = '0'
        calculatorCard.style.transform = 'translateY(30px)'
        calculatorCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      }
    }

    return () => observer.disconnect()
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const animateCountUp = (targetValue, callback, duration = 1000) => {
    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress)
      
      callback(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        callback(targetValue)
      }
    }
    
    requestAnimationFrame(updateCount)
  }

  const showNotification = (message, type = 'info') => {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.calculator-notification')
    if (existingNotification) {
      existingNotification.remove()
    }

    // Create notification element
    const notification = document.createElement('div')
    notification.className = `calculator-notification notification-${type}`
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon">${type === 'error' ? '⚠️' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">×</button>
      </div>
    `

    // Add to page
    document.body.appendChild(notification)

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideInNotification 0.3s ease-out reverse'
        setTimeout(() => notification.remove(), 300)
      }
    }, 5000)

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', function() {
      notification.style.animation = 'slideInNotification 0.3s ease-out reverse'
      setTimeout(() => notification.remove(), 300)
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

    // Auto-fill salary when role is selected
    if (field === 'role') {
      const selectedRole = roleOptions.find(role => role.value === value)
      if (selectedRole) {
        setFormData(prev => ({
          ...prev,
          salary: selectedRole.salary
        }))
      }
    }
  }

  const handleSalaryBlur = (value) => {
    if (value) {
      const numValue = parseFloat(value.replace(/,/g, ''))
      if (!isNaN(numValue)) {
        setFormData(prev => ({
          ...prev,
          salary: numValue.toLocaleString('en-GB')
        }))
      }
    }
  }

  const handleSalaryFocus = (e) => {
    e.target.style.transform = 'scale(1.02)'
  }

  const handleSalaryBlurStyle = (e) => {
    e.target.style.transform = 'scale(1)'
    handleSalaryBlur(e.target.value)
  }

  const handleHoursFocus = (e) => {
    e.target.style.transform = 'scale(1.02)'
  }

  const handleHoursBlur = (e) => {
    e.target.style.transform = 'scale(1)'
  }

  const calculateSavings = () => {
    const salary = parseFloat(formData.salary.replace(/,/g, ''))
    const hours = parseFloat(formData.hours)
    const selectedTier = tierOptions.find(tier => tier.value === formData.tier)
    const aetherbloomCost = selectedTier.cost

    // Validation
    if (!salary || !hours || !aetherbloomCost) {
      showNotification('Please complete all fields before calculating.', 'error')
      return
    }

    if (salary < 15000 || salary > 200000) {
      showNotification('Please enter a realistic salary between £15,000 and £200,000.', 'error')
      return
    }

    if (hours < 1 || hours > 60) {
      showNotification('Please enter realistic hours between 1 and 60 per week.', 'error')
      return
    }

    // UK cost calculations
    const niPension = salary * 0.138
    const recruitment = salary * 0.15
    const training = salary * 0.05
    const hrOverhead = salary * 0.10
    const fixedCosts = 5400

    const ukTotal = salary + niPension + recruitment + training + hrOverhead + fixedCosts
    const savings = ukTotal - aetherbloomCost
    const percentage = ((savings / ukTotal) * 100)

    const calculatedResults = {
      salary,
      niPension,
      recruitment,
      training,
      ukTotal,
      aetherbloomCost,
      tierName: selectedTier.name,
      savings,
      percentage
    }

    setResults(calculatedResults)
    setShowResults(true)

    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('calculatorResults')
      if (resultsElement) {
        resultsElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' 
        })
      }
    }, 100)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateSavings()
    }
  }

  return (
    <section className={styles.pricingCalculatorSection} id="pricing" ref={sectionRef}>
      <div className={styles.calculatorContainer}>
        <div className={styles.calculatorHeader}>
          <h2 className={styles.calculatorHeadline}>See your potential savings</h2>
          <p className={styles.calculatorSubheadline}>
            Discover exactly how much you could save annually by partnering with Aetherbloom. Calculate the true cost of UK hiring versus our transparent outsourcing solutions.
          </p>
        </div>

        <div className={styles.calculatorCard}>
          <div className={styles.calculatorForm}>
            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Role Details</h3>
              
              <div className={styles.formGroup}>
                <label htmlFor="role" className={styles.formLabel}>Select Role</label>
                <select
                  id="role"
                  className={styles.formInput}
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                >
                  <option value="">Choose a role</option>
                  {roleOptions.map((role, index) => (
                    <option key={index} value={role.value}>
                      {role.value} (£{parseInt(role.salary).toLocaleString('en-GB')})
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="salary" className={styles.formLabel}>Annual Salary (£)</label>
                <input
                  type="text"
                  id="salary"
                  className={styles.formInput}
                  placeholder="e.g. 28,000"
                  value={formData.salary}
                  onChange={(e) => {
                    let value = e.target.value.replace(/[^\d.,]/g, '')
                    value = value.replace(/,+/g, ',').replace(/\.+/g, '.')
                    handleInputChange('salary', value)
                  }}
                  onFocus={handleSalaryFocus}
                  onBlur={handleSalaryBlurStyle}
                  onKeyPress={handleKeyPress}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="hours" className={styles.formLabel}>Hours per Week</label>
                <input
                  type="text"
                  id="hours"
                  className={styles.formInput}
                  placeholder="e.g. 40"
                  value={formData.hours}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d]/g, '')
                    handleInputChange('hours', value)
                  }}
                  onFocus={handleHoursFocus}
                  onBlur={handleHoursBlur}
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <h3 className={styles.formSectionTitle}>Aetherbloom Solution</h3>
              
              <div className={styles.formGroup}>
                <label htmlFor="tier" className={styles.formLabel}>Select Service Tier</label>
                <select
                  id="tier"
                  className={styles.formInput}
                  value={formData.tier}
                  onChange={(e) => handleInputChange('tier', e.target.value)}
                >
                  {tierOptions.map((tier, index) => (
                    <option key={index} value={tier.value}>
                      {tier.name}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                className={styles.calculatorBtn}
                onClick={calculateSavings}
              >
                Calculate Your Savings
                <span className={styles.btnArrow}>→</span>
              </button>
            </div>
          </div>

          {showResults && results && (
            <div className={styles.calculatorResults} id="calculatorResults">
              <div className={styles.resultsHeader}>
                <div className={styles.resultsIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3 className={styles.resultsTitle}>Your Annual Savings Breakdown</h3>
              </div>
              
              <div className={styles.resultsComparison}>
                <div className={`${styles.costBreakdown} ${styles.ukCost}`}>
                  <h4 className={styles.costTitle}>UK Employee Total Cost</h4>
                  <div className={styles.costAmount}>{formatCurrency(results.ukTotal)}</div>
                  <div className={styles.costDetails}>
                    <div className={styles.costItem}>
                      <span>Base Salary</span>
                      <span>{formatCurrency(results.salary)}</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>NI & Pension (13%)</span>
                      <span>{formatCurrency(results.niPension)}</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Recruitment (15%)</span>
                      <span>{formatCurrency(results.recruitment)}</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Training & Development</span>
                      <span>{formatCurrency(results.training)}</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Office, IT & Benefits</span>
                      <span>£5,400</span>
                    </div>
                  </div>
                </div>

                <div className={styles.vsDivider}>
                  <span>VS</span>
                </div>

                <div className={`${styles.costBreakdown} ${styles.aetherbloomCost}`}>
                  <h4 className={styles.costTitle}>Aetherbloom Solution</h4>
                  <div className={styles.costAmount}>{formatCurrency(results.aetherbloomCost)}</div>
                  <div className={styles.tierDetails}>
                    <span>{results.tierName}</span>
                  </div>
                </div>
              </div>

              <div className={styles.savingsSummary}>
                <div className={styles.savingsAmount}>
                  <span className={styles.savingsLabel}>Total Annual Savings</span>
                  <span className={styles.savingsValue}>{formatCurrency(results.savings)}</span>
                </div>
                <div className={styles.savingsPercentage}>
                  <span className={styles.percentageValue}>{results.percentage.toFixed(1)}%</span>
                  <span className={styles.percentageLabel}>reduction in costs</span>
                </div>
              </div>

              <div className={styles.resultsCta}>
                <a href="#strategy-session" className="btn btn-primary">
                  Claim Your Free Strategy Session
                  <span className={styles.btnArrow}>→</span>
                </a>
                <p className={styles.ctaNote}>Start saving within 72 hours with our rapid deployment process</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}