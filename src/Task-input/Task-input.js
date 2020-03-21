import React from "react";
import "./Task-input.css";

function TaskInput() {
    return (
        <section>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add your task" aria-label="Add Task"
                                aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary"
                                        type="button"
                                        style={{padding:" 2px 10px", fontSize: "20px"}}
                                        id="button-addon2">+</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default TaskInput;