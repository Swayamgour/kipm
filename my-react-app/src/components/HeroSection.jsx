// components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaUsers, FaBuilding, FaChartLine, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import styles from './HeroSection.module.css';
import { scrollToAdmission } from './scrollToAdmission';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: <FaUsers />, value: '5000+', label: 'Alumni', color: '#60a5fa', delay: 0.2 },
    { icon: <FaBuilding />, value: '50+', label: 'Recruiters', color: '#34d399', delay: 0.3 },
    { icon: <FaChartLine />, value: '100%', label: 'Placement Aid', color: '#fbbf24', delay: 0.4 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.08,
      y: -10,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background Image */}
      <div className={styles.bgImage}></div>
      
      {/* Animated gradient background */}
      <div 
        className={styles.animatedBg}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0.6) 100%)`
        }}
      />
      
      <div className={styles.overlay}></div>
      
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className={styles.badgeWrapper}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Since 1998 • AICTE Approved
            </span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            variants={itemVariants}
          >
            Shape Your Future at
            <span className={styles.gradientText}> KIPM College</span>
            <div className={styles.titleUnderline}></div>
          </motion.h1>

          <motion.p 
            className={styles.description}
            variants={itemVariants}
          >
            Empowering future innovators with excellence in education, cutting-edge infrastructure, 
            and <span className={styles.highlightText}>100% placement assistance</span>
          </motion.p>

          <motion.div 
            className={styles.buttonGroup}
            variants={itemVariants}
          >
            <motion.button 
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAdmission}
            >
              Apply Now <FaArrowRight className={styles.btnIcon} />
            </motion.button>
            <motion.button 
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05, backgroundColor: 'white', color: '#2563eb' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className={styles.btnIcon} /> Call Counselor
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.statsContainer}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              variants={statCardVariants}
              whileHover="hover"
              custom={index}
              style={{ borderBottomColor: stat.color }}
            >
              <motion.div 
                className={styles.statIcon}
                animate={floatingAnimation}
                style={{ color: stat.color }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className={styles.statValue}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className={styles.statLabel}>{stat.label}</div>
              <div className={styles.statProgress} style={{ background: stat.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <div className={styles.scrollText}>Scroll Down</div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;