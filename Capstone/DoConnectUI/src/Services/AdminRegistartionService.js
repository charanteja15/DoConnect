import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
export default class AdminRegistartionService extends Component {
  constructor(props){   
    super(props);
    this.state={    
        id:"",
        name:"",
        password:"",
        email:"",
        phoneNumber:""   
    }
    //creating Ref's
    this.nameRef=React.createRef();
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneNumberRef=React.createRef();
}

    adminPost =(e)=>{
        e.preventDefault();
        console.log(this.state)
        fetch("http://localhost:9090/admin/register",
            {
                method: 'POST',
                body: JSON.stringify({
                    name:this.nameRef.current.value,
                    email:this.emailRef.current.value,
                    password:this.passwordRef.current.value,
                    phoneNumber:this.phoneNumberRef.current.value                 
                }),
                headers: { "Content-Type": 'application/json' } })
               .then(res=>res.json())
                .then(data => console.log(data));
                alert("Admin registered successfully,Login for further operations");
             
    }
    render() {
    return (

    <>
      <div className="registration">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">Do Connect</Navbar.Brand>
          </Container>
        </Navbar>
        <form className='container col-md-5' onSubmit={this.adminPost}>
                <h1>Admin Registration</h1>
                <div className='form-group'>
                    <label className="mt-3">Enter AdminName</label>
                    <input type="text" name='name' required placeholder='Enter Name' className='form-control' ref={this.nameRef} />
                </div>
              <div className='form-group'>
                    <label className="mt-3">Enter email</label>
                    <input type="email" name="email" required placeholder='abc@gmail.com' className='form-control' ref={this.emailRef} />
                </div>
                <div className='form-group'>
                {/* pattern='[A-Z][a-z][@][.][1-10]' */}
                    <label className="mt-3">Enter password</label>
                    <input type="password" name='password' required  placeholder='Enter Password' className='form-control'  ref={this.passwordRef} />
                </div>
                <div className='form-group'>
                    <label className="mt-3">Enter Phone Number</label>
                    <input type="text" name='name' required placeholder='Enter Phone Number' className='form-control' ref={this.phoneNumberRef} />
                </div>
                <br />
                <br />
                <div className='justify-content centre'>
                  <button type="submit" className='btn btn-success'>Register as Admin</button> <br /><br />
                  <label className="mt-3"> Already have an account?</label><Link  className="btn btn-dark" to="/adminloginservice" >Login as Admin</Link> 
                  
              </div>
            </form>
      </div>
      <div className="Footer">
          <Footer />
          </div>
    </>

    )
    }
}