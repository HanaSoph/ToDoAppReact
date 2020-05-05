import React from "react";
import "./Completed.css";

function Completed(props) {
    const { text, urgent } = props;

    return (
        <div className="row list-group-item disabled">
            {text}
            {urgent === 1 ? " - !" : " "}
        </div>
    );
}

export default Completed; 