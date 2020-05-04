import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from './Header/Header';
import TaskInput from './Task-input/Task-input';
import Tasks from './Tasks/Tasks';
import Completed from './Completed/Completed'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from Backend (GET)
    axios.get("https://q92guqntq6.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        console.log("Success", response.data);
        let newTasks = response.data
        
        // SORTING COMPLETED BY OLDEST TO NEWEST
        newTasks.sort(function (a, b) {
          let dateA = new Date(a.Date), dateB = new Date(b.Date);
          return dateB - dateA;
        })
        // if the length of the completed list is > 7 then remove the oldest item
        newTasks.slice(7);
        setTasks(newTasks);
      })
      .catch(err => {
        console.log("Error", err);
      });
    // the array would normally contain values that may change, and React would run the above code WHEN that value changes
    // "Array of dependencies"
  }, []);

  const addNewTask = (text, urgent) => {
    axios.post("https://q92guqntq6.execute-api.eu-west-1.amazonaws.com/dev/tasks", {
      Description: text,
      Urgent: urgent,
      Date: new Date()
    })
      .then(response => {
        const newTask = response.data;
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
      })
      .catch(err => {
        console.log("Error creating task", err);
      });


  };

  const setTaskComplete = (id) => {
    axios.put(`https://q92guqntq6.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, {
      Completed: 1,
      Date: new Date()
    })
      .then(response => {
        console.log("Updated", response);
        const newTasks = tasks.map(task => {
          if (task.TaskId === id) {
            task.Completed = 1
            task.Date = new Date();
          }
          return task;
        })

        // SORTING COMPLETED BY OLDEST TO NEWEST
        newTasks.sort(function (a, b) {
          let dateA = new Date(a.Date), dateB = new Date(b.Date);
          return dateB - dateA;
        })

        // if the length of the completed list is > 7 then remove the oldest item
        if (newTasks.length > 7) {
          newTasks.pop()
        }

        setTasks(newTasks);
      })
      .catch(err => {
        console.log("Error updating task", err);
      })
  };


  const deleteTask = (id) => {
    axios.delete(`https://q92guqntq6.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
      .then(response => {
        const filteredTasks = tasks.filter((task) => {
          if (task.TaskId === id) {
            return false;
          } else {
            return true;
          }
        });
        setTasks(filteredTasks)
      })
      .catch(err => {
        console.log("API Error", err);
      })
  }

  const completedTasks = tasks.filter(task => task.Completed === 1)
  const todoTasks = tasks.filter(task => task.Completed === 0)

  return (
    <div className="App">
      <Header />
      <div className="Main">

        <TaskInput addNewTaskFunc={addNewTask} />
        <div>

          <div className="row m-0 justify-content-center">
            <div className="col-sm-6 mr-sm-3">
              <div className="todotitle">
                <p> To Do ({todoTasks.length}) </p>
              </div>

              {todoTasks.map(task => {
                return (
                  <Tasks
                    key={task.TaskId}
                    completeTaskFunc={setTaskComplete}
                    completed={task.Completed}
                    text={task.Description}
                    urgent={task.Urgent}
                    id={task.TaskId}
                    deleteTaskFunc={deleteTask}
                  />
                );
              })}
            </div>


            <div className="col-sm-5 mr-sm-2 pb-5">
              <div className="todotitle pt-3 pt-sm-0">
                <p> Completed</p>
              </div>

              {completedTasks.map(task => {
                return (
                  <Completed
                    key={task.TaskId}
                    text={task.Description}
                    urgent={task.Urgent}
                    id={task.TaskId}
                  />
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
