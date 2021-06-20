import './App.css';
import React, { useState } from 'react';

function App() {
  // 1. Initialize State
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = () => {
    console.log('SUBMITTED!');
  };

  const handleClearList = () => {
    console.log('CLEARED LIST!');
  };

  return (
    <div className='App'>
      <div className='topSection'>
        <p className='header'>To Do List</p>

        <input
          className='input'
          type='text'
          name='input'
          placeholder='Add an item!'
        />

        <button onClick={handleSubmit}>Submit</button>

        <button onClick={handleClearList}>Clear List</button>
      </div>

      <div className='todoList'>
        <div className='todoItem'>
          <p>1. meditate</p>
          <button>X</button>
          <button>Done</button>
        </div>
      </div>
    </div>
  );
}

export default App;
