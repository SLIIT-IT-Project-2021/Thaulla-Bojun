import React from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

import StaffLogin from "./components/staff/StaffLogin";

import PrivateCustomerStaffRoute from "./components/routes/PrivateCustomerStaffRoute";



//Customer part
import Header from "./components/staff/customerM/Header";
import AddCustomer from "./components/staff/customerM/AddCustomer";
import Home from "./components/staff/customerM/Home";
import Footer from "./components/staff/Footer";
import DisplayCustomers from "./components/staff/customerM/DisplayCustomers"
import SocialMedia from "./components/staff/SocialMedia";
import List from "./components/staff/customerM/List"
import Edit from "./components/staff/customerM/Edit";
import CustomerLogin from "./components/staff/customerM/login/CustomerLogin";
import PrivateCustomerStaff from "./components/staff/customerM/login/PrivateCustomerStaff";


//Supplier part
import PrivateSupplierManagerStaffRoute from "./components/routes/PrivateSupplierManagerStaffRoute";

import HeaderSupplier from "./components/staff/supplierM/Header";
import AddSupplier from "./components/staff/supplierM/AddSupplier";
import HomeSupplier from "./components/staff/supplierM/Home";
//import Footer from "./components/staff/Footer";
import DisplaySuppliers from "./components/staff/supplierM/DisplaySuppliers"
//import SocialMedia from "./components/staff/SocialMedia";
import ListSupplier from "./components/staff/supplierM/List"
import EditSupplier from "./components/staff/supplierM/Edit";
import SupplierLogin from "./components/staff/supplierM/login/SupplierLogin";
import PrivateSupplierManagerStaff from "./components/staff/supplierM/login/PrivateSupplierManagerStaff";

//user section
import PrivateRoute from "./components/routes/PrivateRoute";


import LoginScreen from "./components/screens/Login";
import RegisterScreen from "./components/screens/Register";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPasswordScreen from "./components/screens/ResetPassword";
import PrivateScreen from "./components/screens/Private";

export default function App() {
  return (
  
    <Router>
          <div>
            
            <Switch>
                <PrivateRoute path = "/" exact component = {PrivateScreen} />
                <Route path="/login" exact component = {LoginScreen} />
                <Route path="/register" exact component = {RegisterScreen} />
                <Route path="/forgotpassword" exact component = {ForgotPasswordScreen} />
                <Route path="/passwordreset/:resetToken" exact component = {ResetPasswordScreen} />
               

            </Switch>


            

            <SocialMedia />
            <Route path="/staff-login" exact component={StaffLogin} />
            <Route path="/staff-login-customerM" exact component={CustomerLogin} />
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {Header} /> 
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {PrivateCustomerStaff} /> 
            <PrivateCustomerStaffRoute path = "/staff-customerM" exact component = {Home} /> 
            <PrivateCustomerStaffRoute path = "/add-customerM" exact component = {AddCustomer} /> 
            <PrivateCustomerStaffRoute path = "/display-customerM" exact component = {DisplayCustomers} /> 
            <PrivateCustomerStaffRoute path = "/edit-customerM" exact component = {List} /> 
            <PrivateCustomerStaffRoute path = "/edit-customerM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Edit} /> 

            














            <Route path="/staff-login-supplierM" exact component={SupplierLogin} />
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {HeaderSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {PrivateSupplierManagerStaff} /> 
            <PrivateSupplierManagerStaffRoute path = "/staff-supplierM" exact component = {HomeSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/add-supplierM" exact component = {AddSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/display-supplierM" exact component = {DisplaySuppliers} /> 
            <PrivateSupplierManagerStaffRoute path = "/edit-supplierM" exact component = {ListSupplier} /> 
            <PrivateSupplierManagerStaffRoute path = "/edit-supplierM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {EditSupplier} /> 
            
            <Footer/>

          </div>

    </Router>

  
  );
}


