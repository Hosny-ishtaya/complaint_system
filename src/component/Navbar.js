import React from "react";
const Navbar=()=>{
    return(

<div className="navbar">
    <div className="container">  
      <a href="/" className="logo">CPA</a>
      {/* <img src="uri for pic" alt="logo"/> */}

        <ull>
            <lii><a href="/">Home</a></lii>
            <lii><a href="/about">Admin</a></lii>
            <lii><a href="/employeedash">Employee</a></lii>
            {/* <lii><a href="/contact">Contact Us</a></lii> */}
            <lii><a className="log" href="/signin">Log In</a></lii>
            <lii><a className="log" href="/">Log Out</a></lii>
            
        </ull>
    </div> 
</div>
 

    )
}
export default Navbar;