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

//Thamali part
import PrivateAssistantStaffRoute from "./components/routes/PrivateCustomerStaffRoute";

import HeaderStock from "./components/staff/stockM/Header";
import AddAssistant from "./components/staff/stockM/AddAssistant";
import HomeAssistant from "./components/staff/stockM/Home";
//import Footer from "./components/staff/Footer";
import DisplayAssistant from "./components/staff/stockM/DisplayAssistant"
//import SocialMedia from "./components/staff/SocialMedia";
import ListAssistant from "./components/staff/stockM/List"
import EditAssistant from "./components/staff/stockM/Edit";
import AssistantLogin from "./components/staff/stockM/login/AssistantLogin";
import PrivateAssistantStaff from "./components/staff/stockM/login/PrivateAssistantStaff";

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

             {/*Thamali - Stock Management*/}

             <Route path="/staff-login-stockM" exact component={AssistantLogin} />
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {HeaderStock} /> 
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {PrivateAssistantStaff} /> 
            <PrivateAssistantStaffRoute path = "/staff-stockM" exact component = {HomeAssistant} /> 
            <PrivateAssistantStaffRoute path = "/add-stockM" exact component = {AddAssistant} /> 
            <PrivateAssistantStaffRoute path = "/display-stockM" exact component = {DisplayAssistant} /> 
            <PrivateAssistantStaffRoute path = "/edit-stockM" exact component = {ListAssistant} /> 
            <PrivateAssistantStaffRoute path = "/edit-stockM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {EditAssistant} /> 
            <Footer/>
            
          </div>

    </Router>

  
  );
}


