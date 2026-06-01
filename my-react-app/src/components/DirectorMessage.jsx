// components/DirectorMessage.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaLinkedin, FaEnvelope, FaAward, FaBookOpen, FaUsers } from 'react-icons/fa';
import styles from './DirectorMessage.module.css';

const DirectorMessage = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const achievements = [
        { icon: <FaAward />, label: 'Years of Experience', value: '25+' },
        { icon: <FaBookOpen />, label: 'Research Papers', value: '50+' },
        { icon: <FaUsers />, label: 'Students Mentored', value: '5000+' }
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

    const quoteVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: 0.2
            }
        }
    };

    const messageVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: 0.4
            }
        }
    };

    const profileVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: 0.6
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
        }
    };

    return (
        <section className={styles.director} ref={ref}>
            {/* Animated background elements */}
            <div className={styles.bgElements}>
                <div className={styles.gradientBg}></div>
                <div className={styles.particle1}></div>
                <div className={styles.particle2}></div>
                <div className={styles.particle3}></div>
                <div className={styles.particle4}></div>
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {/* Quote Icon */}
                    <motion.div
                        className={styles.quoteWrapper}
                        variants={quoteVariants}
                    >
                        <FaQuoteLeft className={styles.quoteIconLeft} />
                        <FaQuoteRight className={styles.quoteIconRight} />
                    </motion.div>

                    {/* Message */}
                    <motion.p
                        className={styles.message}
                        variants={messageVariants}
                    >
                        "At KIPM, we believe in nurturing not just engineers, but innovators and leaders who will shape tomorrow's world.
                        Our commitment to academic excellence, coupled with industry-aligned training, ensures every student graduates
                        with confidence and competence. We don't just teach; we transform lives and build futures."
                    </motion.p>

                    {/* Profile Section */}
                    <motion.div
                        className={styles.profileSection}
                        variants={profileVariants}
                    >
                        <motion.div
                            className={styles.imageWrapper}
                            variants={imageVariants}
                            whileHover="hover"
                        >
                            <div className={styles.imageBorder}></div>
                            <img
                                src="https://kipm-admissions-glow.lovable.app/assets/principal-DB25Ji_b.jpg"
                                alt="Dr. Rajesh Kumar Sharma"
                            />
                            <div className={styles.socialLinks}>
                                <motion.a
                                    href="#"
                                    className={styles.socialLink}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className={styles.socialLink}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaEnvelope />
                                </motion.a>
                            </div>
                        </motion.div>

                        <div className={styles.profileInfo}>
                            <h4>Dr. Rajesh Kumar Sharma</h4>
                            <p className={styles.designation}>Director, KIPM College of Engineering</p>
                            <div className={styles.qualifications}>
                                <span>Ph.D. (IIT Delhi)</span>
                                <span>M.Tech (IIT Kanpur)</span>
                                <span>B.E. (Hons)</span>
                            </div>

                            <div className={styles.achievements}>
                                {achievements.map((achievement, idx) => (
                                    <motion.div
                                        key={idx}
                                        className={styles.achievementItem}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + idx * 0.1 }}
                                    >
                                        <div className={styles.achievementIcon}>{achievement.icon}</div>
                                        <div>
                                            <div className={styles.achievementValue}>{achievement.value}</div>
                                            <div className={styles.achievementLabel}>{achievement.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Signature */}
                    <motion.div
                        className={styles.signature}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <div className={styles.signatureLine}></div>
                        <div className={styles.signatureText}>
                            <span>Dr. Rajesh Kumar Sharma</span>
                            <small>Director's Signature</small>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default DirectorMessage;