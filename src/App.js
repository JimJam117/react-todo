import React from "react";
import TodoItem from './TodoItem';

import data from './data.js';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            title : "Todo List",
            todos : data,
        }

        // every method that uses "setState" should be bound to the class
        this.handleChange = this.handleChange.bind(this);
    }

    // method for handling change, takes id to toggle
    handleChange(id) {
        //console.log(id);

        // set the state
        this.setState(
            // take the prevState for use in creating new array
            prevState => {
            // a newTodos array that maps through the current todos array, 
            // if the id is the same as the handleChange param then switch
            let newTodos = this.state.todos.map(todo => {
                if(todo.id == id) {todo.completed = !todo.completed}
                return todo;
            });

            // return the newTodos array as todos
            return {
                todos : newTodos
            }
        });
    }

    render() {
    const dataMapped = this.state.todos.map(item => 
        <TodoItem 
            key={item.id} 
            item={item} 
            handleChange={this.handleChange} // passes the handleChange method into the TodoItem
        />
    );
    
    return (
        <div>
            <h1>{this.state.title}</h1>
            <ul className="todo-container">
            {dataMapped}
            </ul>
        </div>
    );
    }
}


export default App;