import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './collectorPayment.css'

function CollectorPayment() {
  const { id } = useParams();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Cash');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const navigate = useNavigate()
  
  // Get collector id from params or localStorage
  const getCollectorId = () => {
    if (id && !id.startsWith(':')) {
      return id;
    }
    const collector = JSON.parse(localStorage.getItem('collector'));
    return collector?._id;
  }
  
  const collectorId = getCollectorId();
  
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const paymentData = {
      paymentStatus: "completed",
      amount: amount,
      paymentMethod: method,
      cardNumber: cardNumber,
      expiry: expiry,
      cvv: cvv
    };

    axios.post(`http://localhost:3888/updatepaymentpickup/${id}`, paymentData)
      .then((result) => {
        console.log(result.data);
        alert("Payment completed successfully!");
        navigate(`/collecterpickup/${collectorId}`);
      })
      .catch((error) => {
        console.log(error);
        alert("Payment failed. Please try again.");
      })

  };

  const handleCancel = () => {
    navigate(`/collecterpickup/${collectorId}`);
  };

  return (
    <div className='form-payment'>
      <h2>Send Payment to User</h2>
      <form onSubmit={handlePayment}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required />

        <label>Payment Method:</label>
        <select value={method} onChange={e => setMethod(e.target.value)} required>
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
          <option value="Wallet">Wallet</option>
        </select>

        {method === 'Card' && (
          <>
            <label>Card Number:</label>
            <input
              type="text"
              maxLength="16"
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value)}
              required
            />

            <label>Expiry Date:</label>
            <input
              type="month"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              required
            />

            <label>CVV:</label>
            <input
              type="password"
              maxLength="3"
              value={cvv}
              onChange={e => setCvv(e.target.value)}
              required
            />
          </>
        )}

        <button className='buttn-payment' type="submit">Pay Now</button>
        {/* <button className='buttn-cancel' type="button" onClick={handleCancel}>Cancel</button> */}
      </form>
    </div>
  );
}

export default CollectorPayment;
