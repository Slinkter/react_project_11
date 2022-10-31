import React, { useEffect, useState } from "react";
import "./GitHubUser.css";
import ButtonModal from "./ButtonModal";

function GitHubUser(props) {
    //url
    const {user} = props
    /* const url = "https://api.github.com/users"; */
    // useState list user
    const [arrayuser, setArrayUser] = useState(user);
    // funcion fetch user
    const getUserAPI = async (url) => {
        const res = await fetch(url);
        const rpta = await res.json();
        console.log(rpta);
        setArrayUser(rpta);
        return rpta;
    };

    // useEffect
    useEffect(() => {
        /* getUserAPI(url); */

    }, []);

    return (
        <div>
            <h3> Users github</h3>
            <ul className="users">
                {arrayuser.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>

                                <ButtonModal login={login} />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default GitHubUser;
