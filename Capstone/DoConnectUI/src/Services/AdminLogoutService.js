import React from 'react'
import {useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

function AdminLogoutService() {
    const navigate=useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        const adminId=localStorage.getItem("adminId");
        const url=`http://localhost:9090/admin/logout/${adminId}`
        fetch(url)
            .then((res) => {
            console.log(res.status);
            localStorage.removeItem("adminId");
            alert("log out success");
            navigate("/")
            })
            .catch((err)=>{
              alert("Admin Logout Failed");
        })
            }        
  return (
    <>
      <div className="logout">
          <button onClick={handleLogout} className="btn btn-danger" style={{margin:"250px" , paddingLeft:"15px"}}>Logout</button>
      </div>
      <div className="Footer">
          <Footer />
          </div>
    </>
  )
}

export default AdminLogoutService
