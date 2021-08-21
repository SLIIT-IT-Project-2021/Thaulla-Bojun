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

//Chandima-Delivery Manager
import PrivateDeliveryStaffRoute from "./components/routes/PrivateDeliveryStaffRoute";

import Header_dm from "./components/staff/deliveryM/Header";
import AddDeliveryPerson from "./components/staff/deliveryM/AddDeliveryPerson";
import Home_dm from "./components/staff/deliveryM/Home";
 
import DisplayDeliveryPerson from "./components/staff/deliveryM/DisplayDeliveryPerson"
 
import List_dm from "./components/staff/deliveryM/List"
import Edit_dm from "./components/staff/deliveryM/Edit";
import DeliveryPersonLogin from "./components/staff/deliveryM/login/DeliveryPersonLogin";
import PrivateDeliveryStaff from "./components/staff/deliveryM/login/PrivateDeliveryStaff";

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


             {/*chandima-Delivery Management*/} 
           { /*<Route path="/staff-login" exact component={StaffLogin} />*/}
            <Route path="/staff-login-deliveryM" exact component={DeliveryPersonLogin} />
            <PrivateDeliveryStaffRoute path = "/staff-deliveryM" exact component = {Header_dm} /> 
            <PrivateDeliveryStaffRoute path = "/staff-deliveryM" exact component = {PrivateDeliveryStaff} /> 
            <PrivateDeliveryStaffRoute path = "/staff-deliveryM" exact component = {Home_dm} /> 
            <PrivateDeliveryStaffRoute path = "/add-deliveryM" exact component = {AddDeliveryPerson} /> 
            <PrivateDeliveryStaffRoute path = "/display-deliveryM" exact component = {DisplayDeliveryPerson} /> 
            <PrivateDeliveryStaffRoute path = "/edit-deliveryM" exact component = {List_dm} /> 
            <PrivateDeliveryStaffRoute path = "/edit-deliveryM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Edit_dm} /> 




            <Footer/>




            

            
          </div>

    </Router>

  
  );
}