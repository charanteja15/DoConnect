import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Components/Footer';

function HomePage() {
 const nav= useNavigate(); 
  return (
    <>
    <div className="home">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
          </Container>
        </Navbar>
        <h1 style={{color:"lightcoral" , textAlign:"center", margin:"10px"}}>Welcome to DoConnect </h1>
      <div>

          <button className='btn btn-warning btn-lg' style={{margin:"350px" , padding:"15px"}} onClick={()=>nav("/userinterfacepage")}>User</button>
          <button className="btn btn-success btn-lg" style={{ padding:"15px"}} onClick={()=>nav("/admininterfacepage")}>Admin</button>   
      </div>
    </div>
    <div className="Footer">
          <Footer />
          </div>
    </>
  )
}

export default HomePage
