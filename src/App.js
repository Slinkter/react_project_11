import { useState } from "react";
import "./App.css";

import { data } from "./db";
import GitHubUser from "./GitHubUser";
import { user } from "./db_user.js";

function App() {
    const [text, setText] = useState("a");
    const [list, setList] = useState(data);
    const [person, setPerson] = useState({
        name: "Luis",
        age: "25",
        country: "Perú",
    });

    const handleClick = () => {
        if (text === "a") {
            setText("b");
        } else {
            setText("a");
        }
    };

    const removeItem = (id) => {
        const newlist = list.filter((item) => item.id !== id);
        setList(newlist);
    };

    const handleUpdate = () => {
        setPerson({ ...person, name: "Luis Jhonatan" });
    };

    return (
        <div className="App">
            <h1>{text} </h1>
            <button className="btn" onClick={handleClick}>
                change text
            </button>

            {list.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <button onClick={() => removeItem(item.id)}>
                        eliminar
                    </button>
                </div>
            ))}

            <button className="" onClick={() => setList([])}>
                Clear all
            </button>

            <br />
            <div>
                <p>{person.name}</p>
                <p>{person.age}</p>
                <p>{person.country}</p>
                <button onClick={handleUpdate}>Update</button>
            </div>
            <div>
                <GitHubUser user={user} />
            </div>
        </div>
    );
}

export default App;
