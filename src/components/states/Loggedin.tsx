import { useState } from "react";

export const Loggedin = () =>{
    const [isLogIn, setIsLoggedin] = useState(false);

    const handleLogin = () =>{
        setIsLoggedin(true);
    }

    const handleLogout = () => {
        setIsLoggedin(false);
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                User is {isLogIn ? "loggedin" : "loggedout"}
            </div>
        </div>
    );
}