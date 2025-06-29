// File: components/PricingCalculator/PricingCalculator.js

import { useState, useEffect, useRef } from 'react'
import styles from './PricingCalculator.module.css'

export default function PricingCalculator() {
  const [selectedRole, setSelectedRole] = useState('Customer Service Representative')
  const [selectedTier, setSelectedTier] = useState('enterprise')
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false)
  const [isTierDropdownOpen, setIsTierDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const roleDropdownRef = useRef(null)
  const tierDropdownRef = useRef(null)

  const roleOptions = [
    { name: 'Customer Service Representative', salary: 26000 },
    { name: 'Admin Assistant', salary: 25000 },
    { name: 'Technical Support Specialist', salary: 32000 },
    { name: 'Data Analyst', salary: 38000 },
    { name: 'Bookkeeper', salary: 30000 },
    { name: 'Sales Support Coordinator', salary: 28000 }
  ]

  const tierOptions = [
    { 
      id: 'essentials', 
      name: 'Digital Essentials', 
      cost: 4320, 
      hours: '20 hrs/month',
      monthly: '£360/month'
    },
    { 
      id: 'growth', 
      name: 'Digital Growth', 
      cost: 6000, 
      hours: '30 hrs/month',
      monthly: '£500/month'
    },
    { 
      id: 'enterprise', 
      name: 'Digital Enterprise', 
      cost: 8760, 
      hours: '50 hrs/month',
      monthly: '£730/month'
    },
    { 
      id: 'engagement', 
      name: 'Call Centre Engagement', 
      cost: 19200, 
      hours: '40 hrs/week',
      monthly: '£1,600/month'
    },
    { 
      id: 'sales', 
      name: 'Sales Accelerator', 
      cost: 60000, 
      hours: '3 agents',
      monthly: '£5,000/month'
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(event.target)) {
        setIsRoleDropdownOpen(false)
      }
      if (tierDropdownRef.current && !tierDropdownRef.current.contains(event.target)) {
        setIsTierDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const getSelectedRoleData = () => {
    return roleOptions.find(role => role.name === selectedRole)
  }

  const getSelectedTierData = () => {
    return tierOptions.find(tier => tier.id === selectedTier)
  }

  const calculateUKCosts = () => {
    const roleData = getSelectedRoleData()
    const salary = roleData.salary
    
    const niPension = Math.round(salary * 0.13)
    const recruitment = Math.round(salary * 0.15)
    const training = Math.round(salary * 0.05)
    const office = 5400
    
    const total = salary + niPension + recruitment + training + office

    return {
      salary,
      niPension,
      recruitment,
      training,
      office,
      total
    }
  }

  const calculateSavings = () => {
    const ukCosts = calculateUKCosts()
    const tierData = getSelectedTierData()
    const savings = ukCosts.total - tierData.cost
    const percentage = ((savings / ukCosts.total) * 100).toFixed(1)
    
    return {
      savings,
      percentage
    }
  }

  const ukCosts = calculateUKCosts()
  const tierData = getSelectedTierData()
  const savingsData = calculateSavings()

  return (
    <section className={styles.calculatorSection} id="pricing" ref={sectionRef}>
      <div className={styles.calculatorContainer}>
        <div className={styles.calculatorHeader}>
          <h2 className={styles.sectionTitle}>Calculate Your Savings</h2>
          <p className={styles.sectionSubtitle}>
            See exactly how much you could save by choosing Aetherbloom over traditional UK hiring
          </p>
        </div>

        <div className={`${styles.calculatorWrapper} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.comparisonGrid}>
            
            {/* UK Employee Costs */}
            <div className={styles.ukSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.dropdown} ref={roleDropdownRef}>
                  <button 
                    className={styles.dropdownTrigger}
                    onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                  >
                    <span className={styles.dropdownLabel}>{selectedRole}</span>
                    <span className={`${styles.dropdownArrow} ${isRoleDropdownOpen ? styles.open : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {isRoleDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {roleOptions.map((role, index) => (
                        <button
                          key={index}
                          className={`${styles.dropdownOption} ${role.name === selectedRole ? styles.selected : ''}`}
                          onClick={() => {
                            setSelectedRole(role.name)
                            setIsRoleDropdownOpen(false)
                          }}
                        >
                          <span className={styles.optionName}>{role.name}</span>
                          <span className={styles.optionSalary}>{formatCurrency(role.salary)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className={styles.totalCost}>
                  {formatCurrency(ukCosts.total)}/year
                </div>
              </div>

              <div className={styles.costBreakdown}>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Base Salary</span>
                  <span className={styles.costValue}>{formatCurrency(ukCosts.salary)}</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>NI & Pension (13%)</span>
                  <span className={styles.costValue}>{formatCurrency(ukCosts.niPension)}</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Recruitment (15%)</span>
                  <span className={styles.costValue}>{formatCurrency(ukCosts.recruitment)}</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Training & Development</span>
                  <span className={styles.costValue}>{formatCurrency(ukCosts.training)}</span>
                </div>
                <div className={styles.costItem}>
                  <span className={styles.costLabel}>Office, IT & Benefits</span>
                  <span className={styles.costValue}>{formatCurrency(ukCosts.office)}</span>
                </div>
                <div className={`${styles.costItem} ${styles.totalItem}`}>
                  <span className={styles.costLabel}>Total cost</span>
                  <span className={styles.costValue}>{formatCurrency(ukCosts.total)}</span>
                </div>
              </div>
            </div>

            {/* Aetherbloom Solution */}
            <div className={styles.aetherbloomSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.dropdown} ref={tierDropdownRef}>
                  <button 
                    className={styles.dropdownTrigger}
                    onClick={() => setIsTierDropdownOpen(!isTierDropdownOpen)}
                  >
                    <span className={styles.dropdownLabel}>Aetherbloom {tierData.name}</span>
                    <span className={`${styles.dropdownArrow} ${isTierDropdownOpen ? styles.open : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {isTierDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {tierOptions.map((tier, index) => (
                        <button
                          key={index}
                          className={`${styles.dropdownOption} ${tier.id === selectedTier ? styles.selected : ''}`}
                          onClick={() => {
                            setSelectedTier(tier.id)
                            setIsTierDropdownOpen(false)
                          }}
                        >
                          <span className={styles.optionName}>Aetherbloom {tier.name}</span>
                          <span className={styles.optionDetails}>
                            {tier.hours} • {tier.monthly}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className={styles.totalCost}>
                  {formatCurrency(tierData.cost)}/year
                </div>
              </div>

              <div className={styles.tierDetails}>
                <div className={styles.tierInfo}>
                  <span className={styles.tierLabel}>{tierData.name}</span>
                  <span className={styles.tierHours}>{tierData.hours}</span>
                  <span className={styles.tierMonthly}>{tierData.monthly}</span>
                  <div className={`${styles.costItem} ${styles.totalItem}`}>
                    <span className={styles.costLabel}>Total cost</span>
                    <span className={styles.costValue}>{formatCurrency(tierData.cost)}</span>
                  </div>
                </div>
                
                {/* Savings Information */}
                <div className={styles.savingsInfo}>
                  <div className={styles.savingsDivider}></div>
                  <div className={styles.savingsDisplay}>
                    <div className={styles.savingsAmount}>
                      <span className={styles.savingsLabel}>Annual Savings</span>
                      <span className={styles.savingsValue}>{formatCurrency(savingsData.savings)}</span>
                    </div>
                    <div className={styles.savingsPercentage}>
                      <span className={styles.percentageValue}>{savingsData.percentage}%</span>
                      <span className={styles.percentageLabel}>cost reduction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <a href="#contact" className={styles.ctaButton}>
              Claim Your Free Strategy Session
              <span className={styles.buttonArrow}>→</span>
            </a>
            <p className={styles.ctaNote}>
              Start saving within 72 hours with our rapid deployment process
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}