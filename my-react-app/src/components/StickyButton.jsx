// components/StickyButton.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaRocket } from 'react-icons/fa';
import styles from './StickyButton.module.css';

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showOffer, setShowOffer] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Hide offer after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    const formSection = document.querySelector('#admission-form') || document.querySelector('.formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section') || document.querySelector('.contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const quickActions = [
    { icon: <FaWhatsapp />, label: 'WhatsApp', action: handleWhatsApp, color: '#25D366' },
    { icon: <FaPhoneAlt />, label: 'Call Now', action: scrollToContact, color: '#3b82f6' },
    { icon: <FaEnvelope />, label: 'Email', action: scrollToContact, color: '#ea4335' },
    { icon: <FaGraduationCap />, label: 'Apply Now', action: scrollToForm, color: '#f59e0b' }
  ];

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const expandedVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const offerVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    },
    exit: {
      opacity: 0,
      x: -20,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.stickyContainer}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Offer Badge */}
          <AnimatePresence>
            {showOffer && (
              <motion.div
                className={styles.offerBadge}
                variants={offerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FaRocket className={styles.offerIcon} />
                <div className={styles.offerContent}>
                  <span className={styles.offerTitle}>Limited Time Offer!</span>
                  <span className={styles.offerText}>Early Bird Discount - Apply Now</span>
                </div>
                <button 
                  className={styles.closeOffer}
                  onClick={() => setShowOffer(false)}
                >
                  <FaTimes />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className={styles.expandedMenu}
                variants={expandedVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className={styles.menuHeader}>
                  <h4>Quick Actions</h4>
                  <button 
                    className={styles.closeMenu}
                    onClick={() => setIsExpanded(false)}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className={styles.menuItems}>
                  {quickActions.map((action, idx) => (
                    <motion.button
                      key={idx}
                      className={styles.menuItem}
                      variants={itemVariants}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={action.action}
                      style={{ '--item-color': action.color }}
                    >
                      <span className={styles.menuIcon} style={{ color: action.color }}>
                        {action.icon}
                      </span>
                      <span>{action.label}</span>
                      <FaArrowRight className={styles.menuArrow} />
                    </motion.button>
                  ))}
                </div>
                <div className={styles.menuFooter}>
                  <p>Get instant assistance</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            className={`${styles.stickyButton} ${isExpanded ? styles.expanded : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={!isExpanded ? pulseAnimation : {}}
          >
            <div className={styles.buttonContent}>
              <FaGraduationCap className={styles.buttonIcon} />
              <span className={styles.buttonText}>REGISTER NOW</span>
              <motion.div
                className={styles.buttonBadge}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 2 }}
              >
                2024
              </motion.div>
            </div>
            <FaArrowRight className={`${styles.arrowIcon} ${isExpanded ? styles.rotated : ''}`} />
          </motion.button>

          {/* Progress Indicator */}
          <motion.div 
            className={styles.progressIndicator}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyButton;