import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const CustemerList = () => {
    const [empdata, empdatachange] = useState(null);
     const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/about/detail/" + id);
    // }
    // const LoadEdit = (id) => {
    //     navigate("/about/edite/" + id);
    // }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://192.168.1.114:9090/api/complaintsystem/admin/deleteCustomer?idc=` + id, {
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
        fetch(`http://192.168.1.114:9090/api/complaintsystem/admin/getAllCustomer`).then((res) => {
            return res.json();
        }).then((resp) => {

            empdatachange(resp);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Customer List</h2>
                </div>
                <div className="card-body">
                    {/* <div className="divbtn">
                        <Link to="/about/addemployee" className="btn btn-success">Add Employee</Link>
                    </div> */}
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Adress</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.social_number}>
                                        <td>{item.social_number}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            {/* <a onClick={() => { LoadEdit(item.social_number) }} className="btn btn-success">Edit</a> */}
                                            <a onClick={() => { Removefunction(item.social_number) }} className="btn btn-danger">Remove</a>
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

export default CustemerList;