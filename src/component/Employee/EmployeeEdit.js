
import { useEffect, useState } from "react";

import image from '../../image/adminn.png';
import { Link, useNavigate, useParams } from "react-router-dom";

const EmployeeEdit =()=>{

    
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[validation,valchange]=useState(false);
    const[password,passwordchange]=useState("");
    const[rpassword,rpasswordchange]=useState(false);


    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();


      const empdata={id,name,email,phone};
      

      fetch("http://localhost:8000/employee/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return(
        <>
        <section className="Signup">
            <div className="container mt-5" >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Edit Information</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>
                            {/* User name  */}
                            <div className="form-group">
                                <label htmlFor="name">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} type="text" name="name" id="name" autoComplete="off" placeholder="Your name"></input>

                            </div>
                            { name.length==0 && validation && <span className="text-danger">Enter your name</span>}
                           {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-email matirial-icons-name"></i>

                                </label>
                                <input value={email} onMouseDown={e=>valchange(true)} onChange={e=>emailchange(e.target.value)} type="text" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                            </div>
                            {/* { email.length==0 && validation && <span className="text-danger">Enter your Email</span>} */}

                            {/* Phone*/}
                            <div className="form-group">
                                <label htmlFor="phone">

                                    <i className="zmdi zmdi-phone-in-talk matirial-icons-name"></i>

                                </label>
                                <input value={phone} onMouseDown={e=>valchange(true)} onChange={e=>phonechange(e.target.value)} type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Phone"></input>
                            </div>
                            {/* { phone.length==0 && validation && <span className="text-danger">Enter your phone</span>} */}
                            {/* ID  */}
                            <div className="form-group">
                                <label htmlFor="id">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={id} onMouseDown={e=>valchange(true)} onChange={e=>idchange(e.target.value)} type="number" name="id" id="id" autoComplete="off" placeholder="Your ID"></input>
                            </div>
                            {/* { id.length==0 && validation && <span className="text-danger">Enter your Id</span>} */}

                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="password">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input type="password" value={password} onMouseDown={e=>valchange(true)} onChange={e=>passwordchange(e.target.value)} name="password" id="password" autoComplete="off" placeholder="Your password"></input>
                            </div>
                            {/* { password.length==0 && validation && <span className="text-danger">Enter Your Password</span>} */}
                            {/* password  */}
                            <div className="form-group">
                                <label htmlFor="cpassword">

                                    <i className="zmdi zmdi-lock matirial-icons-name"></i>

                                </label>
                                <input type="password" value={rpassword} onMouseDown={e=>valchange(true)} onChange={e=>rpasswordchange(e.target.value)} name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"></input>
                            </div>
                            {/* { rpassword.length==0 && validation && <span className="text-danger">Re Write Password</span>} */}

                            {/* submit button  */}
                            <div className="form-button">

                                <input type="submit" name="signup" id="signup" classname="form-submit" value="Save"/>


                            </div>

                        </form>
                   </div>
                        <div className="signin-image">
                                     
                                     <figure>
 
                                          <img src={image} alt="registration pic" ></img>
                                        
 
                                     </figure>  
                                     {/* <NavLink to="/signin" className="signin-image-link">Iam already register</NavLink> */}
                       </div>
            </div>
        </div>

              


         </section>

        </>






    )

}
export default EmployeeEdit;