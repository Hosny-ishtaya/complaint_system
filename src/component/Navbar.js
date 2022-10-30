import React from "react";
const Navbar=()=>{
    return(

<div className="navbar">
    <div className="container">  
      <a href="#" className="logo">CPA</a>
      {/* <img src="uri for pic" alt="logo"/> */}

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a className="log" href="/signin">Login</a></li>
            
        </ul>
    </div> 
</div>
 

    )
}
export default Navbar;