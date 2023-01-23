import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "../Components/Footer";

const UserLogin= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
    const proceedLogin = (e) => { 
      e.preventDefault();
      if (validate()) {
        const url=`http://localhost:9090/user/login/${email}/${password}`
        fetch(url)
          .then((res) => {return res.json() })
          .then((resp) => {
            console.log(resp.status)
            if(resp.email===email && resp.password===password)
            {
              localStorage.setItem("userId",JSON.stringify(resp.id))
              navigate('/userdashboard',{replace:true})   
            }
            else{
              alert("Invalid Credentials");
              setEmail("")
              setPassword("")
            }
          })
          .catch((error)=>{
            alert("Invalid Credentials");
            setEmail("")
            setPassword("")})
            }
    };
    const validate = () => {
      let result = true;
      if (email === null || email === " " || email.length<=2) {
        result = false;
      }
      if (password === null || password === " " || password.length<=5) {
        result = false;
      }
      return result;
    };
  return (
    <div className="login">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
          </Container>
        </Navbar>
      <div className="container mt-5">
        <form className='container col-md-5' onSubmit={proceedLogin}>
          <h1>User Login</h1>
          <div className='form-group'>
            <label className="mt-3" >Enter User Email</label>
            <input type="text" value={email} className='form-control' placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <label className="mt-3">password</label>
            <input type="password" value={password} className='form-control' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <br />
          <button type="submit" className='btn btn-success'>Login</button>
          <br />
          <div className="card-footer">      <br />
            <Link to="/userregistrationservice" className="btn btn-danger" > Register here</Link>
          </div>
        </form>
      </div><br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
       
      <div className="Footer">
        <br />
          <Footer />
          </div>
    </div>
  );
};
export default UserLogin;
