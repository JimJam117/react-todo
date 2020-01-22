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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        console.log(id);
        this.setState(prevState => {
            let newTodos = this.state.todos.map(todo => {
                if(todo.id == id) {todo.completed = !todo.completed}
                return todo;
            });
            return {
                todos : newTodos
            }
        });
    }

    render() {
    const dataMapped = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />);
    
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