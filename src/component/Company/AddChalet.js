import React, { useState } from "react";
import image from '../../image/Company.png';
import { NavLink,useNavigate } from "react-router-dom";
import Password from "antd/lib/input/Password";



const AddChalet=()=>{

    const navigate = useNavigate();
    const [id,idchange]=useState("");
    const [name,companynamechange]=useState("");
    const [type_company,catogrytyoechange]=useState("");
    const [locations,locationchange]=useState("");
    const [ratting_status,ratechange]=useState("");
    const [price,pricechange]=useState("");
    const [validation,valchange]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
       
      //  console.log({id,name,email,phone,password,rpassword});
      const empdata={name,type_company,locations,ratting_status};

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/addCompany`,{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
          }).then((res)=>{
            alert('Saved successfully.')
            companynamechange("")
            locationchange("")
            ratechange("")
            navigate('/employeedash/company')
            
          }).catch((err)=>{
            console.log(err.message)
          })
    
        }


    
    return(
        <>
        <section className="addchalet">
            <div className="container mt-5" >
                <div className="addchalet-content">
                    <div className="addchalet-form">
                        <h2 className="form-title">تسجيل مزرعة</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>
                            {/* company name  */}
                            <div className="form-group">
                                <label htmlFor="name">

                                    <i className="zmdi zmdi-spinner matirial-icons-name"></i>

                                </label>
                                <input value={name} onMouseDown={e=>valchange(true)} onChange={e=>companynamechange(e.target.value)} type="text" name="name" id="name" autoComplete="off" placeholder="اسم المزرعة"></input>

                            </div>
                            { name.length==0 && validation && <span className="text-danger">Enter your name</span>}
                           {/* catogry type */}
                            {/* <div className="form-group">
                                <label htmlFor="type_company">

                                    <i className="zmdi zmdi-view-carousel matirial-icons-name"></i>

                                </label>
                                <select className="select" value={type_company} onChange={e=>catogrytyoechange(e.target.value)} >
                                    <option>cleaning product</option>
                                    <option>Grocery Store</option>
                                    <option>Pharmaceuticals</option>
                                    <option>cosmatics</option>
                                </select>
                                <input value={catogrytype} onMouseDown={e=>valchange(true)} onChange={e=>catogrytyoechange(e.target.value)} type="text" name="Catogry Type" id="Catogry Type" autoComplete="off" placeholder="Catogry Type"></input>
                            </div> */}
                            {/* { email.length==0 && validation && <span className="text-danger">Enter your Email</span>} */}
                           {/* location */}
                            <div className="form-group">
                                <label htmlFor="locations">

                                <i class="zmdi zmdi-gps-dot matirial-icons-name"></i>

                                </label>
                                <input value={locations} onMouseDown={e=>valchange(true)} onChange={e=>locationchange(e.target.value)} type="text" name="Location" id="Location" autoComplete="off" placeholder="العنوان"></input>
                            </div>
                            {/* { email.length==0 && validation && <span className="text-danger">Enter your Email</span>} */}
                            {/* Rate*/}
                            <div className="form-group">
                                <label htmlFor="ratting_status">

                                    <i className="zmdi zmdi-star matirial-icons-name"></i>

                                </label>
                                <input value={ratting_status} onMouseDown={e=>valchange(true)} onChange={e=>ratechange(e.target.value)} type="number" name="rate" id="rate" autoComplete="off" placeholder="تقييم الشاليه"></input>
                            </div>
                            {/* { ratting_status>=0 &&ratting_status<5 && validation && <span className="text-danger">Enter Rate from 0 to 10</span>} */}
                            {/* ID  */}
                            <div className="form-group">
                                <label htmlFor="id">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={id} onMouseDown={e=>valchange(true)} onChange={e=>idchange(e.target.value)} type="number" name="id" id="id" autoComplete="off" placeholder="رقم الشاليه"></input>
                            </div>
                            {/* { id.length==0 && validation && <span className="text-danger">Enter your Id</span>} */}
                            {/* price  */}
                            <div className="form-group">
                                <label htmlFor="price">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={price} onMouseDown={e=>pricechange(true)} onChange={e=>idchange(e.target.value)} type="number" name="id" id="id" autoComplete="off" placeholder="12h- سعر الاستئجار"></input>
                            </div>
                        
                            {/* submit button  */}
                            <div className="form-button">

                                <input type="submit" name="signup" id="signup" classname="form-submit" value="تسجيل"/>


                            </div>

                        </form>
                   </div>
                        <div className="signin-image">
                                     
                                     {/* <figure>
 
                                          <img src={image} alt="registration pic" ></img>
                                        
 
                                     </figure>   */}
                                     {/* <NavLink to="/signin" className="signin-image-link">Iam already register</NavLink> */}
                       </div>
            </div>
        </div>

              


         </section>

        </>



    )
}
export default AddChalet;