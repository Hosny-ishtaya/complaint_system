import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import Complaint_Details from './Complaint_Details';


const Complaint_grocery = () => {
    
    const [complaindata, complainchange] = useState(null);
     const navigate = useNavigate();

    const loadDetail = (id) => {
        navigate("/employeedash/pagec4/" + id);

    }
    const Editfunction = (id) => {
        navigate("/employeedash/editgcomplaint/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/deleteComplaint?idc=` + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }



    const {comtid} = useParams();

    useEffect(() => {
        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getallcomplaint?id=`+comtid).then((res) => {
            return res.json();
        }).then((resp) => {

            complainchange(resp);
            console.log(resp.customer_id);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return ( 
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Complaints</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID Complaint</td>
                                <td>Type_company</td>
                                <td>description</td>
                                <td>location company</td>
                                <td>Customer_id</td>
                                <td>Status</td>
                                <td>Action</td>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {complaindata &&
                                complaindata.map(item => (
                                    <tr key={item.id_of_complaint}>
                                        <td>{item.id_of_complaint}</td>
                                        <td>{item.type_company}</td>
                                        <td>{item.description}</td>
                                        <td>{item.location}</td>
                                        <td>{item.customer_id}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <a onClick={() => {  Editfunction(item.id_of_complaint) }}  className="btn btn-success">Update Status</a>
                                            <a onClick={() => { Removefunction(item.id_of_complaint) }}  className="btn btn-danger">Remove</a>
                                            {/* <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a> */}
                                            <a onClick={() => {  loadDetail(item.customer_id) }} className="btn btn-primary">Details Customer</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Complaint_grocery;