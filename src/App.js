import React, { useState } from 'react';
import DonationForm from './DonationForm';
import DonationList from './DonationList';
import DonationStats from './DonationStats';
import './App.css';

const App = () => {
  const [donations, setDonations] = useState([]);

  const addDonation = (newDonation) => {
    setDonations([...donations, { ...newDonation, id: Date.now() }]);
  };

  const deleteDonation = (donationId) => {
    setDonations(donations.filter(donation => donation.id !== donationId));
  };

  const editDonation = (donationId, updatedDonation) => {
    setDonations(donations.map(donation => donation.id === donationId ? { ...donation, ...updatedDonation } : donation));
  };

  return (
    <div className="container">
      <h1>Animal Shelter Donation Management</h1>
      <DonationForm addDonation={addDonation} />
      <DonationList donations={donations} deleteDonation={deleteDonation} editDonation={editDonation} />
      <DonationStats donations={donations} />
    </div>
  );
}

export default App;
