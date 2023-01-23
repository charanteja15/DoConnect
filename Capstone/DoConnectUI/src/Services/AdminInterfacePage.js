import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Components/Footer';


function AdminInterfacePage() {
    const navigate=useNavigate();
  return (
    <>
    <div className="interface" >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
               
            </Nav>
            <Nav>
                {/* <Nav.Link href="#deets">About us</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <h1 style={{color:"rgb(243, 169, 223);", textAlign:"center"}}>Choose your method</h1>
        <button type="submit" className="btn btn-success" style={{margin:"350px" , padding:"15px"}} onClick={()=>navigate("/adminloginservice")}>Admin Login</button>
        <button type="submit" className="btn btn-success" style={{ padding:"15px"}}  onClick={()=>navigate("/adminregistrationservice")}> Admin Registration</button>
        </div>
        <div className="Footer">
          <Footer />
          </div>
        </>
  );
}
export default AdminInterfacePage
