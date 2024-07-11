import {Navbar,Nav,Container} from "react-bootstrap";
import logo from "../images/C&C Logo.png";
import cart from "../images/cart.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="basic-Navbar-Nav" />
        <Navbar.Collapse id="basic-Navbar-Nav">
          
            <Link to="#home">
            <img src={logo} alt="logo" width={150} height={50}></img>
            </Link>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="#link">Our Menu</Nav.Link>
            <Nav.Link to="#home">Reservation</Nav.Link>
            <Nav.Link to="#link">Contact</Nav.Link>
            <Nav.Link to="#home">About</Nav.Link>
            </Nav>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href ="/add">Order Now</Nav.Link>
            <Nav.Link href="/cart"><img src={cart} alt="cart" width={35} height={35}></img></Nav.Link>
            <Nav.Link to ="/login">Log in</Nav.Link>
            <Nav.Link to="/signup">Sign Up</Nav.Link>
            </Nav> 
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;

