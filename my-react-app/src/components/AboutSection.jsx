// components/AboutSection.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaChalkboardTeacher, FaLaptopCode, FaBookOpen, FaAward, FaTrophy, FaUsers } from 'react-icons/fa';
import styles from './AboutSection.module.css';

const AboutSection = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const stats = [
        { value: '25+', label: 'Years of Excellence', icon: <FaAward />, color: '#3b82f6' },
        { value: '10000+', label: 'Alumni Network', icon: <FaUsers />, color: '#34d399' },
        { value: '150+', label: 'Industry Partners', icon: <FaTrophy />, color: '#fbbf24' }
    ];

    const features = [
        {
            icon: <FaChalkboardTeacher />,
            title: 'Modern Infrastructure',
            description: 'State-of-the-art labs, smart classrooms, and a vast library with digital resources',
            color: '#3b82f6',
            delay: 0.2
        },
        {
            icon: <FaLaptopCode />,
            title: 'Industry 4.0 Curriculum',
            description: 'Regularly updated syllabus aligned with current industry demands and emerging technologies',
            color: '#8b5cf6',
            delay: 0.3
        },
        {
            icon: <FaBookOpen />,
            title: 'Holistic Development',
            description: 'Focus on technical skills, soft skills, and personality development through various programs',
            color: '#ec4899',
            delay: 0.4
        }
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
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
        }
    };

    const statCardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 200
            }
        },
        hover: {
            scale: 1.05,
            y: -5,
            transition: { type: "spring", stiffness: 400 }
        }
    };

    return (
        <section className={styles.about} ref={ref}>
            {/* Background decorative elements */}
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
                        About Us
                    </motion.span>
                    <motion.h2
                        className={styles.heading}
                        variants={itemVariants}
                    >
                        India's Trusted <span className={styles.highlight}>Engineering Institute</span>
                    </motion.h2>
                    <motion.div
                        className={styles.headingUnderline}
                        variants={itemVariants}
                    />
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.text}
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <motion.p
                            className={styles.paragraph}
                            variants={itemVariants}
                        >
                            Established in <span className={styles.highlightText}>1998</span>, KIPM College of Engineering & Technology has been at the forefront of technical education in India.
                            With a legacy of excellence spanning over <span className={styles.highlightText}>two decades</span>, we have nurtured thousands of engineers who are now leading
                            innovations across the globe.
                        </motion.p>

                        <motion.div
                            className={styles.statsRow}
                            variants={itemVariants}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.statBox}
                                    variants={statCardVariants}
                                    whileHover="hover"
                                    custom={index}
                                >
                                    <div className={styles.statIcon} style={{ color: stat.color }}>
                                        {stat.icon}
                                    </div>
                                    <div className={styles.statValue}>{stat.value}</div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className={styles.features}>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.featureItem}
                                    variants={itemVariants}
                                    whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
                                    custom={index}
                                >
                                    <div className={styles.featureIconWrapper} style={{ background: `${feature.color}15` }}>
                                        <div className={styles.featureIcon} style={{ color: feature.color }}>
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.imageWrapper}
                        variants={imageVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className={styles.imageCard}>
                            <div className={styles.imageOverlay}></div>
                            <img
                                src="https://kipm-admissions-glow.lovable.app/assets/campus-hero-DNLBfdHz.jpg"
                                alt="Campus"
                            />
                            <div className={styles.imageBadge}>
                                <div className={styles.experienceBadge}>
                                    <span className={styles.experienceYear}>25+</span>
                                    <span className={styles.experienceText}>Years of Excellence</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating cards */}
                        <motion.div
                            className={styles.floatingCard1}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className={styles.floatingIcon}>🏆</div>
                            <div>Top Ranked Institute</div>
                        </motion.div>
                        <motion.div
                            className={styles.floatingCard2}
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className={styles.floatingIcon}>⭐</div>
                            <div>NAAC A+ Grade</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;