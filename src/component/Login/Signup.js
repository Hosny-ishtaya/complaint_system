import React from "react";
import image from '../../image/logo.png';
import { NavLink } from "react-router-dom";



const Signup=()=>{
    return(
        <>
        <section className="Signup">
            <div className="container mt-5" >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form className="register-form" id="register-form">
                            {/* User name  */}
                            <div className="form-group">
                                <label htmlFor="name">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="Your name"></input>
                            </div>

                           {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <input type="text" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                            </div>

                            {/* Phone*/}
                            <div className="form-group">
                                <label htmlFor="phone">

                                    <i className="zmdi zmdi-phone-in-talk matirial-icons-name"></i>

                                </label>
                                <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Phone"></input>
                            </div>
                            {/* ID  */}
                            <div className="form-group">
                                <label htmlFor="id">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input type="number" name="id" id="id" autoComplete="off" placeholder="Your ID"></input>
                            </div>

                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="password">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password"></input>
                            </div>

                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="cpassword">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"></input>
                            </div>

                            {/* submit button  */}
                            <div className="form-button">

                                <input type="submit" name="signup" id="signup" classname="form-submit" value="register"/>


                            </div>

                        </form>
                   </div>
                        <div className="signin-image">
                                     
                                     <figure>
 
                                          <img src={image} alt="registration pic" ></img>
                                        
 
                                     </figure>  
                                     <NavLink to="/signin" className="signin-image-link">Iam already register</NavLink>
                       </div>
            </div>
        </div>

              


         </section>

        </>



    )
}
export default Signup;