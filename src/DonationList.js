import React from 'react';
import styles from './DonationList.css';

const DonationList = ({ donations, deleteDonation }) => {
  return (
    <div className={styles.listContainer}>
      {donations.map(donation => (
        <div key={donation.id} className={styles.donationItem}>
          <div>
            <p>Donor: {donation.donorName}</p>
            <p>Type: {donation.donationType}</p>
            <p>Quantity: {donation.quantity}</p>
            <p>Date: {donation.date}</p>
          </div>
          <div>
            <button className={styles.deleteButton} onClick={() => deleteDonation(donation.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonationList;
