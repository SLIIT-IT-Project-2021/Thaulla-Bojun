import React from "react";
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";

import StaffLogin from "./components/staff/StaffLogin";

import PrivateCustomerStaffRoute from "./components/routes/PrivateCustomerStaffRoute";

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


//Mithila section
import PrivateBranchStaffRoute from "./components/routes/PrivateBranchStaffRoute";

import Headerb from "./components/staff/branchM/Header";
import AddBranch from "./components/staff/branchM/AddBranch";
import Homeb from "./components/staff/branchM/Home";
import DisplayBranches from "./components/staff/branchM/DisplayBranches"
import Listb from "./components/staff/branchM/List"
import Editb from "./components/staff/branchM/Edit";
import BranchLogin from "./components/staff/branchM/login/BranchManagerLogin";
import PrivateBranchManagerStaff from "./components/staff/branchM/login/PrivateBranchManagerStaff";

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





            <Route path="/staff-login-branchM" exact component={BranchLogin} />
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {Headerb} /> 
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {PrivateBranchManagerStaff} /> 
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {Homeb} /> 
            <PrivateBranchStaffRoute path = "/add-branchM" exact component = {AddBranch} /> 
            <PrivateBranchStaffRoute path = "/display-branchM" exact component = {DisplayBranches} /> 
            <PrivateBranchStaffRoute path = "/edit-branchM" exact component = {Listb} /> 
            <PrivateBranchStaffRoute path = "/edit-branchM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Editb} />
            <Footer/>



            
          </div>

    </Router>

  
  );
}


