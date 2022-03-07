
import { GoogleLogin } from 'react-google-login';
import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate = useNavigate();
    const context = useContext(UserContext)
    const responseGoogle = (response) => {
        localStorage.setItem("token", response.tokenId)
        localStorage.setItem("imageUrl", response.profileObj.imageUrl)
        context.setUser(response.profileObj)
        navigate("/profile", { replace: true });
    }

    return (
        <GoogleLogin
            clientId="362693105321-t3fa91d4ola50iuknb28f0mhn9qe01dh.apps.googleusercontent.com"
            icon={false}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            style={{ lineHeight: "20px" }}
        />
    )
}

export default Login