import React from "react";
import "./Completed.css";

function Completed(props) {
    return (
        <div className="row list-group-item disabled">
            {props.text}
            {props.urgent === 1 ? " - !" : " "}
        </div>
    );
}

export default Completed; 