import React from "react";
import {Link} from "react-router-dom";


function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-dark" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}><b>Branch Management System</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-branchM" style={{color:"orange"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-branchM" style={{color:"orange"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Branch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-branchM" style={{color:"orange"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Branches</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/assign-branchM" style={{color:"orange"}}><i class="fa fa-desktop" aria-hidden="true"></i> Assign Branch</Link>
              </li>
          </ul>
          
        </div>
      </div>
    </nav>
    )
}

export default Header;