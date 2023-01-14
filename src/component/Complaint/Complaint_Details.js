import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Complaint_Details = () => {

    const {comid}=useParams();
    const [comdata,compdatachange]=useState(null);

    
    useEffect(() => {

        

        fetch("http://localhost:8000/complaint/"+comid).then((res) => {
            return res.json();
        }).then((resp) => {

            compdatachange(resp);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>

            <div className="card" style={{textAlign:"left"}}>
                <div className="card-title">
                    <h2>Complaint Details:</h2>
                </div>

                <div className="card-body"></div>
           
            { comdata && 
                <div>
                       <h2>Name of company is :{comdata.namecompany}</h2>
                       <h3>description of complaint  :{comdata.description}</h3>
                       <Link className="btn btn-danger" to="/employeedash/pagec4">Back</Link>
                </div>
             }
            </div>
            
           
        </div>
    );
}

export default Complaint_Details;