import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import TaskInput from './Task-input/Task-input';
import Lists from './Lists/Lists';
import Tasks from './Tasks/Tasks';
import Completed from './Completed/Completed'

function App() {
  //0 - this number is 1 piece of state I want to keep track of
  // const [counter, setCounter] = useState(0);

  const [tasks, setTasks] = useState([
    {
      text: "Decide on flowers",
      completed: false,
      urgent: false,
      id: 1
    },

    {
      text: "Book photographer",
      completed: false,
      urgent: true,
      id: 2
    },

    {
      text: "Write guest list",
      completed: false,
      urgent: false,
      id: 3
    },

    {
      text: "Design invitations",
      completed: false,
      urgent: false,
      id: 4
    },

    {
      text: "Research photographers",
      completed: true,
      urgent: false,
      id: 5
    },

    {
      text: "Book the venue",
      completed: true,
      urgent: false,
      id: 6
    },

    {
      text: "Decide theme",
      completed: true,
      urgent: false,
      id: 7
    },
  ])

  const completedTasks = tasks.filter(task => task.completed === true)
  const todoTasks = tasks.filter(task => task.completed === false)

  return (
    <div className="App">
      <Header />
      <div className="Main">

        <TaskInput />

        <div>

          <div className="row m-0 justify-content-center">
            <div className="col-sm-6 mr-sm-3">
              <div class="todotitle">
                <p> To Do ({todoTasks.length}) </p>
              </div>

              {todoTasks.map((task) => {
                return <Tasks
                  key={task.id}
                  text={task.text}
                  urgent={task.urgent} />
              })}

              {/* <Tasks text="Decide on flowers" urgent={false} />
              <Tasks text="Book photographer" urgent={true} />
              <Tasks text="Write guest list" urgent={false} />
              <Tasks text="Design invitations" urgent={false} /> */}
            </div>


            <div className="col-sm-5 mr-sm-2 pb-5">
              <div className="todotitle pt-3 pt-sm-0">
                <p> Completed</p>
              </div>

              {completedTasks.map((task) => {
                return <Completed
                  key={task.id}
                  text={task.text}
                  urgent={task.urgent} />
              })}

              {/* <Completed text="Research photographers" />
              <Completed text="Book the venue" />
              <Completed text="Decide on theme" /> */}
            </div>

            {/* <Lists /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
