import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function DisplayCustomers() {
  const [customers, setStudents] = useState("");
  const [name, setName] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8070/users/get/${name}`
    );

    setStudents(response.data);
    console.log(response)
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Customer Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-customerM"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-customerM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to = "/display-customerM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to = "/complaints-customerM"><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
              </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
          <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="App">

      {/* Fetch data from API */}
      <div>
      <input type = "text" value={name} onChange = {(e)=>setName(e.target.value)} required/>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Search
        </button>
        <br />
      </div>

      {/* Display data from API */}
  
                    <p >👨<b style={{color:"red"}}>Name   : </b>{customers.name}</p>
                    <p >🏃<b style={{color:"green"}}>Age  : </b>{customers.age} years old</p>
                    <p >👫<b style={{color:"blue"}}>Gender: </b>{customers.gender}</p>
                    <p >🏕<b style={{color:"red"}}>Address: </b>{customers.address}</p>
                    <p >📱<b style={{color:"green"}}>Phone: </b>{customers.phone}</p>
                    <p >💌<b style={{color:"blue"}}>Email: </b>{customers.email}</p>
                  
    </div>
   </div>
  );
}