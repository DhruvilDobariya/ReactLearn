import React from "react";
import {Login} from './Login';
import {ProfileProps} from './Profile';

type PrivateProps = {
    isLoggedin : boolean,
    component : React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedin, component : Component} : PrivateProps) =>{
    if(isLoggedin){
        return(
            <Component name="Dhruvil"/>
        );
    }
    else{
        return <Login/>
    }
}