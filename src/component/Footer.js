import React from "react";




const Footer=()=>{
    return(

      <footer>

        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>


        <ul className="social-icon">

          <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        </ul>

        <ul className="bottom-menu" >
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact Us</a></li>       
        </ul>
        <p>@2022 Eng Hosny ishtaya | All Right Reserved</p>
        


      </footer>




    )
}
export default Footer;