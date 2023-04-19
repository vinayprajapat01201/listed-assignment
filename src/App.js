import React from "react";
import Login from "./components/Login/Login.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';


function App() {
  return (
    
    <div>
      <Router>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='Dashboard' element = {<Dashboard/>}/>
      </Routes>
    </Router>
    </div>
    

  );
}

export default App;