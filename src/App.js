import React, {useState} from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos]= useState(['Todo 0', 'Todo 1'])
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 Left Todo</div>
    </>
  );
}

export default App;
