import React from 'react';
import './App.css';
import Header from './Header/Header';
import TaskInput from './Task-input/Task-input';
import Lists from './Lists/Lists';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <TaskInput />
        <Lists />
      </div>
    </div>
  );
}

export default App;
