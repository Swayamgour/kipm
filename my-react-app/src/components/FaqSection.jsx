// components/FaqSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { 
  FaChevronDown, FaGraduationCap, FaUserCheck, 
  FaRupeeSign, FaShieldAlt, FaHeadset, FaPhoneAlt 
} from 'react-icons/fa';
import styles from './FaqSection.module.css';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const faqs = [
    {
      question: 'Program Overview',
      answer: 'We offer B.Tech in 6 specializations including CSE, AI/ML, ECE, Civil, Mechanical, along with MBA and Pharmacy programs. Each program is designed to meet industry standards with regular curriculum updates.',
      icon: <FaGraduationCap />,
      color: '#3b82f6'
    },
    {
      question: 'Eligibility & Admissions',
      answer: 'Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with minimum 50% marks. Admission is based on UPSEE/JEE Main scores or direct admission through management quota.',
      icon: <FaUserCheck />,
      color: '#8b5cf6'
    },
    {
      question: 'Fees & Payment',
      answer: 'Annual tuition fee ranges from ₹85,000 to ₹1,20,000 depending on the program. Scholarships are available for meritorious students and reserved categories. EMI options available.',
      icon: <FaRupeeSign />,
      color: '#10b981'
    },
    {
      question: 'Campus Life & Safety',
      answer: '24/7 security, CCTV surveillance, separate hostels for boys and girls, modern sports facilities, health center, and a vibrant campus environment with various student clubs.',
      icon: <FaShieldAlt />,
      color: '#f59e0b'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const accordionVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: custom * 0.1
      }
    })
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    }
  };

  return (
    <section className={styles.faq} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDecoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.span 
            className={styles.badge}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.badgeDot}></span>
            FAQs
          </motion.span>
          <motion.h2 
            className={styles.heading}
            variants={itemVariants}
          >
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </motion.h2>
          <motion.div 
            className={styles.headingUnderline}
            variants={itemVariants}
          />
          <motion.p 
            className={styles.subheading}
            variants={itemVariants}
          >
            Find answers to common questions about admissions, programs, fees, and campus life
          </motion.p>
        </motion.div>

        <div className={styles.faqWrapper}>
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={styles.accordionItem}
                variants={accordionVariants}
                initial="hidden"
                animate={controls}
                custom={index}
              >
                <motion.button 
                  className={`${styles.accordionButton} ${openIndex === index ? styles.active : ''}`}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.99 }}
                  style={{ '--button-color': faq.color }}
                >
                  <div className={styles.buttonLeft}>
                    <div className={styles.iconWrapper} style={{ background: `${faq.color}15`, color: faq.color }}>
                      {faq.icon}
                    </div>
                    <span>{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.chevronWrapper}
                    style={{ background: `${faq.color}10` }}
                  >
                    <FaChevronDown className={styles.chevron} style={{ color: faq.color }} />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className={styles.accordionContent}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className={styles.contentInner}>
                        <div className={styles.contentLine} style={{ background: faq.color }}></div>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Help Center Card */}
          <motion.div 
            className={styles.helpCenter}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ y: -5 }}
          >
            <div className={styles.helpIcon}>
              <FaHeadset />
            </div>
            <h4>Still have questions?</h4>
            <p>Our admission counselors are here to help you 24/7</p>
            <motion.button 
              className={styles.helpBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt /> Talk to Counselor
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;