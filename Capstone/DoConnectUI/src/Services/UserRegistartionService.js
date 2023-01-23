import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../Components/Footer';
export default class UserRegistartionService extends Component {
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

    userPost =(e)=>{
        e.preventDefault();
        console.log(this.state)
        fetch("http://localhost:9090/user/register",
            {
                method: 'POST',
                body: JSON.stringify({
                    name:this.nameRef.current.value,
                    password:this.passwordRef.current.value,
                    email:this.emailRef.current.value, 
                    phoneNumber:this.phoneNumberRef.current.value                 
                }),
                headers: { "Content-Type": 'application/json' } })
               .then(res=>res.json())
                .then(data => console.log(data));
                alert("User registered successfully")
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
        <form className='container col-md-5' onSubmit={this.userPost}>
                <h1 className="container">User Registration</h1>
                <div className='form-group'>
                    <label className="mt-3">Enter User Name</label>
                    <input type="text" name='name' required placeholder='Enter Name' className='form-control' ref={this.nameRef} />
                </div>
                <div className='form-group'>
                {/* pattern='[A-Z][a-z][@][.][1-10]' */}
                    <label className="mt-3">Enter password </label>
                    <input type="password" name='password' required  placeholder='Enter Password >8 characters' className='form-control'  pattern='[A-Z][a-z][$][1-10]' minLength={10}  ref={this.passwordRef} />
                </div>
              <div className='form-group'>
                    <label className="mt-3">Enter email</label>
                    <input type="email" name="email" required placeholder="email@gmail.com" className='form-control' ref={this.emailRef} />
                </div>
               
                <div className='form-group'>
                    <label className="mt-3">Enter Phone Number</label>
                    <input type="text" name='name' required placeholder='Enter Phone Number' className='form-control' ref={this.phoneNumberRef} />
                </div>
                <br />
              <div className='justify-content centre'>
                <button type="submit" className='btn btn-success'>Register as User</button> <br /><br />
                <Link  className="btn btn-dark" to="/userlogin" > Login as User</Link> 
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
