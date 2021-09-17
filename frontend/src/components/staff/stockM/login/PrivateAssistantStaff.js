import { useEffect } from "react";


const PrivateAssistantStaff = ({history})=>{

    useEffect(()=>{
        if(!localStorage.getItem("authTokenStaff")){  //push a user if he already logged in
            history.push("/staff-stockM");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authTokenStaff");
        history.push("/staff-login-stockM");
    }

    return(

            <div style={{backgroundColor:"DeepSkyBlue" , color : "white"}}>
                <img src="thaulla1.png" style={{width:"60px"}}/>
                <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i class="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                <marquee width="100%" direction="left" >
                ☸️❤️ Welcome to the Stock Management System ❤️✝️
                </marquee>
            </div>

    )

}

export default PrivateAssistantStaff;