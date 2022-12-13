import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const CompanyList = () => {
    const [compdata, compdatachange] = useState(null);
     const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/about/detail/" + id);
    // }
    // const LoadEdit = (id) => {
    //     navigate("/about/edite/" + id);
    // }
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




    useEffect(() => {
        fetch("http://localhost:8000/company").then((res) => {
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
                    <h2>Company List</h2>
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
                                <td>Catogry Type</td>
                                <td>Location</td>
                                <td>Rate</td>
                                <td>Action</td>
                                
                            </tr>
                        </thead>
                        <tbody>

                            {compdata &&
                                compdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.cname}</td>
                                        <td>{item.catogrytype}</td>
                                        <td>{item.location}</td>
                                        <td>{item.rate}</td>
                                        <td><a   className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }}  className="btn btn-danger">Remove</a>
                                            {/* <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a> */}
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