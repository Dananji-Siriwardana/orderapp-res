import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useEffect,useState} from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";


const UpdateCart=()=> {

//******************************************************************************** */
const [id,setCartId] = useState(0);
const [name,setName] = useState("");
const [price,setPrice] = useState("");
const [quantity,setQuantity] = useState("");

// const [ItemCategories,setItemCategories] = useState("");

const navigate = useNavigate();

useEffect(()=> {
    setCartId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setPrice(localStorage.getItem("price"));
    setQuantity(localStorage.getItem("quantity"));
    
},[])


const handleUpdate=(e)=>{
    e.preventDefault();
   console.log("id....",id);
  axios.post(`http://localhost:5000/cart/update/${id}`,
    {
        name:name,
        price:price,
        quantity:quantity,
        
      //  ItemCategories:ItemCategories

    }
  ).then(()=> {
    alert("Cart updated!!");
    navigate("/cart");
  });
  
};

//******************************************************************************** */

  return (
    <>
    <h1 style={{textAlign:"center"}}>Update Cart</h1>
    <div className="container">
      
        <Form onSubmit={handleUpdate}>


        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Food Name</Form.Label>
          <Form.Control type="String" placeholder="Enter Food Name" 
          value={name}
            onChange={(e)=>{setName(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control type="Number" placeholder="Enter Price"
          value={price}
          onChange={(e)=>{setPrice(e.target.value);

          }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="Number" placeholder="Enter quantity"
          value={quantity}
          onChange={(e)=>{setQuantity(e.target.value);

          }}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Item Categories</Form.Label> 
          <Form.Text className="text-muted"
          onChange={(e)=>{setItemCategories(e.target.value);

          }}>
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicCheckbox1">
          <Form.Check type="checkbox" label="Meat" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox2">
          <Form.Check type="checkbox" label="Vegetables" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox3">
          <Form.Check type="checkbox" label="spices" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox4">
          <Form.Check type="checkbox" label="Fish" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox5">
          <Form.Check type="checkbox" label="Flour" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox6">
          <Form.Check type="checkbox" label="Herbs" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox7">
          <Form.Check type="checkbox" label="Fruits" />
        </Form.Group>

        </Form.Group> */}

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I certify that the information given above is true and correct" />
        </Form.Group> */}

        <Button type='submit'>Update</Button>
          

        </Form>
            </div>
    </>
    
  );
};

export default UpdateCart;