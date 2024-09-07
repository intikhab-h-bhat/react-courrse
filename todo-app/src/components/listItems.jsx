import React from 'react'

const ToDoItem=(props) =>{

    return(        
        <li className="todo-item">
        <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span>{props.text}</span>
        </span> 
        <span>...</span> 
                   
        </li>
    )
};

export default ToDoItem;