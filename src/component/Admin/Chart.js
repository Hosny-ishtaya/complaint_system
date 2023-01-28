
import {PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar} from "recharts";
import React, { useEffect,useState } from "react";







const Chart=()=>{

    const [countemployee,countemployeechange]=useState("");
    const [countcompanies,countcompanieschange]=useState("");
    const [countcustomer,countcustomerchange]=useState("");
    const [countcomplaint,countcomplaintchange]=useState("");


    useEffect(() => {


        fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/getNumberOfEmployee`).then((res) => {
            return res.json();
        }).then((resp) => {

            countemployeechange(resp);
            console.log("the emp",resp);
            
        }).catch((err) => {
            console.log(err.message);
        })
        
        fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/getNumberOfCompanies`).then((res) => {
            return res.json();
        }).then((resp) => {

            countcompanieschange(resp);
            console.log("the vvv",resp);
            window.sessionStorage.setItem('counte',resp);
        }).catch((err) => {
            console.log(err.message);
        })

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/getNumberOfCustomers`).then((res) => {
            return res.json();
        }).then((resp) => {

            countcustomerchange(resp);
            console.log("the emp",resp);
        }).catch((err) => {
            console.log(err.message);
        })

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/admin/getNumberOfComplaints`).then((res) => {
            return res.json();
        }).then((resp) => {

            countcomplaintchange(resp);
            console.log("the emp",resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])



    const data =[

        
        { name:"Employee", value: countemployee},
        { name:"Company", value: countcompanies},
        { name:"Complaint", value: countcomplaint},
        { name:"Customer", value: countcustomer}
        
    ]
    return(


        
        <div style={{textAlign:"center"}}>
                      <h1>Statistics</h1>
                    <div className="questioncontainer">
        
                        <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#472d7c"
                            label
                        />
                        <Tooltip />
                        </PieChart>
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                        barSize={20}
                                    >
                                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Bar dataKey="value" fill="#472d7c" background={{ fill: '#eee' }} />
                                    </BarChart>
                    </div>

                        
                    </div>

    

    );


}
export default Chart;