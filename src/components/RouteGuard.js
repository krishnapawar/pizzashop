import React from "react";
import {route, Redirect, Route} from "react-router-dom";
const RouteGuard =({component:Component,...rest})=>{
    function hasJWT(){
        let flag = false;
        flag = localStorage.getItem('token') ? true : false;
        return flag;
    }
    return(
        <route {...rest}
            render={
                props => (
                    hasJWT() ?
                    <Component {...props}/>
                    :<Redirect to={{ pathname:"/login" }}/>
                )
            }
        />
    );
}
export default RouteGuard;