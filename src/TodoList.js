import React from 'react'
import Todo from './Todo'


//This function has params for todos and toggleTodo
//It just handles a little bit of mapping, then sends it to ./Todo.js

export default function TodoList( {todos, toggleTodo} ) {
    return (
        todos.map(todo=>{
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
