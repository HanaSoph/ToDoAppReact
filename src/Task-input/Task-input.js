import React, { useState } from "react";
import "./Task-input.css";

function TaskInput(props) {

    const [taskText, setTaskText] = useState("");
    const [urgent, setUrgent] = useState(false);

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleUrgent = (event) => {
        setUrgent(event.target.checked);
    }

    const handleAddTask = () => {
        if (taskText === "") {
            alert("Please enter a task");
        } else {
        props.addNewTaskFunc(taskText, urgent)
        setTaskText("");
        setUrgent(false);
    }}

    return (
        <section>
            <div className="row">
                <div className="col-10">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Add your task" 
                            aria-label="Add Task"
                            aria-describedby="button-addon2" 
                            value={taskText} 
                            onChange={handleTextChange} />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                style={{ padding: " 2px 10px", fontSize: "20px" }}
                                id="button-addon2"
                                onClick={handleAddTask}>+</button>
                        </div>
                    </div>
                </div>
                <div className="col-2 pt-2">
                    <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="urgentCheck" 
                    checked={urgent} 
                    onChange={handleUrgent} />
                    <label 
                    className="form-check-label" 
                    htmlFor="urgentCheck">
                        Urgent?
                    </label>
                </div>
            </div>
        </section>
    )
}

export default TaskInput;