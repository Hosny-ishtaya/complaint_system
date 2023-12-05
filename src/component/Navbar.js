import React from "react";
import image from '../image/logo-re.png'
const Navbar=()=>{
    return(

<div className="navbar">
    <div className="container">  
    <img src={image} alt="logo"/>
      {/* <a href="/" className="logo">مزرعتي</a> */}
      

        <ull>
            
            {/* 
            <lii><a href="/employeedash">Employee</a></lii> */}
            {/* <lii><a href="/contact">Contact Us</a></lii> */}
            <lii><a className="log" id="signin" href="/signin">تسجيل دخول</a></lii>
            {/* <lii><a className="log" href="/">Log Out</a></lii> */}
            <lii><a href="/">احجز هنا </a></lii>
            <lii><a href="/contactus">تواصل معنا </a></lii>
            <lii><a href="/">عن مزرعتي</a></lii>
            <lii><a href="/about">المسؤول</a></lii>
            <lii><a href="/">الصفحة الرئيسية</a></lii>
            
        </ull>
    </div> 
</div>
 

    )
}
export default Navbar;