import React from "react";


function Tasks(props) {
    //props = {text: "Book the photographer", urgent: true completed: true}
    
    const handleDeleteClick = () => {
        props.deleteTaskFunc(props.id);
    };

    const handleCompleteClick = () => {
        props.completeTaskFunc(props.id);
    };

    return (
            <div className="row row d-flex p-0">

                <div className="col-2 px-0 pt-1 pb-1">
                    <button 
                    type="button" 
                    className="btn" 
                    onClick={handleCompleteClick}>
                        ✔
                    </button>
                </div>

                <div className="col-8 p-2 list-group-item">
                    {props.text}
                    {props.urgent === 1 ? " - !" : " "}
                </div>

                <div className="col-2 px-0 pt-1 pb-1">
                    <button className="btn">
                        <i
                            className="fa fa-trash"
                            onClick={handleDeleteClick}>
                        </i>
                    </button>
                </div>

                
            </div>

        // <p>
        //     complete-button; {props.text}; {props.urgent === true ? "- !" : " "}; delete-button}
        // </p>
    );
}

export default Tasks;
