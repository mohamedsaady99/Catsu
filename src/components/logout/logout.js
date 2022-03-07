import { GoogleLogout } from 'react-google-login';
import React from 'react'

function Logout() {

    return (
        <GoogleLogout
            clientId="362693105321-t3fa91d4ola50iuknb28f0mhn9qe01dh.apps.googleusercontent.com"
            buttonText="Logout"
            icon={false}
            onLogoutSuccess={() => {
                console.log("you loged out");
                localStorage.clear();
                window.location.replace("/")
            }}
        >
        </GoogleLogout>
    )
}

export default Logout