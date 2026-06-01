// components/CampusInfrastructure.jsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaLaptopCode, FaMicrochip, FaTools, FaChalkboard, 
  FaBook, FaExpand, FaSearchPlus, FaHeart 
} from 'react-icons/fa';
import styles from './CampusInfrastructure.module.css';

const CampusInfrastructure = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const facilities = [
    { 
      image: 'https://kipm-admissions-glow.lovable.app/assets/computer-lab-BShVQSr5.jpg',
      title: 'Computer Lab', 
      description: 'High-end computing facilities with latest software and 24/7 internet access',
      icon: <FaLaptopCode />,
      color: '#3b82f6',
      specs: '200+ Systems | Latest Config',
      stats: '24/7 Access'
    },
    { 
      image: 'https://kipm-admissions-glow.lovable.app/assets/electronics-lab-C0XnAtc2.jpg',
      title: 'Electronics Lab', 
      description: 'Advanced electronics and communication lab with cutting-edge equipment',
      icon: <FaMicrochip />,
      color: '#8b5cf6',
      specs: 'Modern Equipment | PCB Design',
      stats: 'Industry Standard'
    },
    { 
      image: 'https://kipm-admissions-glow.lovable.app/assets/mechanical-lab-WNVPFzsK.jpg',
      title: 'Mechanical Workshop', 
      description: 'Modern workshop with CNC machines, 3D printers, and advanced manufacturing tools',
      icon: <FaTools />,
      color: '#f59e0b',
      specs: 'CNC | 3D Printing | Robotics',
      stats: 'Hands-on Training'
    },
    { 
      image: 'https://kipm-admissions-glow.lovable.app/assets/classroom-Biue54nY.jpg',
      title: 'Smart Classrooms', 
      description: 'IoT-enabled interactive learning spaces with digital boards and recording facilities',
      icon: <FaChalkboard />,
      color: '#10b981',
      specs: 'IoT Enabled | Recorded Lectures',
      stats: 'Interactive Learning'
    },
    { 
      image: 'https://kipm-admissions-glow.lovable.app/assets/library-CeQuSW60.jpg',
      title: 'Central Library', 
      description: 'Vast collection of 50,000+ books, journals, and digital resources with study zones',
      icon: <FaBook />,
      color: '#ec4899',
      specs: '50,000+ Books | Digital Access',
      stats: '24/7 Reading Room'
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
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: custom * 0.1
      }
    }),
    hover: {
      y: -15,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className={styles.infrastructure} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDecor}>
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
            Campus Tour
          </motion.span>
          <motion.h2 
            className={styles.heading}
            variants={itemVariants}
          >
            A Campus That <span className={styles.highlight}>Inspires</span>
          </motion.h2>
          <motion.div 
            className={styles.headingUnderline}
            variants={itemVariants}
          />
          <motion.p 
            className={styles.subheading}
            variants={itemVariants}
          >
            State-of-the-art infrastructure designed to provide the perfect environment for learning and innovation
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              variants={cardVariants}
              custom={idx}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ '--card-color': facility.color }}
            >
              <div className={styles.cardInner}>
                <div className={styles.imageWrapper}>
                  <img src={facility.image} alt={facility.title} />
                  <div className={styles.imageOverlay} style={{ background: `linear-gradient(135deg, ${facility.color}80, ${facility.color}20)` }}>
                    <div className={styles.zoomIcon}>
                      <FaSearchPlus />
                    </div>
                  </div>
                  <div className={styles.iconBadge} style={{ background: facility.color }}>
                    {facility.icon}
                  </div>
                </div>
                
                <div className={styles.content}>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                  
                  <div className={styles.specs}>
                    <div className={styles.specItem}>
                      <div className={styles.specDot} style={{ background: facility.color }}></div>
                      <span>{facility.specs}</span>
                    </div>
                    <div className={styles.specItem}>
                      <div className={styles.specDot} style={{ background: facility.color }}></div>
                      <span>{facility.stats}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className={styles.exploreBtn}
                    whileHover={{ x: 5 }}
                    style={{ color: facility.color }}
                  >
                    Explore More <FaExpand className={styles.btnIcon} />
                  </motion.button>
                </div>
                
                {/* Animated border glow */}
                <motion.div 
                  className={styles.cardGlow}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                    scale: hoveredIndex === idx ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ background: `radial-gradient(circle at 50% 50%, ${facility.color}40, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Virtual Tour CTA */}
        <motion.div 
          className={styles.tourCTA}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className={styles.tourContent}
            whileHover={{ scale: 1.02 }}
          >
            <FaHeart className={styles.tourIcon} />
            <div>
              <h4>Want to experience our campus?</h4>
              <p>Book a virtual tour or schedule a campus visit</p>
            </div>
            <motion.button 
              className={styles.tourBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Visit
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusInfrastructure;