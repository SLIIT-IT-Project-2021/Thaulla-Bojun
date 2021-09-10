import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function AssignBranch() {
  const [managers, setManagers] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/orders'
    );

    setManagers(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Branch Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-branchM"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-branchM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Branch</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to = "/display-branchM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Branches</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link active" to = "/assign-branchM"><i class="fa fa-desktop" aria-hidden="true"></i> Assign Branch</Link>
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
      <h1>See Orders Details</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Orders
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style={{width:"70%",marginLeft:"50px"}}>
        {managers &&
          managers.map((manager, index) => {
            return (
              <div className="student" key={index}>
                <h3 className="badge bg-success">Order {index + 1}</h3>

                <div className="details">
                  <div>
                    <div style={{float:"right"}}>
                      
                      
                      
                    </div>
                    <p >👨<b style={{color:"red"}}>Order ID :</b>{manager.orderId}</p>
                    <p >👫<b style={{color:"blue"}}>Cetegory: </b>{manager.category}</p>
                    <p >🏃<b style={{color:"green"}}>Item Number: </b>{manager.itemNumber} </p>
                    <p >👫<b style={{color:"blue"}}>Name: </b>{manager.customerName}</p>
                    <p >❤️<b style={{color:"orange"}}>Address: </b>{manager.address}</p>
                    <p >👨<b style={{color:"red"}}>Date: </b>{manager.date}</p>
                  </div>
                </div>
              </div>
              
            );
          })}
          <a href="/assign-branchM"><button
                        type="submit"
                        className="btn btn-success"
                        
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></a>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}