import React , { useEffect, useState }from "react";
import image from '../../image/contactus.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


import { NavLink } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';


const Contactus=()=>{

    const [email,emailchange]=useState("");
    const [username,namechange]=useState("");
    const [message,messagechange]=useState("");

    // const navigate = useNavigate();

    // useEffect(()=>{

    // sessionStorage.clear();

    // },[]);

    const handlesubmit=(e)=>{
        // e.preventDefault();

        // const validation=()=>{

        //     let result=true;
        //     if(email===''||email===null){
        //         result=false;
        //         toast.warning('please enter email');
        //         alert('please enter email');
                
        //     }
        //     if(password===''||password===''){
    
        //         result=false;
        //         console.log("nono")
        //         toast.warning('please enter password');
        //         alert('please enter password');

                
        //     }
        //     return result;
        // }

        // if(validation())
        // {

            
        // fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/signIn`,{
        //     method:"POST",
        //     headers:{"content-type":"application/json"},
        //     body:JSON.stringify({

        //         "email":email,
        //         "password":password,            
        //     }),
        //     redirect:'follow'
        //   }).then((res)=>{
        //     return res.json();
        //     console.log(res.status);
        //     console.log(res);


            
        //   }).then((resp)=>{

        //    if(Object.keys(resp).length===0)
        //     {
        //         alert('please Enter a Valid Data');
        //     }
        //     else{

        //         if(resp.password== "admin"&&resp.password==password)
        //         {
        //             alert('You are Admin.');
        //             window.sessionStorage.setItem('admin',"admin");
                    
        //             navigate('/about');
        //         }
        //         if( resp.password === password&&resp.password!="admin")
        //         {
        //          alert('You are Employee.')
        //             window.sessionStorage.setItem('email',email);

        //          navigate('/employeedash')

        //         }
        //      }
 
        //      //alert('Saved successfully.')
        //      emailchange("")
        //      passwordchange("")




        //   }).catch((err)=>{
        //     console.log(err.message)
        //     alert('Erorr in Email or Password.')
        //   })

        // }



        // console.log(email,password);

        

    }

    return(
        <>
        <section className="Signup">
            <div className="containerr mt-5" >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">تواصل معنا</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>


                            {/* User name  */}
                            <div className="form-group">
                                <label htmlFor="name">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={username} onChange={e=>namechange(e.target.value)} type="text" name="name" id="name" autoComplete="off" placeholder="الاسم الكامل"></input>

                            </div>
                           
                           {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <input value={email} onChange={e=>emailchange(e.target.value)} type="text" name="email" id="email" autoComplete="off" placeholder="االبريد الالكتروني"></input>
                            </div>
                            <div className="form-grou">
                                <label htmlFor="message">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <textarea value={message} onChange={e=>messagechange(e.target.value)} type="text" name="message" id="message" autoComplete="off" placeholder="الرسالة"></textarea>
                            </div>

                            {/* submit button  */}
                            <div className="form-button">

                                <input type="submit" name="signin" id="signin" classname="form-submit" value="ارسال "/>


                            </div>

                           

                        </form>
                   </div>
                             <div className="signin-image">
                                                                
                                 <figure>
                            
                                    <img src={image} alt="signin pic" className="signin-img"></img>

                            
                                </figure>  
                                {/* <NavLink to="/Signup" className="signin-image-link">تسجيل حساب جديد</NavLink> */}

                                 {/* <p className="title-page">Sign in Portal</p> */}
                                                        
                            </div>
            </div>
        </div>

              


         </section>

        </>



    )
}
export default Contactus;