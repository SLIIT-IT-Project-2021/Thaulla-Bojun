import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';
import {Link} from "react-router-dom";
import "./chatBot.css"

export default class CustomerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/users')
      .then(res => {
        this.setState({
          customers: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.customers.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }

  render() {
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
        </nav><br/>
        <Link to = "/generate-pdf">
          <div>
              <button className="info__button" type="primary" style={{float:"right"}}><i class="fa fa-cogs" aria-hidden="true"></i> Generate Report</button> 
          </div>
        </Link>
        
        <div className="table-wrapper container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>
        </div>
    </div>
    );
  }
}