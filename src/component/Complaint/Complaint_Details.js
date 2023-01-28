import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Complaint_Details = () => {

    const {comid}=useParams();
    const navigate = useNavigate();
    const loadDetail = (id) => {
        navigate("/employeedash/company");

    }
    const [customerpdata, customerchange] = useState(null);
    const [social_numbe, social_numbechange] = useState(null);
    // const [namec,namecchange]=useState(null);
    // const [emailc,emailcchange]=useState(null);
    // const [phonec,phonecchange]=useState(null);
    // const [addressc,addresscchange]=useState(null);

    
    useEffect(() => {

        

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getCustomerById?id=`+comid).then((res) => {
            return res.json();
        }).then((resp) => {
            customerchange(resp);
            social_numbechange(resp.social_number);
            // namecchange(resp.name);
            // emailcchange(resp.type_company);
            // phonecchange(resp.locations);
            // ratechange(resp.ratting_status);
            // addresscchange(resp.id);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>

            <div className="card" style={{textAlign:"left"}}>
                <div className="card-title">
                    <h2>Custemer Details:</h2>
                </div>

                <div className="card-body"></div>
           
            { customerpdata && 
                <div>
                       <h3>-Name    of Custemer:({customerpdata.username})</h3>
                       <h3>-Email   of Custemer:({customerpdata.email})</h3>
                       <h3>-Phone   of Custemer:({customerpdata.phone})</h3>
                       <h3>-Address of Custemer:({customerpdata.address})</h3>
                       <h3>-Id      of Custemer:({customerpdata.social_number})</h3>
                       <a onClick={() => {  loadDetail(customerpdata.social_number) }} className="btn btn-primary">Back</a>
                </div>
             }
            </div>
            
           
        </div>
    );
}

export default Complaint_Details;