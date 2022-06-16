import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import {
  Container,
  // Navbar,
  NavDropdown,
  NavLink,
  Row,
  Col,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./views/Home";

function Navigation() {
  return (
    // <div className="App">
    //   <Navbar
    //     // bg="myBackground"
    //     bg="dark"
    //     variant="dark"
    //     sticky="top"
    //     expand="sm"
    //     collapseOnSelect
    //   >
    //     <Container>
    //       <Navbar.Brand>Logo</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Navbar.Collapse>
    //           <ul>
    //             <Link to="/">
    //               <li>Home</li>
    //             </Link>
    //             <Link to="/catering">
    //               <li>Catering</li>
    //               <NavDropdown>
    //                 <NavDropdown.Item>
    //                   <Link to="/catering/catering1">Catering</Link>
    //                 </NavDropdown.Item>
    //               </NavDropdown>
    //             </Link>
    //             <Link to="/contact">
    //               <li>Contact</li>
    //             </Link>
    //           </ul>
    //         </Navbar.Collapse>
    //       </Nav>
    //       <Navbar.Toggle />
    //     </Container>
    //   </Navbar>
    // </div>

    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Collapse>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/catering">Catering</Nav.Link>
            <Nav.Link href="/contact">Kontakt</Nav.Link>
          </Navbar.Collapse>
        </Nav>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  );
}

export default Navigation;
