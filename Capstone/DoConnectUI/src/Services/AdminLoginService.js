import { useState ,useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "../Components/Footer";
const AdminLoginService = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  useEffect(()=>{
      const adminId=localStorage.getItem("adminId");
      if(adminId)
      {
        navigate("/admindashboard")
      }
    },[])
    const proceedLogin = (e) => { 
      e.preventDefault();
      if (validate()) {
        const url=`http://localhost:9090/admin/login/${email}/${password}`
        fetch(url)
          .then((response) => {return response.json() })
          .then((data) => {
            console.log(data.status)
            if(data.email===email && data.password===password)
            {
              localStorage.setItem("adminId",JSON.stringify(data.id))
              navigate('/admindashboard',{replace:true})   
            }
            else{
              alert("Invalid Creddentials");
              setEmail("")
              setPassword("")
            }
          })
          .catch((error)=>{
            alert("Invalid Admin Credentials");
            setEmail("")
            setPassword("")})
            }
    };
    const validate = () => {
      let result = true;
      if (email === null || email === " ") {
        result = false;
      }
      if (password === null || password === " ") {
        result = false;
      }
      return result;
    };
  return (
    <>
    <div className="login">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
             <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
         </Container>
       </Navbar>
      <div className="container mt-5">
      <form className='container col-md-5' onSubmit={proceedLogin}>
          <h1>Admin Login</h1>
          <div className='form-group'>
            <label className="mt-3">Admin mail Id</label>
            <input value={email} type="email" className='form-control' placeholder="Enter Admin mail id" onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='form-group'>
            <label className="mt-3">password</label>
            <input value={password} type="password" className='form-control' placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
          </div> <br />
          <button type="submit" className='btn btn-success'>Login</button>
          <br />
          <div className="card-footer">      <br />
            <Link to="/adminregistrationService" className="btn btn-danger" > Register here</Link>
          </div>
        </form>
        
      </div>
    </div>
    <div className="Footer">
          <Footer />
          </div>
    </>
  );
};
export default AdminLoginService ;
