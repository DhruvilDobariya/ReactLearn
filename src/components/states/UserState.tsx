import { useState } from "react";

type User = {
    id : number,
    name : string
}

export const UserState = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = () =>{
        setUser({
            id : 1,
            name : "Dhruvil"
        });
    }

    const handleLogout = () =>{
        setUser(null);
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                Id: {user?.id}
                <br />
                Name: {user?.name}
            </div>
        </div>
    );
}

/* export const UserState = () => {
    const [user, setUser] = useState<User>({} as User);

    const handleLogin = () =>{
        setUser({
            id : 1,
            name : "Dhruvil"
        });
    }

    const handleLogout = () =>{
        setUser(null);
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>
                Id: {user.id}
                <br />
                Name: {user.name}
            </div>
        </div>
    );
} */