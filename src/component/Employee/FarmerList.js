import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const FarmerList = () => {
    const [empdata, empdatachange] = useState(null);
     const navigate = useNavigate();

    // const LoadDetail = (id) => {
    //     navigate("/about/detail/" + id);
    // }
    const LoadEdit = (id) => {
        navigate("/about/edite/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/deleteEmployee?ide=` + id, {
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
        fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/getAllEmployee`).then((res) => {
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
                    <h2> مشتركين المزارع</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        {/* <Link to="/about/addfarmer" className="btn btn-success">اضافة مشترك</Link> */}
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>رقم الهويه</td>
                                <td>الاسم</td>
                                <td>رقم الهاتف</td>
                                <td>البريد الالكتروني</td>
                                <td>رقم الشاليه</td>
                                <td>العمليات</td>
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
                                        <td><a onClick={() => { LoadEdit(item.social_number) }} className="btn btn-success">Edit</a>
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

export default FarmerList;