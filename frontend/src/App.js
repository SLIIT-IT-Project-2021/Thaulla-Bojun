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


 
            {/*kavi's frontend routes*/}
            <Route path="/staff-login-foodM" exact component={FoodManagerLogin} />
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {Header_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {PrivateFoodManagerStaff} /> 
            <PrivateFoodManagerStaffRoute path = "/staff-foodM" exact component = {Home_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/add-foodM" exact component = {AddChef} /> 
            <PrivateFoodManagerStaffRoute path = "/display-foodM" exact component = {DisplayChefs} /> 
            <PrivateFoodManagerStaffRoute path = "/edit-foodM" exact component = {List_fm} /> 
            <PrivateFoodManagerStaffRoute path = "/edit-foodM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Edit_fm} /> 


            <Route path="/staff-login-branchM" exact component={BranchLogin} />
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {Headerb} /> 
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {PrivateBranchManagerStaff} /> 
            <PrivateBranchStaffRoute path = "/staff-branchM" exact component = {Homeb} /> 
            <PrivateBranchStaffRoute path = "/add-branchM" exact component = {AddBranch} /> 
            <PrivateBranchStaffRoute path = "/display-branchM" exact component = {DisplayBranches} /> 
            <PrivateBranchStaffRoute path = "/edit-branchM" exact component = {Listb} /> 
            <PrivateBranchStaffRoute path = "/edit-branchM/:id/:name/:age/:gender/:birthdate/:photo" exact component = {Editb} />

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