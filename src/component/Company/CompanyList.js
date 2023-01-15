import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const CompanyList = () => {
    const [compdata, compdatachange] = useState(null);
     const navigate = useNavigate();

    const LoadComplaint = (id) => {
        navigate("/employeedash/complaintcompany/" + id);
    }
    const Editfunction = (id) => {
        navigate("/employeedash/editecompany/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://192.168.1.114:9090/api/complaintsystem/employee/deleteCompany?idC=` + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch(`http://192.168.1.114:9090/api/complaintsystem/admin/getAllComp`).then((res) => {
            return res.json();
        }).then((resp) => {

            compdatachange(resp);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Company List With Your Complaints</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/employeedash/addcompany" className="btn btn-success">Add Company</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name Of Company</td>
                                <td>Type Of Company</td>
                                <td>Location</td>
                                <td>Rate of Company</td>
                                <td>Action</td>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {compdata &&
                                compdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.type_company}</td>
                                        <td>{item.locations}</td>
                                        <td>{item.ratting_status}</td>
                                        <td><a onClick={() => {  Editfunction(item.id) }}  className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }}  className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadComplaint(item.id) }} className="btn btn-primary">Complaints</a>
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

export default CompanyList;