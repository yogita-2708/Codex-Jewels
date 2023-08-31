import React, { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false); // New state

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevCardDetails) => ({
      ...prevCardDetails,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    if (paymentMethod === "card") {
      console.log("Processing card payment:", cardDetails);
      setPaymentSuccess(false);
    } else if (paymentMethod === "cod") {
      console.log("Cash on delivery selected");
      setPaymentSuccess(true);
    }
  };

  return (
    <div>
      <h1>Payment Gateway</h1>
      <div>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select</option>
            <option value="card">Card Payment</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </label>
      </div>
      {paymentMethod === "card" && (
        <div>
          <h2>Card Details</h2>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={handleCardDetailsChange}
          />
          <input
            type="text"
            name="cardHolderName"
            placeholder="cardHolderName"
            value={cardDetails.cardHolderName}
            onChange={handleCardDetailsChange}
          />
          <input
            type="date"
            name="expiryDate"
            placeholder="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleCardDetailsChange}
          />
          <input
            type="number"
            name="cvv"
            placeholder="cvv"
            value={cardDetails.cvv}
            onChange={handleCardDetailsChange}
          />
        </div>
      )}
      <button onClick={handlePayment}>Make Payment</button>
      {paymentSuccess && (
        <p>Payment Successful Order will be delivered within 5 days</p>
      )}
      {!paymentSuccess && <p>Order will be delivered within 7 days</p>}
    </div>
  );
}

export default Payment;
