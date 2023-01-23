import React, { useEffect } from 'react'
import { useState } from 'react';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Chat() {
    const[message,setMessage]=useState('');
    const[getMessages,setGetMessages]=useState([]);
    const[email,setEmail]=useState('');
    const navigate=useNavigate();

    function sendMessageAPI(){
        const url=`http://localhost:9094/chatbot/sendMessage`
        fetch(url,
            {
                method:'POST',
                body:JSON.stringify({
                    message:message,
                    email:email
                }),
                headers:{"Content-Type": 'application/json'}
            })
            .then(response=>{response.json();
                if(response.status===200)
                {
                    alert("message sent!!");
                }
                else{
                    alert("message sending failed");
                }})  
            .then((message)=>{console.log(message)}); //to convert the json format into data 
    }
    function getMessageAPI(){
        fetch("http://localhost:9094/chatbot/getMessageByEmail/"+email)
        .then(res=>res.json())
        .then((mes)=>{console.log(mes);setGetMessages(mes); console.log(getMessages);});
    }
    useEffect(()=>{
        getMessageAPI()
    });
  return (
    <>
      <div className="chat">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/createquestion")}>Post Question</button>
                </Nav.Link>
                <Nav.Link>
                    <button className="btn btn-link" onClick={()=>navigate("/answerquestion")}>Post Answer</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/chatbox")}>Chat with others</button>
                </Nav.Link>
                <Nav.Link>
                    <button className='btn btn-link' onClick={()=>navigate("/userlogoutservice")}>Logout</button>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div  className="container mt-5">
            <form className='container col-md-5' >
                <h2 style={{color:"magenta", textAlign:"center"}}></h2>
                <div className='form-group'>
                    <label className="mt-3" >choose an email </label> <br />
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="other user email" />
            </div>
            <div className='form-group'>
                <label className="mt-3" >Type your message</label> <br />
                <input type="text" placeholder="send your message" rows="5" column="50" onChange={(e)=>{setMessage(e.target.value)}} value={message} />
            </div>
            <br />
            <br />
            <div className="card-footer">
                <button type="submit" className="btn btn-outline-success" onClick={sendMessageAPI}>Send Message</button>
            </div>
            </form>
        </div>
        <div>
            <h2>Email:{email}</h2> 
               {
                    getMessages.map((data)=>{
                        return <p>
                                <h1>Message:</h1>
                                <p>{data.message}</p>
                        </p>
                        
                    })
                }    
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

export default Chat
