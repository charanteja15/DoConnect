import React from 'react'
import {useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

function UserLogoutService() {
    const navigate=useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        const userId=localStorage.getItem("userId");
        const url=`http://localhost:9090/user/logout/${userId}`
        fetch(url)
            .then((res) => {
            console.log(res.status);
            localStorage.removeItem("userId");
            alert("log out success");
            navigate("/")
            })
            .catch((error)=>{alert("Logout Failed");})
            }        
  return (
    <><div className="logout">
        <button onClick={handleLogout} className="btn btn-danger" style={{margin:"250px" , paddingLeft:"15px"}}>Logout</button>
    </div>
    <div className="Footer">
    <Footer />
    </div>
    </>
  )
}

export default UserLogoutService
