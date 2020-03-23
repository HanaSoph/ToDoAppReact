import React from "react";

function Tasks(props) {
    //props = {text: "Book the photographer", urgent: true completed: true}
    return (
            <div className="row row d-flex p-0">

                <div className="col-2 px-0 pt-1 pb-1">
                    <button type="button" class="btn">✔</button>
                </div>

                <div className="col-8 p-2 list-group-item">
                    {props.text}
                    {props.urgent === true ? " - !" : " "}
                </div>

                <div className="col-2 px-0 pt-1 pb-1">
                    <button className="btn"><i class="fa fa-trash"></i></button>
                </div>

                
            </div>

        // <p>
        //     complete-button; {props.text}; {props.urgent === true ? "- !" : " "}; delete-button}
        // </p>
    );
}

export default Tasks;