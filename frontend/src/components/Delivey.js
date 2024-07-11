import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Delivery = () => {

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <div className="container">
      <Card className="mt-5">
        <Card.Body>
          <Card.Title>Your Order Will Be Delivered Soon</Card.Title>
          <Card.Text>
            Your order will be delivered soon. Thank you for shopping with us!
          </Card.Text>
        </Card.Body>
      </Card>
      
    </div>
    </div>
  );
};

export default Delivery;
