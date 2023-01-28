import React , { useEffect, useState }from "react";
import image from '../../image/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


import { NavLink } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';


const Signin=()=>{

    const [email,emailchange]=useState("");
    const [password,passwordchange]=useState("");

    const navigate = useNavigate();

    useEffect(()=>{

    sessionStorage.clear();

    },[]);

    const handlesubmit=(e)=>{
        e.preventDefault();

        const validation=()=>{

            let result=true;
            if(email===''||email===null){
                result=false;
                toast.warning('please enter email');
                alert('please enter email');
                
            }
            if(password===''||password===''){
    
                result=false;
                console.log("nono")
                toast.warning('please enter password');
                alert('please enter password');

                
            }
            return result;
        }

        if(validation())
        {

            
        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/signIn`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({

                "email":email,
                "password":password,            
            }),
            redirect:'follow'
          }).then((res)=>{
            return res.json();
            console.log(res.status);
            console.log(res);


            
          }).then((resp)=>{

           if(Object.keys(resp).length===0)
            {
                alert('please Enter a Valid Data');
            }
            else{

                if(resp.password== "admin"&&resp.password==password)
                {
                    alert('You are Admin.');
                    window.sessionStorage.setItem('admin',"admin");
                    
                    navigate('/about');
                }
                if( resp.password === password&&resp.password!="admin")
                {
                 alert('You are Employee.')
                    window.sessionStorage.setItem('email',email);

                 navigate('/employeedash')

                }
             }
 
             //alert('Saved successfully.')
             emailchange("")
             passwordchange("")




          }).catch((err)=>{
            console.log(err.message)
            alert('Erorr in Email or Password.')
          })

        }



        console.log(email,password);

        

    }

    return(
        <>
        <section className="signin">
            <div className="containerr mt-5" >
                <div className="signin-content">
                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>

                           {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <input value={email} onChange={e=>emailchange(e.target.value)} type="text" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                            </div>
                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="password">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" name="password" id="password" autoComplete="off" placeholder="Your password"></input>
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