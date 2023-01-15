import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";



const Allcomplaints = () => {
    
    const [complaindata, complainchange] = useState(null);
     const navigate = useNavigate();



    useEffect(() => {
        fetch(`http://192.168.1.114:9090/api/complaintsystem/admin/getAllComplaint`).then((res) => {
            return res.json();
        }).then((resp) => {

            complainchange(resp);
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
                                {/* <td>Action</td> */}
                                
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

                                        
                                            {/* <a onClick={() => {  Editfunction(item.id_of_complaint) }}  className="btn btn-success">Update Status</a> */}
                                            {/* <a onClick={() => { Removefunction(item.id_of_complaint) }}  className="btn btn-danger">Remove</a> */}
                                            {/* <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a> */}
                                            {/* <a onClick={() => {  loadDetail(item.id_of_complaint) }} className="btn btn-primary">Details</a> */}
                                        

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

export default Allcomplaints;