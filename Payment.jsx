import React, { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [ordered,setOrdered] = useState(false);

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
      if (
        cardDetails.cardNumber &&
        cardDetails.cardHolderName &&
        cardDetails.expiryDate &&
        cardDetails.cvv
      ){
      //console.log("Processing card payment:", cardDetails);
      setPaymentSuccess(true);
      }
      else{
        alert('Please fill all the fields');
      }
    } else if (paymentMethod === "cod") {
      console.log("Cash on delivery selected");
      setPaymentSuccess(false);
    }
    setOrdered(true);
  };

  const handleOrder = () => {
    if(ordered){
    window.location.href = '/order';
    }
    else{
      alert('Please select payment method')
    }
  }

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
            required = {true}
          />
          <input
            type="text"
            name="cardHolderName"
            placeholder="cardHolderName"
            value={cardDetails.cardHolderName}
            onChange={handleCardDetailsChange}
            required
          />
          <input
            type="date"
            name="expiryDate"
            placeholder="expiryDate"
            value={cardDetails.expiryDate}
            onChange={handleCardDetailsChange}
            required
          />
          <input
            type="number"
            name="cvv"
            placeholder="cvv"
            value={cardDetails.cvv}
            onChange={handleCardDetailsChange}
            required
          />
        </div>
      )}
      <button onClick={handlePayment}>Make Payment</button>
      {paymentSuccess && (
        <p>Payment Successful, Order will be delivered within 3 days</p>
      )}
      {!paymentSuccess && <p>Card payment will deliver your ordered items faster</p>}
      <br />
      <button onClick={handleOrder}>Order Details</button>
    </div>
  );
}

export default Payment;
