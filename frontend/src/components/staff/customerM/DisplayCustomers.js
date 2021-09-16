import React, { useState , useEffect} from 'react';
import "./CustomerScreen.css";
import "./Customer.css";
import {Link} from "react-router-dom";

 const  DisplayCustomers =() => {
  const [customers, setCustomers] = useState("");

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("http://localhost:8070/users");
      const data = await response.json();

      setCustomers(data) ;
    }
  }, []); 
    
  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Customer Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-customerM" style={{color:"#00ff00"}}><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-customerM" style={{color:"#00ff00"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to = "/display-customerM" style={{color:"#00ff00"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Profiles</Link>
          </li>
          <li className="nav-item">
                <Link className="nav-link" to = "/complaints-customerM" style={{color:"#00ff00"}}><i class="fa fa-comments" aria-hidden="true"></i> Complaints</Link>
              </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
          <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="bg4">
    <div className="homescreen">
      <h2 className="homescreen__title" style={{color:"white"}}>All Customer Profiles</h2>

      <div className="homescreen__products">
        {/* display books from the API */}
          {customers && customers.map((customer, index) => (
            <div className="product">
            <img src={"images/"+customer.photo} border="0'"/>

            <div className="product__info">
                    <p >👨<b style={{color:"red"}}>Name   : </b>{customer.name}</p>
                    <p >🏃<b style={{color:"green"}}>Age  : </b>{customer.age} years old</p>
                    <p >👫<b style={{color:"blue"}}>Gender: </b>{customer.gender}</p>
                    <p >🏕<b style={{color:"red"}}>Address: </b>{customer.address}</p>
                    <p >📱<b style={{color:"green"}}>Phone: </b>{customer.phone}</p>
                    <p >💌<b style={{color:"blue"}}>Email: </b>{customer.email}</p>

                <Link to = {`/edit-customerM`} className="info__button" style={{width:"100%"}}>View</Link>
            </div>
        </div>
          ))}

        </div>
  </div>
    </div>
</div>
 
  );
}

export default DisplayCustomers;





