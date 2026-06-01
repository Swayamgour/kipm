// components/StudentBenefits.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaGraduationCap, FaCertificate, FaHandsHelping, 
  FaLaptopCode, FaBriefcase, FaGlobe, FaTrophy,
  FaRocket, FaStar, FaArrowRight
} from 'react-icons/fa';
import styles from './StudentBenefits.module.css';

const StudentBenefits = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const benefits = [
    { 
      icon: <FaGraduationCap />, 
      title: 'AKTU Degree', 
      description: 'Recognized degree from Dr. A.P.J. Abdul Kalam Technical University with global acceptance',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      stats: 'Globally Recognized',
      delay: 0.2
    },
    { 
      icon: <FaCertificate />, 
      title: 'Industry Certifications', 
      description: 'Free certifications from Microsoft, AWS, Google, and leading tech companies to boost your resume',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      stats: '50+ Certifications',
      delay: 0.3
    },
    { 
      icon: <FaHandsHelping />, 
      title: 'Placement Assistance', 
      description: '100% placement assistance with top companies including Amazon, Microsoft, Google, and more',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      stats: '95% Placement Rate',
      delay: 0.4
    },
    { 
      icon: <FaLaptopCode />, 
      title: 'Practical Learning', 
      description: 'Hands-on experience with live projects, hackathons, and industry-sponsored labs',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      stats: '100+ Live Projects',
      delay: 0.5
    },
    { 
      icon: <FaBriefcase />, 
      title: 'Internship Opportunities', 
      description: 'Guaranteed internships with top companies and startups across various industries',
      color: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
      stats: '200+ Companies',
      delay: 0.6
    },
    { 
      icon: <FaGlobe />, 
      title: 'Global Exposure', 
      description: 'International collaborations, student exchange programs, and global learning opportunities',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
      stats: '15+ Countries',
      delay: 0.7
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: custom * 0.1
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className={styles.benefits} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDecor}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gridPattern}></div>
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
            Student Success
          </motion.span>
          <motion.h2 
            className={styles.heading}
            variants={itemVariants}
          >
            What You Walk <span className={styles.highlight}>Away With</span>
          </motion.h2>
          <motion.div 
            className={styles.headingUnderline}
            variants={itemVariants}
          />
          <motion.p 
            className={styles.subheading}
            variants={itemVariants}
          >
            Beyond the degree, we equip you with everything you need to succeed in your career
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
              custom={idx}
              whileHover="hover"
              style={{ '--card-color': benefit.color }}
            >
              <div className={styles.cardBorder} style={{ background: benefit.gradient }}></div>
              
              <motion.div 
                className={styles.iconWrapper}
                animate={floatingAnimation}
                style={{ background: `${benefit.color}15` }}
              >
                <div className={styles.icon} style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
              </motion.div>
              
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              
              <div className={styles.statsBadge} style={{ background: `${benefit.color}10`, color: benefit.color }}>
                <FaStar className={styles.statsIcon} />
                <span>{benefit.stats}</span>
              </div>
              
              <motion.button 
                className={styles.learnMore}
                whileHover={{ x: 5 }}
                style={{ color: benefit.color }}
              >
                Learn More <FaArrowRight className={styles.arrowIcon} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Metrics */}
        <motion.div 
          className={styles.metrics}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div className={styles.metricItem} variants={itemVariants}>
            <FaTrophy className={styles.metricIcon} style={{ color: '#fbbf24' }} />
            <div>
              <div className={styles.metricValue}>98%</div>
              <div className={styles.metricLabel}>Student Satisfaction</div>
            </div>
          </motion.div>
          <motion.div className={styles.metricItem} variants={itemVariants}>
            <FaRocket className={styles.metricIcon} style={{ color: '#60a5fa' }} />
            <div>
              <div className={styles.metricValue}>100+</div>
              <div className={styles.metricLabel}>Recruiters</div>
            </div>
          </motion.div>
          <motion.div className={styles.metricItem} variants={itemVariants}>
            <FaGraduationCap className={styles.metricIcon} style={{ color: '#34d399' }} />
            <div>
              <div className={styles.metricValue}>5000+</div>
              <div className={styles.metricLabel}>Alumni Network</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentBenefits;