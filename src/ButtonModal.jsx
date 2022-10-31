import React, { useState } from "react";
import Modal from "./Modal";

function ButtonModal(props) {
    const { login } = props;

    /*      const url = `https://api.github.com/users/${login} `; */
    const url = "test";

    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    useState(() => {
        fetch(url)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    setLoading(false);
                    setError(true);
                    throw Error;
                }
            })
            .then((rpta) => {
                const { login } = rpta;
                setUser(login);
                setLoading(false);
                setError(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <button onClick={() => handleOpenModal()}>click</button>
            {!!openModal && (
                <Modal>
                    <div>
                        <p>{login}</p>
                        <button onClick={() => setOpenModal(false)}>
                            Cerrar
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default ButtonModal;
