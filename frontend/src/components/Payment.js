import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Payment = () =>{
  // Define state variables
  const[paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const[debitCardNumber,setCard] = useState("");
  const[debitCardExpiration,setDate] = useState("");
  const[debitCardCVV,setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validateCardDetails = () => {
    let isValid = true; 
    const errors = {};

    if (paymentMethod === "debitCard") {
      // Validate card number
      if (!debitCardNumber) {
        isValid = false;
        errors.cardNumber = "Please enter a card number";
      } else if (!/^[0-9]{16}$/i.test(debitCardNumber)) {
        isValid = false;
        errors.cardNumber = "Invalid card number";
      }

      // Validate expiration date
      if (!debitCardExpiration) {
        isValid = false;
        errors.expirationDate = "Please enter an expiration date";
      } else if (!/^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$/i.test(debitCardExpiration)) {
        isValid = false;
        errors.expirationDate = "Invalid expiration date";
      }

      // Validate CVV
      if (!debitCardCVV) {
        isValid = false;
        errors.cvv = "Please enter a CVV";
      } else if (!/^[0-9]{3}$/i.test(debitCardCVV)) {
        isValid = false;
        errors.cvv = "Invalid CVV";
      }
    }

    setErrors(errors);
    return isValid;
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      // Display error alert if payment method is not selected
      alert("Please select a payment method");
      return;
    }

    if (paymentMethod === "debitCard" && !validateCardDetails()) {
      // Display error alert if any card detail is invalid
      alert("Please correct the errors in the card details");
      return;
    }

    const paymentData = {
      paymentMethod,
      debitCardNumber,
      debitCardExpiration,
      debitCardCVV
    };

    const shippingData = JSON.parse(localStorage.getItem('shippingData'));
    const data = {
      paymentData,
      shippingData,
    };

    axios.post('http://localhost:5000/check/add', data)
    .then(response => {
      localStorage.setItem('shippingData', JSON.stringify(data));
      alert("Purchase Successful");
    })
    .catch(error => {
      console.error('Purchase Unsuccessful', error);
      alert("Purchase Unsuccessful");
      Navigate('/del');
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50%" }}>
        <div className="card">
          <div className="card-body">
            <div className="container">
              <h1><center>Payment Portal</center></h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="paymentMethod">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Cash on Delivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === "cashOnDelivery"}
                    onChange={handlePaymentMethodChange}
                  />
                  <Form.Check
                    type="radio"
                    label="Pay by Card"
                    name="paymentMethod"
                    value="debitCard"
                    checked={paymentMethod === "debitCard"}
                    onChange={handlePaymentMethodChange}
                  />
                </Form.Group>
                {paymentMethod === "debitCard" && (
                  <div>
                    <Form.Group controlId="debitCardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Card Number"
                        onChange={(e) => {
                          setCard(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="debitCardExpiration">
                      <Form.Label>Expiration Date</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Expiration Date"
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group controlId="debitCardCVV">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="CVV"
                        onChange={(e) => {
                          setCvv(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                )}
                <br></br>

                <Button variant="warning" type="submit">
                  Pay Now
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
