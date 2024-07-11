import React, { useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Logo from '../images/C&C Logo.png';
import 'jspdf-autotable';

const AllShipping = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getItem();
  }, []);

  function getItem() {
    axios.get("http://localhost:5000/check/").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  const setToLocalstorage = (
    id,
    name,
    address,
    province,
    district,
    town,
    mail,
    phone,
    paymentMethod
  ) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Customer Name", name);
    localStorage.setItem("Address", address);
    localStorage.setItem("Province", province);
    localStorage.setItem("District", district);
    localStorage.setItem("Town", town);
    localStorage.setItem("Mail", mail);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Payement Method", paymentMethod);
  };

  const generatePdf = (rowData) => {
    const doc = new jsPDF();
  
    // Add company logo
    //const logoImg = new Image();
    //logoImg.src = Logo; // Assuming Logo variable contains the path to the logo image
    //doc.addImage(logoImg, "PNG", 35, 30, 30, 20); // Adjust the position and dimensions as needed
  
    doc.text("Shipping details", 80, 10);
  
    const data = [
      `Customer Name: ${rowData.name}`,
      `Address: ${rowData.address}`,
      `Province: ${rowData.province}`,
      `District: ${rowData.district}`,
      `Town: ${rowData.town}`,
      `Email: ${rowData.mail}`,
      `Phone: ${rowData.phone}`,
      `Payment Method: ${rowData.paymentMethod}`,
    ];
  
    const text = data.join("\n");
  
    doc.text(text, 20, 60); // Adjust the vertical position after adding the logo
  
    doc.save(`Shipping report - ${rowData.name}.pdf`);
  };
  

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((eachData) =>
    eachData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>View Shipping Details</h1>
      <div style={{ textAlign: "right", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search by customer name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Province</th>
              <th>District</th>
              <th>Town</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((eachData) => (
              <tr key={eachData.name}>
                <td>{eachData.name}</td>
                <td>{eachData.address}</td>
                <td>{eachData.province}</td>
                <td>{eachData.district}</td>
                <td>{eachData.town}</td>
                <td>{eachData.mail}</td>
                <td>{eachData.phone}</td>
                <td>{eachData.paymentMethod}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={() => generatePdf(eachData)}
                  >
                    Generate pdf
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllShipping;
