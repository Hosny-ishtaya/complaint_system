import React, { useEffect,useState } from "react";
import image from '../../image/Company.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Password from "antd/lib/input/Password";



const EditCompany=()=>{

    const [id,idchange]=useState("");
    const [cname,companynamechange]=useState("");
    const [catogrytype,catogrytyoechange]=useState("");
    const [location,locationchange]=useState("");
    const [rate,ratechange]=useState("");
    const [validation,valchange]=useState("");

    //-----------------
    
    const { commpid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/company/" + commpid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            companynamechange(resp.cname);
            catogrytyoechange(resp.catogrytype);
            locationchange(resp.location);
            ratechange(resp.rate);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();


      const empdata={id,cname,catogrytype,location,rate};
      

      fetch("http://localhost:8000/company/"+commpid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/employeedash/company');
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
                        <h2 className="form-title">Edit Company</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>
                            {/* company name  */}
                            <div className="form-group">
                                <label htmlFor="name">

                                    <i className="zmdi zmdi-crop-din matirial-icons-name"></i>

                                </label>
                                <input value={cname} onMouseDown={e=>valchange(true)} onChange={e=>companynamechange(e.target.value)} type="text" name="name" id="name" autoComplete="off" placeholder="Company name"></input>

                            </div>
                            { cname.length==0 && validation && <span className="text-danger">Enter your name</span>}
                           {/* catogry type */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-view-carousel matirial-icons-name"></i>

                                </label>
                                <select className="select" value={catogrytype} onChange={e=>catogrytyoechange(e.target.value)} >
                                    <option>cleaning product</option>
                                    <option>Grocery Store</option>
                                    <option>Pharmaceuticals</option>
                                    <option>cosmatics</option>
                                </select>
                                {/* <input value={catogrytype} onMouseDown={e=>valchange(true)} onChange={e=>catogrytyoechange(e.target.value)} type="text" name="Catogry Type" id="Catogry Type" autoComplete="off" placeholder="Catogry Type"></input> */}
                            </div>
                            {/* { email.length==0 && validation && <span className="text-danger">Enter your Email</span>} */}
                           {/* location */}
                            <div className="form-group">
                                <label htmlFor="email">

                                <i class="zmdi zmdi-gps-dot matirial-icons-name"></i>

                                </label>
                                <input value={location} onMouseDown={e=>valchange(true)} onChange={e=>locationchange(e.target.value)} type="text" name="Location" id="Location" autoComplete="off" placeholder="Location"></input>
                            </div>
                            {/* { email.length==0 && validation && <span className="text-danger">Enter your Email</span>} */}
                            {/* Rate*/}
                            <div className="form-group">
                                <label htmlFor="phone">

                                    <i className="zmdi zmdi-star matirial-icons-name"></i>

                                </label>
                                <input value={rate} onMouseDown={e=>valchange(true)} onChange={e=>ratechange(e.target.value)} type="number" name="rate" id="rate" autoComplete="off" placeholder="Company Rate"></input>
                            </div>
                            {/* { phone.length==0 && validation && <span className="text-danger">Enter your phone</span>} */}
                            {/* ID  */}
                            <div className="form-group">
                                <label htmlFor="id">

                                    <i className="zmdi zmdi-account matirial-icons-name"></i>

                                </label>
                                <input value={id} onMouseDown={e=>valchange(true)} onChange={e=>idchange(e.target.value)} type="number" name="id" id="id" autoComplete="off" placeholder="Company ID"></input>
                            </div>
                            {/* { id.length==0 && validation && <span className="text-danger">Enter your Id</span>} */}

                        
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
export default EditCompany;