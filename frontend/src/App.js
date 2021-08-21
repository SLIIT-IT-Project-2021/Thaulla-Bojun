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

//kavi's section
import PrivateFoodManagerStaffRoute from "./components/routes/PrivateFoodManagerStaffRoute";
import Header_fm from "./components/staff/foodM/Header";
import AddChef from "./components/staff/foodM/AddChef";
import Home_fm from "./components/staff/foodM/Home";
import DisplayChefs from "./components/staff/foodM/DisplayChefs"
import List_fm from "./components/staff/foodM/List"
import Edit_fm from "./components/staff/foodM/Edit";
import FoodManagerLogin from "./components/staff/foodM/login/FoodManagerLogin";
import PrivateFoodManagerStaff from "./components/staff/foodM/login/PrivateFoodManagerStaff";

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

            {/*kavi's frontend routes*/}
            <Route path="/staff-login-foodM" exact component={FoodManagerLogin} />
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {Header_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {PrivateFoodManagerStaff} /> 
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {Home_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/add-foodM" exact component = {AddChef} /> 
            <PrivateFoodManagerStaffRoute path = "/display-foodM" exact component = {DisplayChefs} /> 
            <PrivateFoodManagerStaffRoute path = "/edit-foodM" exact component = {List_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/edit-foodM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Edit_fm} /> 


            <Footer/>
            
          </div>

    </Router>

  
  );
}


