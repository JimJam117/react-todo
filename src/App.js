import React from "react";
import TodoItem from './TodoItem';

//import data from './data.js';
const data = [
    {
        id : 1,
        name : "Item 1",       
    },
    
    {
        id : 2,
        name : "Item 2",       
    },
    {
        id : 3,
        name : "Item 3",       
    }
    

]


function App() {
    const dataMapped = data.map(item => <TodoItem name={item.name} />);
    console.log(dataMapped);
    return (
        <div>
            <h1>Todo List</h1>
            <ul className="todo-container">
            {dataMapped}
            </ul>
        </div>
    );

}

export default App;