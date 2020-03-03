import React from 'react';


const TodoItem = (props) => {
    return(
        <li style={
            props.item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} 
            className="todo-item">
                
            <input  type="checkbox" 
                    // onChange runs the passed handleChange method, passing items id as param
                    onChange={() => props.handleChange(props.item.id)}
                    checked={props.item.completed} 
                    
                    />
            <span>{props.item.name}</span> 
            <button onClick={() => props.deleteTodo(props.item.id)}>X</button>
        </li>
    )
}


export default TodoItem;