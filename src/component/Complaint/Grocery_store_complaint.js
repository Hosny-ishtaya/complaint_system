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
            fetch("http://localhost:8000/company/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }



    const { iid } = useParams();
    useEffect(() => {
        fetch("http://localhost:8000/complaint").then((res) => {
            return res.json();
        }).then((resp) => {

            complainchange(resp);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Grocery Store Complaint</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name Of Company</td>
                                <td>Catogry Type</td>
                                <td>Description</td>
                                <td>Status</td>
                                <td>Action</td>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {complaindata &&
                                complaindata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.namecompany}</td>
                                        <td>{item.catogrytype}</td>
                                        <td>{item.description}</td>
                                        <td>{item.stutus}</td>
                                        <td><a onClick={() => {  Editfunction(item.id) }}  className="btn btn-success">Update Status</a>
                                            <a onClick={() => { Removefunction(item.id) }}  className="btn btn-danger">Remove</a>
                                            {/* <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a> */}
                                            <a onClick={() => {  loadDetail(item.id) }} className="btn btn-primary">Details</a>
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