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



 //Raveena - Marketing Manager

import PrivateMarketingManagerStaffRoute from "./components/routes/PrivateMarketingManagerStaffRoute";
import Header_MM from "./components/staff/MarketingM/Header";
import AddPromotions_MM from "./components/staff/MarketingM/AddPromotions";
import Home_MM from "./components/staff/MarketingM/Home";
import DisplayPromotions_MM from "./components/staff/MarketingM/DisplayPromotions"
import List_MM from "./components/staff/MarketingM/List"
import Edit_MM from "./components/staff/MarketingM/Edit";
import MarketingLogin from "./components/staff/MarketingM/login/MarketingLogin";
import PrivateMarketingStaff from "./components/staff/MarketingM/login/PrivateMarketingStaff";

//user section
import PrivateRoute from "./components/routes/PrivateRoute";


import LoginScreen from "./components/screens/Login";
import RegisterScreen from "./components/screens/Register";
import ForgotPasswordScreen from "./components/screens/ForgotPassword";
import ResetPasswordScreen from "./components/screens/ResetPassword";
import PrivateScreen from "./components/screens/Private";
//import AddChef from "./components/staff/foodM/AddChef";

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

            
             {/*Raveena -Routes*/}
            
             <Route path="/staff-login-MarketingM" exact component={MarketingLogin} />
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {Header_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {PrivateMarketingStaff} /> 
            <PrivateMarketingManagerStaffRoute path = "/staff-MarketingM" exact component = {Home_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/add-MarketingM" exact component = {AddPromotions_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/display-MarketingM" exact component = {DisplayPromotions_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/edit-MarketingM" exact component = {List_MM} /> 
            <PrivateMarketingManagerStaffRoute path = "/edit-MarketingM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Edit_MM} /> 
            <Footer/>

          </div>

    </Router>

  
  );
}