import React from 'react';
// import apple from "../../images/apple.png"

// import dashboards from "../../images/dashboard.png";
// import users from "../../images/users.png";
// import schedules from "../../images/schedules.png";
// import transactions from "../../images/transactions.png";
// import settings from "../../images/settings.png";
import profile from "../../images/profile.jpeg"
import "../Dashboard/dashboard.css";
import notification from "../../images/notification.png";


const dashboard = () => {
  return (  
  <div className="main-dash">
  <div className="nav-dash">
      <div className="in-nav-dash">
          <h1>Board.</h1>
          <a href="#dashboard">Dashboard</a>
          <a href="#">Transactions</a>
          <a href="#">Schedules</a>
          <a href="#">Users</a>
          <a href="#">Settings</a>
          {/* <a><img src={dashboards} alt = "logo"/><p>Dashboard</p></a>
          <a><img src={transactions} alt = "logo"/><p>Transactions</p></a>
          <a><img src={schedules} alt = "logo" /><p>Schedules</p></a>
          <a><img src={users}  alt = "logo"/><p>Users</p></a>
          <a><img src={settings} alt = "logo" /><p>Settings</p></a> */}
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
              <img src={profile} />


          </div>
      </div>
      <div className="val-cont-dash">
          <div className="a-val-cont-dash">
              <p>Total Revenues</p>
              <b>hello</b>
          </div>
          <div className="b-val-cont-dash">
              <p>Total Transactions</p>
              <b>$222000</b>
          </div>
          <div className="c-val-cont-dash">
              <p>Total Likes</p>
              <b>$222000</b>
          </div>
          <div className="d-val-cont-dash">
              <p>Total Users</p>
              <b>$222000</b>
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

              
          </div>


      </div>
      <div className="charts-cont-dash">
          <div className="pie-graph">
              {/* <Pie ></Pie> */}
              <div className="in-pie-graph">
                  <h3>Top Products</h3>
                  <select>
                      <option>hello</option>
                      <option>hello</option>
                      <option>hello</option>
                      <option>hello</option>
                  </select>

              </div>
              

          </div>
          <div className="todo">

          </div>

      </div>

  </div>

</div>
)
}

export default dashboard