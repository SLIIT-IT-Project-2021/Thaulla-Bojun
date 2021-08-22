import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default function DisplayPromotions() {
  const [promotions, setPromotions] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/promotionView'
    );

    setPromotions(response.data);
   
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
            <Link className="nav-link active " aria-current="page" to = "/staff-customerM"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-customerM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/display-customerM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
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
      <h1>All Promotons</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> See Promotions
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style={{width:"70%"}}>
        {promotions &&
          promotions.map((promotion, index) => {
            return (
              <div className="student" key={index}>
                <h3 className="badge bg-success">Promotion {index + 1}</h3>

                <div className="details">
                  <div>
                    <div style={{float:"right"}}>
                      <img src ={"images/" + promotion.photo} style={{width:"200px" , height:"200px"}}
                      className = "border border-danger rounded-circle"
                      />
                    </div>
                    <p ><b style={{color:"red"}}>Food Item Name   : </b>{promotion.foodItemName}</p>
                    <p ><b style={{color:"green"}}>Quantity  : </b>{promotion.quantity}</p>
                    <p ><b style={{color:"blue"}}>Description: </b>{promotion.description}</p>
                    <p ><b style={{color:"red"}}>Discount Rate: </b>{promotion.discountRate}</p>
                    <p ><b style={{color:"green"}}>Prior Price: </b>{promotion.priorPrice}</p>
                    <p ><b style={{color:"blue"}}>Present price: </b>{promotion.presentPrice}</p>
                  
                  </div>
                
            
                  
    
                </div>
              </div>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}