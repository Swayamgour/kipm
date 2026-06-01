// components/CampusAmenities.jsx
import React from 'react';
import styles from './CampusAmenities.module.css';
import { FaHome, FaUtensils, FaFutbol, FaWifi, FaBus, FaHospital } from 'react-icons/fa';

const CampusAmenities = () => {
  const amenities = [
    { icon: <FaHome />, name: 'Hostel' },
    { icon: <FaUtensils />, name: 'Mess' },
    { icon: <FaFutbol />, name: 'Sports Complex' },
    { icon: <FaWifi />, name: 'WiFi Campus' },
    { icon: <FaBus />, name: 'Bus Service' },
    { icon: <FaHospital />, name: 'Medical Facility' }
  ];

  return (
    <section className={styles.amenities}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Campus Life</span>
          <h2 className={styles.heading}>Reach New Heights In Your <span className={styles.highlight}>Career</span></h2>
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student Group" />
          </div>
          <div className={styles.amenitiesList}>
            {amenities.map((amenity, idx) => (
              <div key={idx} className={styles.amenityItem}>
                <div className={styles.amenityIcon}>{amenity.icon}</div>
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusAmenities;