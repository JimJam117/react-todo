import React from 'react';


class TodoItem extends React.Component {

    constructor(){
        super();
    }
    
    render() {
        return(
            <li className="todo-item">
                <input  type="checkbox" 
                        onChange={() => this.props.handleChange(this.props.item.id)}
                        checked={this.props.item.completed} 
                        
                        />
                <span>{this.props.item.name}</span> 
            </li>
        )
    }

}


export default TodoItem;