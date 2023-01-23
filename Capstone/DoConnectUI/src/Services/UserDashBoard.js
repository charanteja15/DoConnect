import React,{useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import UserLogoutService from './UserLogoutService';
import Logout from './UserLogoutService'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Components/Footer';
function UserDashBoard() {
  const navigate=useNavigate();
  useEffect(()=>{
    const userId=localStorage.getItem("userId");
    if(!userId)
    {
      navigate("/userloginservice")
    }
  },[])
  const nav=useNavigate();
  
  return (
    <div className="dashboard">
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>nav("/createquestion")}>Post Question</button>
                </Nav.Link>
                <Nav.Link>
                    <button className="btn btn-link" onClick={()=>nav("/answerquestion")}>Post Answer</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>nav("/chat")}>Chat with others</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>nav("/search")}>search</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>nav("/userlogoutservice")}>Logout</button>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <br />
      <h1 style={{textAlign:"center",color:"yellowgreen"}}>User DashBoard</h1>
      <br />
        <br />
        <br />
        <br />
        <br />
      <div className="card text-center">
     
       
          <div className="card-body">
          <h2 class="card-title">User Operations</h2>
          <br />
          <h4 className="card-text">As a user you can add a question</h4> <br />
          <h4 className="card-text">As a user you can answer any question</h4> <br />
          <h4 className="card-text">As a user you can chat with others</h4> <br />
          <h4 className="card-text">As a user you can add a question</h4> <br />

       </div>
       
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="Footer">
          <Footer />
          </div>
      </div>

        
        
     

    </div>
    
  )
}

export default UserDashBoard
