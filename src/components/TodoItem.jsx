import React from 'react';


const TodoItem = (props) => {
    return(
        <li onClick={() => props.handleChange(props.item.id)} className={props.item.completed ? "todo-item todo-item-completed" : "todo-item"}>
            <div className={props.item.completed ? "circle circle-green" : "circle"}>
                {props.item.completed ? <i className="fas fa-check"></i> : null} 
            </div>

            <span>{props.item.name}</span> 
            <button onClick={() => props.deleteTodo(props.item.id)}>X</button>
        </li>
    )
}


export default TodoItem;