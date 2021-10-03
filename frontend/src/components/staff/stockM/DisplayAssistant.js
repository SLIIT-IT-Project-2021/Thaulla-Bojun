import React from 'react';
import '../../../styles.css';
import {Link} from "react-router-dom";


export default class DisplayAssistant extends React.Component{
  state = {
    query: "",
    data: [],
    filteredData: []
  };
  
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
   });

    return {
      query,
      filteredData
    };
  });
};

getData = () => {
  fetch('http://localhost:8070/stocks')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { query } = this.state;
      const filteredData = data.filter(element => {
        return(
          element.name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.age.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.gender.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.birthdate.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.phone.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.email.toLowerCase().includes(query.toLowerCase()) >= 0 ||
          element.photo.toLowerCase().includes(query.toLowerCase()) >= 0 
        )
      });

      this.setState({
        data,
        filteredData
      });
    });
};
componentWillMount() {
  this.getData();
}

render () {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
     <div className="container-fluid">
       <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Stock Management System</b></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
             <li className="nav-item">
               <Link className="nav-link " aria-current="page" to = "/staff-stockM" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to = "/add-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" to = "/display-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistant</Link>
             </li>
             <li className="nav-item">
                 <Link className="nav-link" to = "/addInven-stockM" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
             </li> 
             <li className="nav-item">
                 <Link className="nav-link" to = "/displayInven-stockM" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventory</Link>
             </li> 
           </ul>
         <form className="d-flex">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}
           placeholder="Search for..."
           value={this.state.query}
           onChange={this.handleInputChange}/>
           <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
         </form>
       </div>
     </div>
   </nav>
     <div className="App stockImage2" >
       <h1 style ={{color:"white", marginRight: "300px"}}>All Assistant</h1><br/>
 
       {/* Display data from API */}
       <div className="students" style = {{width: "80%", marginLeft: "70px"}}>
         {this.state.filteredData.length === 0 ?(<div className="alert alert-danger" style={{marginLeft:"380px", width: "25%"}}>
                                   <center>Data is not found<br/><br/>
                                   <img src="notfound.jpg" style={{width:"70%"}}/></center> <br/>
                               </div>
                           ): (this.state.filteredData.map(i => 
        <p>
           <div className="student" style={{background:"#DCDCDC", width:"520px"}}>
                 <div className="details">
                   <div>
                     <div style={{float:"right"}}>
                       <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px"}}
                       className = "border border-danger rounded-circle"
                       />
                     </div>
                     <p >👨 <b style={{color:"red"}}>Name   : </b>{i.name}</p>
                     <p >🏃 <b style={{color:"green"}}>Age   : </b>{i.age} years old</p>
                     <p >👫 <b style={{color:"blue"}}>Gender   : </b>{i.gender}</p>
                     <p >❤️ <b style={{color:"orange"}}>DOB    : </b>{i.birthdate}</p>
                     <p >🏡 <b style={{color:"red"}}>Address   : </b>{i.address}</p>
                     <p >📳 <b style={{color:"green"}}>phone   : </b>{i.phone}</p>
                     <p >💌 <b style={{color:"blue"}}>Email   : </b>{i.email}</p>
                   </div>
                 
                   <a href="/edit-stockM"><button className="btn btn-secondary">Edit</button></a>
                 </div>
              </div>

        </p>
          ))}
          </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
       </div>
       );
      }
   }