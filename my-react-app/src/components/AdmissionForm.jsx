// components/AdmissionForm.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { 
  FaUser, FaPhoneAlt, FaEnvelope, FaGraduationCap, 
  FaArrowRight, FaCheckCircle, FaClock, FaShieldAlt,
  FaWhatsapp, FaPhoneVolume, FaCalendarAlt
} from 'react-icons/fa';
import styles from './AdmissionForm.module.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        course: ''
      });
    }, 3000);
  };

  const courses = [
    { value: 'B.Tech Computer Science', label: 'B.Tech Computer Science & Engineering', seats: 'Limited Seats', popular: true },
    { value: 'B.Tech AI & ML', label: 'B.Tech Artificial Intelligence & ML', seats: 'Limited Seats', popular: true },
    { value: 'B.Tech Electronics', label: 'B.Tech Electronics & Communication', seats: 'Available', popular: false },
    { value: 'B.Tech Civil', label: 'B.Tech Civil Engineering', seats: 'Available', popular: false },
    { value: 'B.Tech Mechanical', label: 'B.Tech Mechanical Engineering', seats: 'Available', popular: false },
    { value: 'MBA', label: 'Master of Business Administration (MBA)', seats: 'Limited Seats', popular: true },
    { value: 'Pharmacy', label: 'Bachelor of Pharmacy (B.Pharm)', seats: 'Available', popular: false }
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

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.3
      }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
    blur: { scale: 1, transition: { type: "spring", stiffness: 300 } }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", damping: 15, stiffness: 200 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className={styles.formSection} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDecor}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.formGrid}>
          <motion.div 
            className={styles.formInfo}
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
              Start Your Journey
            </motion.span>
            <motion.h2 
              className={styles.heading}
              variants={itemVariants}
            >
              Apply for <span className={styles.highlight}>Admission</span>
            </motion.h2>
            <motion.div 
              className={styles.headingUnderline}
              variants={itemVariants}
            />
            <motion.p 
              className={styles.description}
              variants={itemVariants}
            >
              Take the first step towards a promising career. Fill out the form and our admission counselors will get back to you within 24 hours.
            </motion.p>

            <motion.div 
              className={styles.infoCards}
              variants={containerVariants}
            >
              <motion.div className={styles.infoCard} variants={itemVariants}>
                <FaClock className={styles.infoIcon} />
                <div>
                  <h4>Quick Response</h4>
                  <p>Get callback within 24 hours</p>
                </div>
              </motion.div>
              <motion.div className={styles.infoCard} variants={itemVariants}>
                <FaShieldAlt className={styles.infoIcon} />
                <div>
                  <h4>Secure Application</h4>
                  <p>Your data is safe with us</p>
                </div>
              </motion.div>
              <motion.div className={styles.infoCard} variants={itemVariants}>
                <FaWhatsapp className={styles.infoIcon} />
                <div>
                  <h4>WhatsApp Support</h4>
                  <p>Connect on WhatsApp for quick queries</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.formWrapper}
            variants={formVariants}
            initial="hidden"
            animate={controls}
          >
            <div className={styles.formHeader}>
              <h3>Admission Enquiry Form</h3>
              <p>Fill in your details to get started</p>
            </div>

            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div 
                  className={styles.successMessage}
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <FaCheckCircle className={styles.successIcon} />
                  <h4>Application Submitted!</h4>
                  <p>Thank you for your interest. Our counselor will call you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className={styles.form}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.inputGroup}>
                    <label>
                      <FaUser className={styles.inputIcon} />
                      Full Name
                    </label>
                    <motion.div
                      animate={focusedField === 'name' ? 'focus' : 'blur'}
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </motion.div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      <FaPhoneAlt className={styles.inputIcon} />
                      Mobile Number
                    </label>
                    <motion.div
                      animate={focusedField === 'mobile' ? 'focus' : 'blur'}
                      variants={inputVariants}
                    >
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('mobile')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </motion.div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      <FaEnvelope className={styles.inputIcon} />
                      Email Address
                    </label>
                    <motion.div
                      animate={focusedField === 'email' ? 'focus' : 'blur'}
                      variants={inputVariants}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </motion.div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>
                      <FaGraduationCap className={styles.inputIcon} />
                      Select Course
                    </label>
                    <motion.div
                      animate={focusedField === 'course' ? 'focus' : 'blur'}
                      variants={inputVariants}
                    >
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('course')}
                        onBlur={() => setFocusedField(null)}
                        required
                      >
                        <option value="">Choose your preferred course</option>
                        {courses.map((course, idx) => (
                          <option key={idx} value={course.value}>
                            {course.label} {course.popular ? '⭐' : ''}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>

                  <motion.button 
                    type="submit" 
                    className={styles.submitBtn}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.loader}></span>
                    ) : (
                      <>
                        Get a Call Back <FaArrowRight className={styles.btnIcon} />
                      </>
                    )}
                  </motion.button>

                  <p className={styles.terms}>
                    By submitting, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;