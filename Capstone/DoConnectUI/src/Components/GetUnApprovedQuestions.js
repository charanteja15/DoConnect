import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function GetUnApprovedQuestions() {
  const navigate=useNavigate();
  const[unApprovedQuestions,setUnApprovedQuestions]=useState([]);
  const[isLoading,setIsLoading]=useState(false);

  function getAllUnApprovedQuestionsAPI(){
    setIsLoading(true)
    fetch("http://localhost:9090/admin/getUnApprovedQuestions")
    .then((response)=>{return response.json()})
    .then((questions)=>{console.log(questions);setUnApprovedQuestions(questions);setIsLoading(false)})
  }
  
  const approvedQuestions=(id)=>{
    setIsLoading(true)
    fetch(`http://localhost:9090/admin/approveQuestion/${id}`,{
      method:"PUT",
      mode:"cors"
    })
    .then((response)=>{return response.json()})
    .then((questions)=>{console.log("question approved ",id);
    getAllUnApprovedQuestionsAPI()})
  }
  const handleChange=(data)=>{
      approvedQuestions(data.id)
  }

  return (
    <div className="login">

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
      <button type="submit" className="btn btn-success" onClick={getAllUnApprovedQuestionsAPI}>Get All Un Approved Questions</button>
      {isLoading && <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      <table  className='table table-striped col-md-4'>
            <thead> <tr><th>Question Id</th> <th>Question</th>  <th>Topic</th> <th>Action by</th>    </tr> </thead>
             <tbody>
                   {
                            unApprovedQuestions.map((question)=>{ 
                             return  <tr  key={question.id}><td>{question.id}</td> <td>{question.question}</td> 
                                    {/*unique id inside sql server is key */}
                                  <td>{question.topic}</td> 
                                  <td>
                                    <button type="submit" className="btn btn-success" onClick={()=>handleChange(question)}>Approve</button>
                                
                                  </td>
                              
                              
                              </tr> 
                            
                         })
                         
                    
                         
                   } 

                </tbody>
        </table>
    </div>
  )
}

export default GetUnApprovedQuestions;
