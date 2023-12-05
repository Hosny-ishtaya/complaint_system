import React, { useState } from "react";
// import image from '../../image/signup.png';
import { NavLink } from "react-router-dom";
import Password from "antd/lib/input/Password";



const AddFarmer=()=>{

    const [social_number,idchange]=useState("");
    const [username,namechange]=useState("");
    const [email,emailchange]=useState("");
    const [idchalet,idchaletchange]=useState("");
    const [phone,phonechange]=useState("");
    const [password,passwordchange]=useState("");
    const [validation,valchange]=useState("");

    const handlesubmit=(e)=>{
    //     e.preventDefault();
    //   //  console.log({id,name,email,phone,password,rpassword});
    //   const empdata={username,phone,address,email,password,social_number};

    //     fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/registerEmployee`,{
    //         method:"POST",
    //         headers:{"content-type":"application/json"},
    //         body:JSON.stringify({

    //             "username":username,
    //             "phone":phone,
    //             "address":address,
    //             "email":email,
    //             "password":password,
    //             "social_number":social_number                
    //         }),
    //         redirect:'follow'
    //       }).then((res)=>{
    //         alert('Saved successfully.')
    //         namechange("")
    //         idchange("")
    //         emailchange("")
    //         phonechange("")
    //         passwordchange("")
    //         addresschange("")
           
            

            
    //       }).catch((err)=>{
    //         console.log(err.message)
    //       })
    
        }


    
    return(
        <>
        <section className="addfarmer">
            <div className="container mt-5" >
                <div className="addfarmer-content">
                    <div className="addfarmer-form">
                        <h2 className="form-title">تسجيل  مشترك  مزرعة</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>
                            {/* User name  */}
                            <div className="form-group">
                                <label htmlFor="name">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={username} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} type="text" name="name" id="name" autoComplete="off" placeholder="الاسم الكامل"></input>

                            </div>
                            { username.length==0 && validation && <span className="text-danger">Enter your name</span>}
                           {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <input value={email} onMouseDown={e=>valchange(true)} onChange={e=>emailchange(e.target.value)} type="text" name="email" id="email" autoComplete="off" placeholder="البريد لالكتروني "></input>
                            </div>
                            {/* { email.length==0 && validation && <span className="text-danger">Enter your Email</span>} */}

                            {/* Phone*/}
                            <div className="form-group">
                                <label htmlFor="phone">

                                    <i className="zmdi zmdi-phone-in-talk matirial-icons-name"></i>

                                </label>
                                <input value={phone} onMouseDown={e=>valchange(true)} onChange={e=>phonechange(e.target.value)} type="number" name="phone" id="phone" autoComplete="off" placeholder="رقم المحمول"></input>
                            </div>
                            {/* { phone.length==0 && validation && <span className="text-danger">Enter your phone</span>} */}
                            {/* ID  */}
                            <div className="form-group">
                                <label htmlFor="id">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={social_number} onMouseDown={e=>valchange(true)} onChange={e=>idchange(e.target.value)} type="text" name="id" id="id" autoComplete="off" placeholder="رقم الهوية"></input>
                            </div>
                            {/* { id.length==0 && validation && <span className="text-danger">Enter your Id</span>} */}

                            {/* ID CHALET */}
                            <div className="form-group">
                                <label htmlFor="idchalet">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={idchalet} onMouseDown={e=>valchange(true)} onChange={e=>idchaletchange(e.target.value)} type="text" name="idchalet" id="idchalet" autoComplete="off" placeholder="رقم الشاليه الخاص به"></input>
                            </div>

                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="password">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input type="password" value={password} onMouseDown={e=>valchange(true)} onChange={e=>passwordchange(e.target.value)} name="password" id="password" autoComplete="off" placeholder="كلمة المرور"></input>
                            </div>
                            {/* { password.length==0 && validation && <span className="text-danger">Enter Your Password</span>} */}
                            {/* submit button  */}
                            <div className="form-button">

                                <input type="submit" name="signup" id="signup" classname="form-submit" value="التسجيل"/>


                            </div>

                        </form>
                   </div>
                        <div className="signin-image">
                                     
                                     <figure>
 
                                          {/* <img src={image} alt="registration pic" ></img>
                                         */}
 
                                     </figure>  
                                     {/* <NavLink to="/signin" className="signin-image-link">تسجيل دخول</NavLink> */}
                       </div>
            </div>
        </div>

              


         </section>

        </>



    )
}
export default AddFarmer;