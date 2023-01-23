import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function GetUnApprovedAnswers() {
  const navigate=useNavigate();
  const[unApprovedAnswers,setUnApprovedAnswers]=useState([]);
  const[isLoading,setIsLoading]=useState(false);

  function getAllUnApprovedAnswersAPI(){
    setIsLoading(true)
    fetch("http://localhost:9090/admin/getUnApprovedAnswers")
    .then((response)=>{return response.json()})
    .then((answers)=>{console.log(answers);setUnApprovedAnswers(answers);setIsLoading(false)})
  } 

  const approvedAnswers=(id)=>{
    setIsLoading(true)
    fetch(`http://localhost:9090/admin/approveAnswer/${id}`,{
      method:"PUT",
      mode:"cors"
    })
    .then((response)=>{return response.json()})
    .then((answers)=>{console.log("approved answer: ",id);
    getAllUnApprovedAnswersAPI()})
  }
  const handleChange=(data)=>{
      approvedAnswers(data.id)
  }

  

  // function getAllUnApprovedAnswersAPI(){
  //   setIsLoading(true)
  //   fetch("http://localhost:9090/admin/getUnApprovedAnswers")
  //   .then((response)=>{return response.json()})
  //   .then((answers)=>{console.log(answers);setUnApprovedAnswers(answers);setIsLoading(false)})
  // }

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
      <button type="submit" className="btn btn-success" onClick={getAllUnApprovedAnswersAPI}>Get All Un Approved Answers</button>
      {isLoading && <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      <table  className='table table-striped col-md-4'>
            <thead> <tr><th>Answer Id</th> <th>Answer</th>  <th>Action</th>     </tr> </thead>
             <tbody>
                   {
                            unApprovedAnswers.map((answer)=>{ 
                             return <tr  key={answer.id}> <td>{answer.id}</td> <td>{answer.answer}</td>  <td>{answer.answer_user_id}</td>   <td>{answer.question_id}</td>    
                            {/* //     unique id inside  sql server is key */}                     
                                    <td>
                                        <button type="submit" className="btn btn-success" onClick={()=>handleChange(answer)}>Approve Answer</button>
                                   </td>
                                  </tr>
                                   
                            })
                    } 

              </tbody>
        </table>
    </div>
  )
}

export default GetUnApprovedAnswers;
