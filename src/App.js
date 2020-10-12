import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
//uuid is a package to make a random id for the todos



//Name of Local Storage
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //Some stuff I don't understand.
  const [todos, setTodos]= useState([])
  const todoNameRef = useRef()
  

  //This useEffect loads todos from the local storage. It has a blank array, so it runs once.
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //This useEffect adds items to local storage, on change of todos.
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])



  //This function changes todos to true or false on checkbox.
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  //On the creation of a todo this function runs, it adds the todo name to the array, with some info.
  function handleAddTodo(e){
    //This ref gets the value of the input, you can see it in the return.
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, {id: uuidv4(), name:name, complete:false}]
    })
    //Clears input
    todoNameRef.current.value = null
  }

  //This function handles the clearing of todo that are complete.
  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  //Everything in the return is HTML/JS
  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Complete</button>
    <div>{todos.filter(todo => !todo.complete).length} Left Todo</div>
    </>
  );
}
/*
Let me explain the tags (Anything in {} is JS):
<TodoList>, this is a custom tag made in ./TodoList.js 
<input> This has a ref, we call it to get the input of the todo name
<button> On click it calls a function.
<div> basic div for HTML displays todos left.
*/



//Exports the function.
export default App;
