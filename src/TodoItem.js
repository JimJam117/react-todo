import React from 'react';


class TodoItem extends React.Component {

    constructor(){
        super();
    }
    
    render() {
        return(
            <li className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} name="" id=""/>
                <span>{this.props.item.name}</span> 
            </li>
        )
    }

}


export default TodoItem;