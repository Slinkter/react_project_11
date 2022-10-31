import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"


function Modal(props) {
    const { children } = props;
    const id = document.getElementById("modal");
    const element = <div className="modal">{children}</div>;

    return ReactDOM.createPortal(element, id);
}

export default Modal;
