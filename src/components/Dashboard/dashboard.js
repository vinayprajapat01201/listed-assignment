import React, { useState, useEffect, useRef } from 'react';
import "../Dashboard/dashboard.css";
import notification from "../../images/notification.png";
import { Line, Pie, pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from "chart.js";
import { Chart, ArcElement } from "chart.js";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"
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

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");

    if (!isAuth) {
      signUserOut();
    }
  }, []);



  const [data, setdata] = useState([]);
  const [labeled, setlab] = useState([]);
  const [cdata, setcdata] = useState([]);
  const getApi = () => {

    async function getData() {
      const Api = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
      const res = await Api.json();
      return res.data



    }

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
        label: 'US Population',
        data: data,
        borderColor: '#E9A0A0',
        tension: 0.4,
        pointBackgroundColor: '#E9A0A0',
        showLine: true,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: 'end',
        position: 'top',
        labels: {
          usePointStyle: true,
          color: 'black',
          generateLabels: function (chart) {
            var data = chart.data;
            if (data.datasets.length) {
              var labels = ['Population 1', 'Dummy Population'];
              return labels.map(function (label, i) {
                var dataset = data.datasets[0];
                return {
                  text: label,
                  fillStyle: i === 0 ? '#E9A0A0' : '#75c9c8',
                  strokeStyle: 'white',
                  lineWidth: 2,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
    spanGaps: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };


  //pie
  const chartdata = {
    labels: ['iPhone', 'Samsung', 'OnePlus+'],
    datasets: [
      {
        label: 'Markets Monitored',
        backgroundColor: [
          '#83ce83',
          '#959595',
          '#f96a5d',
          '#00A6B4',
          '#6800B4',
        ],
        data: [37, 33, 30],
        hoverOffset: 4,
      },
    ],
  };

  const options2 = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.formattedValue.toLocaleString() + ' Markets Monitored';
            return label;
          },
        },
      },
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 30,
          generateLabels: function (chart) {
            var data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function (label, i) {
                var dataset = data.datasets[0];
                var dataValue = dataset.data[i];
                return {
                  text: label + '\n' + dataValue.toLocaleString(),
                  fillStyle: dataset.backgroundColor[i],
                  strokeStyle: 'white',
                  lineWidth: 2,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="main-dash">
      <div className="nav-dash">
        <div className="in-nav-dash">
          <h1>Board.</h1>
          <div className="menu-container hover">
            <div className='space'></div>
            <a><i class="fa fa-tachometer" aria-hidden="true"></i><p style={{ fontWeight: 900 }}>Dashboard</p></a>
            <a><i class="fa fa-money" aria-hidden="true"></i><p>Transactions</p></a>
            <a><i class="fa fa-clock-o" aria-hidden="true"></i><p>Schedules</p></a>
            <a><i class="fa fa-user" aria-hidden="true"></i><p>Users</p></a>
            <a><i class="fa fa-cog" aria-hidden="true"></i><p>Settings</p></a>
          </div>

        </div>
        <div className="in-nav-dash">
          <p>Help</p>
          <p>Contact us</p>
        </div>
      </div >


      <div className="container-dash">
        {/* top nav bar */}
        <div className="top-cont-dash">
          <div className="logo-dash">
            <h1>Dashboard</h1>

          </div>
          <div className="search-dash">
            <input type="search" placeholder="Search" className='hover' />
            <img src={notification} className='hover' />
            <button onClick={handleClick} className='hover'>
              <img src={localStorage.photoUrl} />
            </button>
            <div ref={divRef} className='menu'>
              <p>{localStorage.name}</p>
              <div className='space'></div>
              <a onClick={signUserOut}>Sign Out</a>
            </div>


          </div>
        </div>

        {/* top nav bar */}
        <div className="val-cont-dash">
          <div className="a-val-cont-dash">
            <h1><i class="fa fa-globe" aria-hidden="true"></i></h1>
            <p> Country</p>
            <p>{cdata.Nation}</p>
          </div>
          <div className="b-val-cont-dash">
            <h1><i class="fa fa-calendar" aria-hidden="true"></i></h1>
            <p>Year</p>
            <p>{cdata.Year}</p>
          </div>
          <div className="c-val-cont-dash">
            <h1><i class="fa fa-users" aria-hidden="true"></i></h1>
            <p>Total Population</p>
            <p> {cdata.Population}</p>
          </div>
          <div className="d-val-cont-dash">
            <h1><i class="fa fa-user" aria-hidden="true"></i></h1>
            <p>Username</p>
            <p>{localStorage.name}</p>
          </div>

        </div>
        <div className="graph-cont-dash">
          <h2>Activities</h2>
          <select>
            <option>09 - April - 2023</option>
            <option>09 - April - 2023</option>
            <option>09 - April - 2023</option>
            <option>09 - April - 2023</option>
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
                <option>09 - April - 2023</option>
                <option>09 - April - 2023</option>
                <option>09 - April - 2023</option>
                <option>09 - April - 2023</option>
              </select>

            </div>
            <div className='chart-pie'>
              <Pie data={chartdata} options={options2}></Pie>
            </div>



          </div>
          <div className="todo">
            <div className="todos_section">
              <h3>Today's Schedule</h3>
              <p>See all <i class="fa fa-angle-right" aria-hidden="true"></i></p>
            </div>

            <div className="meetings-container">
              <div className='meetingTimeDirection'>
                <h3>Meeting with from kuta Bali</h3>
                <p>14:00-15:00</p>
                <p>at sunise road, kuta bali</p>
              </div>
              <div className='meetingTimeDirection2'>
                <h3>Meeting with from kuta Bali</h3>
                <p>14:00-15:00</p>
                <p>at sunise road, kuta bali</p>
              </div>
            </div>



          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard;