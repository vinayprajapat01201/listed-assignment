import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// import apple from "../../images/apple.png"

import dashboards from "../../images/dashboard.png";
import users from "../../images/users.png";
import schedules from "../../images/schedules.png";
import transactions from "../../images/transactions.png";
import settings from "../../images/settings.png";
import profile from "../../images/profile.jpeg"
import "../Dashboard/dashboard.css";
import notification from "../../images/notification.png";
import { Line, Pie, pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
import { Chart, ArcElement } from "chart.js";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase"
Chart.register(ArcElement);
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)


const Dashboard = () => {


    const divRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
        divRef.current.style.display = isVisible ? 'none' : 'block';
    };
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            
            window.location.pathname = "/"
        });
    };
    const [data, setdata] = useState([]);
    const [labeled, setlab] = useState([]);
    const [cdata, setcdata] = useState([]);
    const getApi = () => {

        async function getData() {
            const Api = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            const res = await Api.json();
            return res.data



        }
        // const getData = () =>{
        //     let a = {}
        //     axios
        //     .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        //     .then((res)=>{
        //         a= res.json();
        //     })
        //     return a;
        // }

        getData().then((data) => {
            const item = data.map((item) => {
                return item.Population

            })
            setdata(item)
        })
        getData().then((data) => {
            const lab = data.map((lab) => {
                return lab.Year

            })
            setlab(lab)
        })
        getData().then((data) => {
            // const item = data.map((item)=>{
            //     return item.Population

            // })
            setcdata(data[0])
        })

    }
    useEffect(() => {
        getApi();
    }, []);
    console.log(data);
    console.log(cdata)




    const chart = {
        labels: labeled,
        datasets: [
            {
                label: "Us Population",
                data: data,
                borderColor: '#E9A0A0',
                tension: 0.4,



                pointBackgroundColor: '#E9A0A0',
                showLine: true
            }
            // , {
            //     label: "new Delhi",
            //     data: [0,0,0,0,0,0,0],

            //     borderColor: '#9BDD7C',
            //     tension: 0.4,


            //     pointBorderColor: '#9BDD7C',
            //     pointBackgroundColor: '#9BDD7C',
            //     showLine: true
            // },

        ]
    }
    const options = {
        maintainAspectRatio: false,
        plugins: {

            legend: {
                align: 'end',
                position: 'top',
                labels: {
                    usePointStyle: true,
                }
            }
        },

        spanGaps: true,

        scales: {
            x: {
                grid: {
                    display: false
                },

            }
        }
    }

    //pie
    const chartdata = {
        labels: ["Newly Added", "Edited", "Deleted"],
        datasets: [
            {
                label: "Markets Monitored",
                backgroundColor: [
                    "#83ce83",
                    "#959595",
                    "#f96a5d",
                    "#00A6B4",
                    "#6800B4",
                ],
                data: [37, 33, 30],
                hoverOffset: 4
            },
        ],
    };
    const options2 = {
        plugins: {

            legend: {

                position: 'right',
                labels: {
                    usePointStyle: true,
                }
            }
        },
        maintainAspectRatio: false,
    }
    return (
        <div className="main-dash">
            <div className="nav-dash">
                <div className="in-nav-dash">
                    <h1>Board.</h1>
                    {/* <a href="#dashboard">Dashboard</a>
                    <a href="#">Transactions</a>
                    <a href="#">Schedules</a>
                    <a href="#">Users</a>
                    <a href="#">Settings</a> */}
                    <a><img src={dashboards} alt="logo" /><p>Dashboard</p></a>
                    <a><img src={transactions} alt="logo" /><p>Transactions</p></a>
                    <a><img src={schedules} alt="logo" /><p>Schedules</p></a>
                    <a><img src={users} alt="logo" /><p>Users</p></a>
                    <a><img src={settings} alt="logo" /><p>Settings</p></a>
                </div>
                <div className="in-nav-dash">
                    <p>Help</p>
                    <p>Contact us</p>
                </div>


            </div >

            <div className="container-dash">
                <div className="top-cont-dash">
                    <div className="logo-dash">
                        <h1>Dashboard</h1>

                    </div>
                    <div className="search-dash">
                        <input type="search" placeholder="Search" />
                        <img src={notification} />
                        <button onClick={handleClick}>                        <img src={localStorage.photoUrl} />
                        </button>
                        <div ref={divRef} className='menu'>
                            <p>{localStorage.name}</p>
                            <a onClick={signUserOut}>Sign Out</a>
                        </div>


                    </div>
                </div>
                <div className="val-cont-dash">
                    <div className="a-val-cont-dash">
                        <p>Total Revenues</p>
                        <b>{cdata.Nation}</b>
                    </div>
                    <div className="b-val-cont-dash">
                        <p>Total Transactions</p>
                        <b>{cdata.Year}</b>
                    </div>
                    <div className="c-val-cont-dash">
                        <p>Total Likes</p>
                        <b>{cdata.Population}</b>
                    </div>
                    <div className="d-val-cont-dash">
                        <p>Total Users</p>
                        <b>{localStorage.name}</b>
                    </div>

                </div>
                <div className="graph-cont-dash">
                    <h2>Activities</h2>
                    <select>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                        <option>hello</option>
                    </select>
                    <div className="in-graph-cont-dash">
                        <Line data={chart} options={options}></Line>

                    </div>


                </div>
                <div className="charts-cont-dash">
                    <div className="pie-graph">

                        <div className="in-pie-graph">
                            <h3>Top Products</h3>
                            <select>
                                <option>hello</option>
                                <option>hello</option>
                                <option>hello</option>
                                <option>hello</option>
                            </select>

                        </div>
                        <div className='chart-pie'>
                            <Pie data={chartdata} options={options2}></Pie>
                        </div>



                    </div>
                    <div className="todo">
                        <div className="todos_section">
                            <h3>Today's Schedule</h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Dashboard;