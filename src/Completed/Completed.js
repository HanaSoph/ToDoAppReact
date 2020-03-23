import React from "react";

function Completed(props) {
    return (
        <div className="row list-group-item disabled">
            {props.text}
            {props.urgent}
        </div>
    );
}

export default Completed; 