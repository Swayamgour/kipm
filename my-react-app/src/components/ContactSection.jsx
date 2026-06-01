// components/ContactSection.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaClock, FaGlobe, FaFacebook, FaTwitter, FaLinkedin, 
  FaInstagram, FaArrowRight, FaCopy, FaCheck
} from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [copiedIndex, setCopiedIndex] = React.useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const contacts = [
    { 
      icon: <FaWhatsapp />, 
      title: 'WhatsApp', 
      value: '+91 98765 43210',
      fullValue: '+919876543210',
      subtitle: 'Quick response within minutes',
      bg: '#25D366',
      gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
      type: 'whatsapp'
    },
    { 
      icon: <FaPhoneAlt />, 
      title: 'Call Us', 
      value: '1800-123-4567',
      fullValue: '18001234567',
      subtitle: 'Toll-free number',
      bg: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      type: 'phone'
    },
    { 
      icon: <FaEnvelope />, 
      title: 'Email Us', 
      value: 'admissions@kipm.edu.in',
      fullValue: 'admissions@kipm.edu.in',
      subtitle: '24/7 email support',
      bg: '#ea4335',
      gradient: 'linear-gradient(135deg, #ea4335, #c5221f)',
      type: 'email'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      title: 'Campus Address', 
      value: ' GIDA, Gorakhpur, Uttar Pradesh — 273209',
      fullValue: 'KIPM College of Engineering & Technology, GIDA, Gorakhpur, Uttar Pradesh — 273209',
      subtitle: 'Get directions',
      bg: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      type: 'address'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed (Emergency support available)' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', url: '#', color: '#1877f2' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: <FaInstagram />, name: 'Instagram', url: '#', color: '#e4405f' }
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
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
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const handleCopy = (index, value) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleWhatsApp = (number) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleMap = () => {
    window.open('https://maps.google.com/?q=Sector+62+Noida+Uttar+Pradesh', '_blank');
  };

  return (
    <section className={styles.contact} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDecor}>
        <div className={styles.wavePattern}></div>
        <div className={styles.dotPattern}></div>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          
          <motion.h2 
            className={styles.heading}
            variants={itemVariants}
          >
            Contact <span className={styles.highlight}>Us</span>
          </motion.h2>
          <motion.div 
            className={styles.headingUnderline}
            variants={itemVariants}
          />
          <motion.p 
            className={styles.subheading}
            variants={itemVariants}
          >
            We're here to help! Reach out to us through any of these channels
          </motion.p>
        </motion.div>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <motion.div 
              className={styles.cardsGrid}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              {contacts.map((contact, idx) => (
                <motion.div
                  key={idx}
                  className={styles.card}
                  variants={cardVariants}
                  custom={idx}
                  whileHover="hover"
                  style={{ '--card-color': contact.bg }}
                >
                  <div className={styles.cardGlow} style={{ background: contact.gradient }}></div>
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper} style={{ background: `${contact.bg}15` }}>
                      <div className={styles.icon} style={{ color: contact.bg }}>
                        {contact.icon}
                      </div>
                    </div>
                    <div className={styles.info}>
                      <h4>{contact.title}</h4>
                      <p className={styles.value}>{contact.value}</p>
                      <p className={styles.subtitle}>{contact.subtitle}</p>
                    </div>
                    <div className={styles.cardActions}>
                      <motion.button 
                        className={styles.actionBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (contact.type === 'whatsapp') handleWhatsApp(contact.fullValue);
                          else if (contact.type === 'phone') handleCall(contact.fullValue);
                          else if (contact.type === 'email') handleEmail(contact.fullValue);
                          else if (contact.type === 'address') handleMap();
                        }}
                      >
                        {contact.type === 'whatsapp' && 'Message on WhatsApp'}
                        {contact.type === 'phone' && 'Call Now'}
                        {contact.type === 'email' && 'Send Email'}
                        {contact.type === 'address' && 'Get Directions'}
                        <FaArrowRight />
                      </motion.button>
                      <motion.button 
                        className={styles.copyBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(idx, contact.fullValue)}
                      >
                        {copiedIndex === idx ? <FaCheck /> : <FaCopy />}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Office Hours */}
           

            {/* Social Links */}
            <motion.div 
              className={styles.socialSection}
              variants={itemVariants}
              initial="hidden"
              animate={controls}
            >
              <h3>Connect With Us</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    className={styles.socialLink}
                    style={{ background: `${social.color}15`, color: social.color }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div 
            className={styles.mapSection}
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <SiGooglemaps className={styles.mapIcon} />
                <h3>Find Us Here</h3>
              </div>
              <div className={styles.mapWrapper}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.803247121525!2d83.26731217521812!3d26.741101976749835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399147484fce688b%3A0x81196201753b1789!2sKIPM-College%20of%20Engineering%20and%20Technology!5e1!3m2!1sen!2sin!4v1780318311201!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                  width="100%" 
                
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Campus Location"
                ></iframe>
              </div>
              <div className={styles.mapFooter}>
                <p>Sector 62, Noida, Uttar Pradesh - 201301</p>
                <p className={styles.landmark}>📍 Near Noida Electronic City Metro Station</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;