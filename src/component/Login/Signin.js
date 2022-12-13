import React from "react";
import image from '../../image/logo.png';
import { NavLink } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';


const Signin=()=>{
    return(
        <>
        <section className="signin">
            <div className="containerr mt-5" >
                <div className="signin-content">
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form className="register-form" id="register-form">

                           {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <input type="text" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                            </div>
                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="password">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password"></input>
                            </div>

                            {/* submit button  */}
                            <div className="form-button">

                                <input type="submit" name="signin" id="signin" classname="form-submit" value="Log In"/>


                            </div>

                        </form>
                   </div>
                             <div className="signin-image">
                                                                
                                 <figure>
                            
                                    <img src={image} alt="signin pic" className="signin-img" ></img>

                            
                                </figure>  
                                {/* <NavLink to="/signup" className="signin-image-link">Create on Account..</NavLink> */}

                                 <p className="title-page">Sign in Portal</p>
                                                        
                            </div>
            </div>
        </div>

              


         </section>

        </>



    )
}
export default Signin;