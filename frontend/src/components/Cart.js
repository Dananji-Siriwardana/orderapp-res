import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Cart = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const AddCart = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/cart/add`, {
        name,
        price,
        quantity,
      });
      console.log(response.data); // Handle successful response (optional)
      setSuccessMessage('Item added to cart successfully!');
      setErrorMessage(''); // Clear any previous errors
    } catch (error) {
      console.error(error); // Handle errors gracefully (optional)
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage(''); // Clear any previous success messages
    }
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">My Cart</h1>
      <div className="row justify-content-center"> {/* Center the inner container */}
        <div className="col-md-6"> {/* Form container with a max width of 6 on medium screens */}
          <div className="card shadow border-dark">
            <div className="card-header bg-dark text-white">
              <h2>Add Item</h2>
            </div>
            <div className="card-body">
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div><br></br>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div><br></br>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div><br></br>
                <button type="button" className="btn btn-warning btn-block" onClick={AddCart}>
                  Add to Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
