import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

const AllCart = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  function getItem() {
    axios.get("https://orderapp-res-backend.vercel.app/cart/").then((res) => {
      console.log(res.data);
      setData(res.data);
      setTotal(
        res.data.reduce((acc, cur) => {
          return acc + cur.price * cur.quantity;
        }, 0)
      );
    });
  }

  function deleteItem(id) {
    axios.delete(`https://orderapp-res-backend.vercel.app/cart/${id}`).then((res) => {
      getItem();
    });
  }

  const setToLocalstorage = (id, name, price, quantity, total) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("total", total);
  };

  const buyItems = () => {
    navigate("/order");
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>View Cart</h1>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Food Name</th>
              <th>Price (Rs.)</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData) => {
              return (
                <tr key={eachData._id}>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>Rs. {eachData.price}</td>
                  <td>{eachData.quantity}</td>
                  <td>
                    <div>
                      <Link to={`/updatecart`}>
                        <Button
                          variant="warning"
                          onClick={() =>
                            setToLocalstorage(
                              uuidv4(),
                              eachData.name,
                              eachData.price,
                              eachData.quantity,
                              eachData.price * eachData.quantity
                            )
                          }
                        >
                          Update
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => deleteItem(eachData._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Link to={`/add`}>
          <Button variant="success">Add New</Button>
        </Link>

        <div className="text-center">
          <h2>Total: Rs. {total.toFixed(2)}</h2>
          <Button variant="primary" onClick={buyItems}>
            Buy
          </Button>
        </div>
      </div>
    </>
  );
};

export default AllCart;
