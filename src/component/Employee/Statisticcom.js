
import {PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar} from "recharts";
import React, { useEffect,useState } from "react";







const StatisticChart=()=>{

    const [price,pricechange]=useState("");
    const [outdate,outdatechange]=useState("");
    const [Badservice,Badservicechange]=useState("");
    const [Qulityand,Qulityandchange]=useState("");
    const [other,otherchange]=useState("");


    useEffect(() => {


        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getNubmerOfComplaintsByType?type=Price`).then((res) => {
            return res.json();
        }).then((resp) => {

            pricechange(resp);
            console.log("the emp",resp);
            
        }).catch((err) => {
            console.log(err.message);
        })
        
        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getNubmerOfComplaintsByType?type=Quality and quality`).then((res) => {
            return res.json();
        }).then((resp) => {

            Qulityandchange(resp);
            console.log("the vvv",resp);
            window.sessionStorage.setItem('counte',resp);
        }).catch((err) => {
            console.log(err.message);
        })

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getNubmerOfComplaintsByType?type=Out of date`).then((res) => {
            return res.json();
        }).then((resp) => {

            outdatechange(resp);
            console.log("the emp",resp);
        }).catch((err) => {
            console.log(err.message);
        })

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getNubmerOfComplaintsByType?type=Bad Service`).then((res) => {
            return res.json();
        }).then((resp) => {

            Badservicechange(resp);
            console.log("the emp",resp);
        }).catch((err) => {
            console.log(err.message);
        })

        fetch(`http://`+window.ip+`:9090/api/complaintsystem/employee/getNubmerOfComplaintsByType?type=Others`).then((res) => {
            return res.json();
        }).then((resp) => {

            otherchange(resp);
            console.log("the emp",resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])



    const data =[

        
        { name:"Price", value: price},
        { name:"Out date", value: outdate},
        { name:"Bad service", value: Badservice},
        { name:"Quality and Quntity", value: Qulityand},
        { name:"Others", value: other}
        
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
                                    {/* <BarChart
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
                                    </BarChart> */}
                    </div>

                        
                    </div>

    

    );


}
export default StatisticChart;