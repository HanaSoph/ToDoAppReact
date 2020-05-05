import React from "react";


function Tasks(props) {
    const { text, urgent, id, completeTaskFunc, deleteTaskFunc } = props;

    return (
            <div className="row row d-flex p-0">

                <div className="col-2 px-0 pt-1 pb-1">
                    <button 
                    type="button" 
                    className="btn" 
                    onClick={() => completeTaskFunc(id)}>
                        ✔
                    </button>
                </div>

                <div className="col-8 p-2 list-group-item">
                    {text}
                    {urgent === 1 ? " - !" : " "}
                </div>

                <div className="col-2 px-0 pt-1 pb-1">
                    <button className="btn">
                        <i
                            className="fa fa-trash"
                            onClick={() => deleteTaskFunc(id)}>
                        </i>
                    </button>
                </div>            
            </div>
    );
}

export default Tasks;
