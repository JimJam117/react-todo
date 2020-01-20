import React from 'react';



function TodoItem(props){
    return(
        <li className="todo-item">
            <input type="checkbox" name="" id=""/>
            <span>{props.name}</span> 
        </li>
    )

}

export default TodoItem;