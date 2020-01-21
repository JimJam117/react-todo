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
    }

    render() {
    const dataMapped = this.state.todos.map(item => <TodoItem key={item.id} item={item} />);
    
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