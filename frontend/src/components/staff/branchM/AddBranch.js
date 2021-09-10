import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const AddBranch = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            name: '',
            city : '',
            branchID : '',
            address: '',
            contactNo: '',
            email: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('address', newUser.address);
        formData.append('name', newUser.name);
        formData.append('branchID', newUser.branchID);
        formData.append('city', newUser.city);
        formData.append('contactNo', newUser.contactNo);
        formData.append('email', newUser.email);

        axios.post('http://localhost:8070/branches/add', formData)
             .then(res => {
                console.log(res);
                setLoading(false);
                alert("Image is uploaded successfully")
                setNewUser({name :'' , city : '' , branchID : '' , address : '' , photo : '' , contactNo : '' , email : ''})
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                alert(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
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
                <Link className="nav-link active" to = "/add-branchM"><i class="fa fa-user-circle" aria-hidden="true"></i> Create Branch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/display-branchM"><i class="fa fa-desktop" aria-hidden="true"></i> Display Branches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/assign-branchM"><i class="fa fa-desktop" aria-hidden="true"></i> Assign Branch</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
              <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
            </form>
          </div>
        </div>
      </nav>
        <div className="container" style={{width:"50%"}}><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="cmb-3">
                <label for="name" className="form-label">Branch Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the Branch name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange} required
                />
                <label for="city" className="form-label">City</label>
                <input 
                    type="text"
                    placeholder="Enter the City"
                    className="form-control"
                    name="city"
                    value={newUser.city}
                    onChange={handleChange} required
                />
                <label for="branchID" className="form-label">Branch ID</label>
                <input 
                    type="text"
                    placeholder="Enter the Branch ID"
                    className="form-control"
                    name="branchID"
                    value={newUser.branchID}
                    onChange={handleChange} required 
                />  

                <label for="address" className="form-label">Address</label>
                <input 
                    type="text"
                    placeholder="Enter the Address"
                    className="form-control"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange} required 
                />  
                <label for="contactNo" className="form-label">Contact No</label>
                <input 
                    type="text"
                    placeholder="Enter Contact No"
                    className="form-control"
                    name="contactNo"
                    value={newUser.contactNo}
                    onChange={handleChange} required pattern="[0-9]{10}"
                />  

                <label for="email" className="form-label">Email</label>
                <input 
                    type="text"
                    placeholder="Enter the email"
                    className="form-control"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                />  
            </div>
          
            <div className="jumbotron">
                <h1 className="display-4">Upload a Photo of Branch</h1>
                <p className="lead">
                Please choose a valid relavant photo 👩‍🎓
                </p>
                <hr className="my-4" />
            </div>
            <i class="fa fa-folder-open" aria-hidden="true"></i>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto} required
            />

            

            
            <br/>
            <div>
                     {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button
                        type="submit"
                        className="btn btn-primary mt-3"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true"></i> {loading ? 'Uploading...' : 'Upload'}
                     </button>
                         
            </div>
        </form>
        <br/>
        <a href="/add-branchM"><button
                        type="submit"
                        className="btn btn-success"
                        
                        ><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button></a>
        <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
        
    );
}

export default AddBranch;