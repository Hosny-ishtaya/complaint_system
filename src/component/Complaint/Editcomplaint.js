import React, { useEffect,useState } from "react";
import image from '../../image/Company.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Password from "antd/lib/input/Password";



const EditCompany=()=>{

    
    const [idcomplaint,idcomplaintchange]=useState("");
    const [type_company,type_companychange]=useState("");
    const [description,descriptionchange]=useState("");
    const [location,locationchange]=useState("");
    const [company_id,company_idchange]=useState("");
    const [customer_id,customer_idchange]=useState("");
    const [companyName,companyNamechange]=useState("");
    const [status,statuschange]=useState("");

    
    

    const { idcom } = useParams();
    //-----------------
    
    

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch(`http://192.168.1.114:9090/api/complaintsystem/employee/getComplaintById?id=` + idcom).then((res) => {
            return res.json();
        }).then((resp) => {
            idcomplaintchange(resp.id_of_complaint);
            type_companychange(resp.type_company);
            descriptionchange(resp.description);
            locationchange(resp.location);
            company_idchange(resp.company_id);
            customer_idchange(resp.customer_id);
            companyNamechange(resp.companyName);
            statuschange(resp.status);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

   
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();      

      fetch(`http://192.168.1.114:9090/api/complaintsystem/employee/editStatusOfComplaint`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
            "id_of_complaint": idcom,
            "type_company": type_company,
            "description": description,
            "location": location,
            "company_id": company_id,
            "customer_id": customer_id,
            "companyName": companyName,
            "status": status,
          })
      }).then((res)=>{
        alert('update status.')
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
                        <h2 className="form-title">Edit Status</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>
                           {/* catogry type */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-view-carousel matirial-icons-name"></i>

                                </label>
                                <select className="select" value={status} onChange={e=>statuschange(e.target.value)} >
                                    <option>Pending</option>
                                    <option>Completed</option>
                                    <option>Rejected</option>
                                    <option>In Process</option>
                                    <option>Updating Soon</option>
                                </select>
                                {/* <input value={catogrytype} onMouseDown={e=>valchange(true)} onChange={e=>catogrytyoechange(e.target.value)} type="text" name="Catogry Type" id="Catogry Type" autoComplete="off" placeholder="Catogry Type"></input> */}
                            </div>                       
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