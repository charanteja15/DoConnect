import React,{useEffect} from 'react'
import {  useNavigate, } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Components/Footer';

function AdminDashBoard() {
    const navigate=useNavigate();
  useEffect(()=>{
    const adminId=localStorage.getItem("adminId");
    if(!adminId)
    {
      navigate("/adminloginservice")
    }
  },[])
  return (
    <>
    <div className="dashboard">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/getapprovedquestions")}>Get Approved Question</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/getapprovedanswers")}>Get Approved Answers</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/getunapprovedquestions")}>Get Unapproved Questions</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/getunapprovedanswers")}>Get Unapproved Answers</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/adminlogoutservice")}>Admin Logout  </button>
                </Nav.Link>
            </Nav>
            <Nav>
                {/* <Nav.Link href="#deets">About us</Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      <h1 style={{textAlign:"center",color:"yellowgreen"}}>Welcome to Admin DashBoard</h1>
      <div className="card text-center">
     
       
        <div className="card-body">
          <h2 class="card-title">Admin Operations</h2>
          <br />
          <h4 className="card-text">As a Admin you can approve a question</h4> <br />
          <h4 className="card-text">As a Admin you can approve an answer </h4> <br />
          <h4 className="card-text">As a user you can unapprove an answer</h4> <br />
          <h4 className="card-text">As a user you can approve an answer</h4> <br />
        </div>
      </div>
    </div>
    <br />
        <br />
        <br />
        <div className="Footer">
          <Footer />
          </div>
    </>
  )
}

export default AdminDashBoard
