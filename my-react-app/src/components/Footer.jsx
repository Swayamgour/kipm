// components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe,
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube,
  FaArrowRight, FaHeart, FaShieldAlt, FaClock,
  FaGraduationCap, FaBook, FaUserGraduate, FaHandshake
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'About Us', url: '#', icon: <FaGraduationCap /> },
    { name: 'Programs', url: '#', icon: <FaBook /> },
    { name: 'Admissions', url: '#', icon: <FaUserGraduate /> },
    { name: 'Placements', url: '#', icon: <FaHandshake /> },
    { name: 'Campus Life', url: '#', icon: <FaGlobe /> },
    { name: 'Contact Us', url: '#', icon: <FaPhoneAlt /> }
  ];

  const importantLinks = [
    { name: 'Scholarships', url: '#' },
    { name: 'Fee Structure', url: '#' },
    { name: 'Academic Calendar', url: '#' },
    { name: 'Anti-Ragging', url: '#' },
    { name: 'Grievance Redressal', url: '#' },
    { name: 'RTI', url: '#' }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Sector 62, Noida, UP - 201301', link: 'https://maps.google.com' },
    { icon: <FaPhoneAlt />, text: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: <FaEnvelope />, text: 'admissions@kipm.edu.in', link: 'mailto:admissions@kipm.edu.in' },
    { icon: <FaClock />, text: 'Mon-Sat: 9AM - 6PM', link: null }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#', color: '#1877f2' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#e4405f' },
    { icon: <FaYoutube />, name: 'YouTube', url: '#', color: '#ff0000' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} ref={ref}>
      {/* Animated background */}
      <div className={styles.footerBg}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.footerGrid}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Column 1 - About */}
          <motion.div className={styles.footerColumn} variants={itemVariants}>
            <div className={styles.logoSection}>
              <div className={styles.logoIcon}>
                <FaGraduationCap />
              </div>
              <h3>KIPM <span>College</span></h3>
            </div>
            <p className={styles.aboutText}>
              Empowering future innovators with excellence in engineering education, 
              cutting-edge infrastructure, and 100% placement assistance since 1998.
            </p>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <span>4.8 Rated by 5000+ Students</span>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
        
          {/* Column 3 - Important Links */}
        

          {/* Column 4 - Contact Info */}
          <motion.div className={styles.footerColumn} variants={itemVariants}>
            <h4>Contact Info</h4>
            <ul className={styles.contactList}>
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  {info.link ? (
                    <a href={info.link}>
                      <span className={styles.contactIcon}>{info.icon}</span>
                      {info.text}
                    </a>
                  ) : (
                    <span>
                      <span className={styles.contactIcon}>{info.icon}</span>
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Links */}
           
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
       

        {/* Bottom Bar */}
        <motion.div 
          className={styles.bottomBar}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <div className={styles.copyright}>
            <p>&copy; {currentYear} KIPM College of Engineering & Technology. All Rights Reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>
          </div>
          <div className={styles.madeWith}>
            <span>Made with <FaHeart className={styles.heartIcon} /> for Future Engineers</span>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button 
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <FaArrowRight />
      </motion.button>
    </footer>
  );
};

export default Footer;