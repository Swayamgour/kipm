// components/ProgramsSection.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
    FaCode, FaMicrochip, FaHardHat, FaBrain, FaCar, FaFlask,
    FaUsers, FaClock, FaAward, FaArrowRight
} from 'react-icons/fa';
import styles from './ProgramsSection.module.css';

const ProgramsSection = () => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const leftPrograms = [
        {
            icon: <FaCode />,
            name: 'Computer Science & Engineering',
            seats: 120,
            duration: '4 Years',
            accreditation: 'NBA Accredited',
            color: '#3b82f6',
            gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)'
        },
        {
            icon: <FaMicrochip />,
            name: 'Electronics & Communication',
            seats: 90,
            duration: '4 Years',
            accreditation: 'AICTE Approved',
            color: '#8b5cf6',
            gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
        },
        {
            icon: <FaHardHat />,
            name: 'Civil Engineering',
            seats: 75,
            duration: '4 Years',
            accreditation: 'AKTU Affiliated',
            color: '#f59e0b',
            gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
        }
    ];

    const rightPrograms = [
        {
            icon: <FaBrain />,
            name: 'Artificial Intelligence & ML',
            seats: 60,
            duration: '4 Years',
            accreditation: 'Industry Endorsed',
            color: '#ec4899',
            gradient: 'linear-gradient(135deg, #ec4899, #db2777)'
        },
        {
            icon: <FaCar />,
            name: 'Mechanical Engineering',
            seats: 90,
            duration: '4 Years',
            accreditation: 'NBA Accredited',
            color: '#10b981',
            gradient: 'linear-gradient(135deg, #10b981, #059669)'
        },
        {
            icon: <FaFlask />,
            name: 'MBA & Pharmacy',
            seats: 120,
            duration: '2 Years',
            accreditation: 'AICTE Approved',
            color: '#ef4444',
            gradient: 'linear-gradient(135deg, #ef4444, #dc2626)'
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

    const cardVariants = {
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: custom * 0.1
            }
        }),
        hover: {
            scale: 1.02,
            y: -8,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const rightCardVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.9 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 200,
                delay: custom * 0.1
            }
        }),
        hover: {
            scale: 1.02,
            y: -8,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const ProgramCard = ({ program, index, isRight }) => {
        const cardVariant = isRight ? rightCardVariants : cardVariants;

        return (
            <motion.div
                className={styles.programCard}
                variants={cardVariant}
                whileHover="hover"
                custom={index}
                style={{ '--card-color': program.color }}
            >
                <div className={styles.cardGlow} style={{ background: program.gradient }}></div>
                <div className={styles.cardContent}>
                    <div className={styles.iconWrapper} style={{ background: `${program.color}15`, color: program.color }}>
                        {program.icon}
                    </div>
                    <div className={styles.programInfo}>
                        <h4>{program.name}</h4>
                        <div className={styles.programMeta}>
                            <span className={styles.metaItem}>
                                <FaUsers className={styles.metaIcon} />
                                Seats: <strong>{program.seats}</strong>
                            </span>
                            <span className={styles.metaItem}>
                                <FaClock className={styles.metaIcon} />
                                {program.duration}
                            </span>
                        </div>
                        <div className={styles.accreditationBadge} style={{ background: `${program.color}10`, color: program.color }}>
                            <FaAward className={styles.accreditationIcon} />
                            {program.accreditation}
                        </div>
                    </div>
                    <motion.button
                        className={styles.applyBtn}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Apply Now <FaArrowRight />
                    </motion.button>
                </div>
            </motion.div>
        );
    };

    return (
        <section className={styles.programs} ref={ref}>
            {/* Background decoration */}
            <div className={styles.bgPattern}>
                <div className={styles.patternDot}></div>
                <div className={styles.patternDot}></div>
                <div className={styles.patternDot}></div>
                <div className={styles.patternDot}></div>
                <div className={styles.patternDot}></div>
                <div className={styles.patternDot}></div>
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
                        Academic Excellence
                    </motion.span>
                    <motion.h2
                        className={styles.heading}
                        variants={itemVariants}
                    >
                        Programs We <span className={styles.highlight}>Offer</span>
                    </motion.h2>
                    <motion.div
                        className={styles.headingUnderline}
                        variants={itemVariants}
                    />
                    <motion.p
                        className={styles.subheading}
                        variants={itemVariants}
                    >
                        Choose from our diverse range of industry-aligned programs designed for future leaders
                    </motion.p>
                </motion.div>

                <div className={styles.grid}>
                    <div className={styles.column}>
                        {leftPrograms.map((program, idx) => (
                            <ProgramCard key={idx} program={program} index={idx} isRight={false} />
                        ))}
                    </div>
                    <div className={styles.column}>
                        {rightPrograms.map((program, idx) => (
                            <ProgramCard key={idx} program={program} index={idx} isRight={true} />
                        ))}
                    </div>
                </div>

                {/* <motion.div
                    className={styles.viewAllWrapper}
                    variants={itemVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.button
                        className={styles.viewAllBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Programs <FaArrowRight />
                    </motion.button>
                </motion.div> */}
            </div>
        </section>
    );
};

export default ProgramsSection;