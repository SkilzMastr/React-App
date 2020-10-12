import React from 'react'

//Function that is called in TodoList
//It also calls toggle.

export default function Todo({ todo, toggleTodo }) {
    
    
    //On click of checkbox, it toggles the todo.id
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                {todo.name}
            </label>
        </div>
    )
}

//Basicly on change of the checkbosxes it toggles them
