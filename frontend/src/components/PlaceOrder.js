import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const PlaceOrder = ({ storedData }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [town, setTown] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const provinces = [
    "Western Province",
    "Southern Province",
    "Central Province",
    "Northern Province",
    "Eastern Province",
    "North Western Province",
    "North Central Province",
    "Uva Province",
    "Sabaragamuwa Province"
  ];

  const districts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya"
  ];

  const AddShipping = (e) => {
    e.preventDefault();
    const regex = /^(?:0|\+94)(\d{9})$/;

    if (!name || !address || !province || !district || !town || !mail || !phone) {
      alert("Please fill out all fields");
    } else if (!regex.test(phone)) {
      alert("Please enter a valid Sri Lankan phone number");
      return;
    } else {
      const shippingData = {
        name,
        address,
        province,
        district,
        town,
        mail,
        phone
      };

      localStorage.setItem("shippingData", JSON.stringify(shippingData));
      navigate("/pay", { storedData });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50%" }}>
        <div className="card">
          <div className="card-body">
            <div className="container">
              <h1>Add Order Details</h1>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="province">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue=""
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select a province
                    </option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="district">
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="town">
                  <Form.Label>Town</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Town"
                    onChange={(e) => {
                      setTown(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </Form.Group>

                <Button variant="warning" type="submit" onClick={AddShipping}>
                  Save and Proceed to Pay
                </Button>

                <br />
                <br />

                <Button variant="danger" type="submit">
                  Cancel
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
