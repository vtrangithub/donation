import React, { useState } from 'react';
import styles from './DonationForm.css';

const DonationForm = ({ addDonation }) => {
  const [donation, setDonation] = useState({
    donorName: '',
    donationType: '',
    quantity: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonation({ ...donation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!donation.donorName || !donation.donationType || !donation.quantity || !donation.date) {
      // Handle validation error
      alert('Please fill in all fields.');
      return;
    }
    addDonation(donation);
    setDonation({
      donorName: '',
      donationType: '',
      quantity: '',
      date: ''
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.inputField} name="donorName" value={donation.donorName} onChange={handleChange} placeholder="Donor's Name" />
      <input className={styles.inputField} name="donationType" value={donation.donationType} onChange={handleChange} placeholder="Type of Donation" />
      <input className={styles.inputField} name="quantity" value={donation.quantity} onChange={handleChange} placeholder="Quantity/Amount" />
      <input className={styles.inputField} name="date" value={donation.date} onChange={handleChange} placeholder="Date of Donation" type="date" />
      <button className={styles.submitButton} type="submit">Add Donation</button>
    </form>
  );
};

export default DonationForm;
