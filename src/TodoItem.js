import React from 'react';


class TodoItem extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
        //console.log(this.props.handleChange(this.props.item.completed));
        return(
            <li style={
                this.props.item.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} 
                className="todo-item">
                    
                <input  type="checkbox" 
                        // onChange runs the passed handleChange method, passing this items id as param
                        onChange={() => this.props.handleChange(this.props.item.id)}
                        checked={this.props.item.completed} 
                        
                        />
                <span>{this.props.item.name}</span> 
                <button onClick={() => this.props.deleteTodo(this.props.item.id)}>X</button>
            </li>
        )
    }

}


export default TodoItem;