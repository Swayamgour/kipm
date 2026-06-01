// components/WhyChooseUs.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaHandshake, FaLaptopCode, FaUserTie, FaCheckCircle, 
  FaAward, FaUniversity, FaChartLine, FaUsers, 
  FaGlobe, FaRocket, FaShieldAlt, FaStar 
} from 'react-icons/fa';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const mainFeatures = [
    { 
      icon: <FaHandshake />, 
      title: 'Placement Cell', 
      description: 'Dedicated placement cell with 50+ top recruiters including Amazon, Microsoft, and Google',
      color: '#3b82f6',
      stats: '95% Placement Rate',
      delay: 0.2
    },
    { 
      icon: <FaLaptopCode />, 
      title: 'Industry-Ready Curriculum', 
      description: 'Curriculum designed with industry experts featuring live projects and internships',
      color: '#8b5cf6',
      stats: '50+ Industry Partners',
      delay: 0.3
    },
    { 
      icon: <FaUserTie />, 
      title: 'Expert Faculty', 
      description: 'PhD qualified faculty with extensive industry experience and research background',
      color: '#ec4899',
      stats: '90% PhD Faculty',
      delay: 0.4
    },
    { 
      icon: <FaGlobe />, 
      title: 'Global Exposure', 
      description: 'International collaborations, exchange programs, and global internship opportunities',
      color: '#10b981',
      stats: '15+ Countries',
      delay: 0.5
    },
    { 
      icon: <FaRocket />, 
      title: 'Innovation Hub', 
      description: 'Dedicated innovation center, startup incubator, and research facilities',
      color: '#f59e0b',
      stats: '50+ Startups',
      delay: 0.6
    },
    { 
      icon: <FaShieldAlt />, 
      title: '24/7 Support', 
      description: 'Round-the-clock academic support, counseling, and technical assistance',
      color: '#ef4444',
      stats: '100% Support',
      delay: 0.7
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

  const mainCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
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

  return (
    <section className={styles.whyChoose} ref={ref}>
      {/* Animated background elements */}
      <div className={styles.bgAnimation}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
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
            Why Choose KIPM?
          </motion.span>
          <motion.h2 
            className={styles.heading}
            variants={itemVariants}
          >
            Your Success is Our <span className={styles.highlight}>Priority</span>
          </motion.h2>
          <motion.div 
            className={styles.headingUnderline}
            variants={itemVariants}
          />
          <motion.p 
            className={styles.subheading}
            variants={itemVariants}
          >
            Discover what makes KIPM the preferred choice for thousands of aspiring engineers
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.mainCard}
          variants={mainCardVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ y: -5 }}
        >
          <div className={styles.cardGlow}></div>
          <div className={styles.mainCardContent}>
            <div className={styles.badges}>
              <motion.span 
                className={styles.badge}
                whileHover={{ scale: 1.05, x: 2 }}
              >
                <FaAward /> AICTE Approved
              </motion.span>
              <motion.span 
                className={styles.badge}
                whileHover={{ scale: 1.05, x: 2 }}
              >
                <FaUniversity /> AKTU Affiliated
              </motion.span>
              <motion.span 
                className={styles.badge}
                whileHover={{ scale: 1.05, x: 2 }}
              >
                <FaStar /> NAAC A+ Grade
              </motion.span>
            </div>
            <h3>Government Recognized Institute of Excellence</h3>
            <p>Approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU) with NBA accreditation for core programs</p>
            <motion.div 
              className={styles.recognitionStats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className={styles.recogItem}>
                <FaChartLine />
                <span>Ranked Among Top 50 Engineering Colleges in India</span>
              </div>
              <div className={styles.recogItem}>
                <FaUsers />
                <span>Trusted by 10,000+ Students and Alumni</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {mainFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              className={styles.featureCard}
              variants={featureCardVariants}
              whileHover="hover"
              custom={idx}
              style={{ '--card-color': feature.color }}
            >
              <div className={styles.cardBorder} style={{ background: feature.color }}></div>
              <div className={styles.featureIconWrapper} style={{ background: `${feature.color}15` }}>
                <div className={styles.featureIcon} style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <div className={styles.featureStats} style={{ background: `${feature.color}10`, color: feature.color }}>
                <FaChartLine className={styles.statsIcon} />
                <span>{feature.stats}</span>
              </div>
              <motion.div 
                className={styles.hoverEffect}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.ctaWrapper}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Journey Today</span>
            <FaRocket className={styles.ctaIcon} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;