import React, { useEffect,useState } from "react";
import image from '../../image/Company.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Password from "antd/lib/input/Password";



const EditCompany=()=>{

    const [catogrytype,catogrytyoechange]=useState("");

    //-----------------
    
    const { commpid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/company/" + commpid).then((res) => {
            return res.json();
        }).then((resp) => {
            catogrytyoechange(resp.catogrytype);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();


      const empdata={catogrytype};
      

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
                        <h2 className="form-title">Edit Status</h2>
                        <form className="register-form" id="register-form" onSubmit={handlesubmit}>
                           {/* catogry type */}
                            <div className="form-group">
                                <label htmlFor="email">

                                    <i className="zmdi zmdi-view-carousel matirial-icons-name"></i>

                                </label>
                                <select className="select" value={catogrytype} onChange={e=>catogrytyoechange(e.target.value)} >
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