import React from "react";
import image from '../image/wp1.png'


const HomeSectionone=()=>{
    return(
        

             <div className="container grid grid-two-column" >

                <div className="data-section">
                    <p  className="Top-data">This is me</p>
                    <h1 className="head-data">Consumer Protection Association</h1>
                    <p  className="All-data">The Consumer Protection Association is an association that aims
                     to protect the consumer from all the problems
                     that the consumer faces in the products he purchases or deals with,
                      by referring to them in all complaints.
                    </p>
                    <div className="btnn">
                    <button className="btn-comp">

                        <a href="/about">Compain Now!</a>   

                    </button>
                    </div>


                </div>

                <div className="section-image">
                   <picture>
                            <img src={image} alt="hero-img"></img>
                   </picture>  
                </div>




            </div>
     

    )
}
export default HomeSectionone;