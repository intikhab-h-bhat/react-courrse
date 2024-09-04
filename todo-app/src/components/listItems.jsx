import React from 'react'

const ToDoItem=() =>{

    return(        
        <li className="todo-item">
        <span>
        <input type="checkbox" />
        <span>Eat</span>
        </span> 
        <span>...</span> 
                   
        </li>
    )
};

export default ToDoItem;