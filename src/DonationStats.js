import React from 'react';
import styles from './DonationStats.css';

const DonationStats = ({ donations }) => {
  const totalDonations = donations.length;
  const totalAmount = donations.reduce((acc, donation) => donation.donationType === 'money' ? acc + parseFloat(donation.quantity) : acc, 0);

  return (
    <div className={styles.statsContainer}>
      <p className={styles.statItem}>Total Donations: {totalDonations}</p>
      <p className={styles.statItem}>Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default DonationStats;
