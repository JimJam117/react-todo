import React from "react";


function App() {
    return (
        <div>
            <h1>Todo List</h1>
            <ul className="todo-container">
                 <li className="todo-item">
                    <input type="checkbox" name="" id=""/>
                    <span>Item 1</span> 
                </li>
                 <li className="todo-item">
                    <input type="checkbox" name="" id=""/>
                    <span>Item 2</span> 
                </li>
                 <li className="todo-item">
                    <input type="checkbox" name="" id=""/>
                    <span>Item 3</span> 
                </li>

            </ul>

        </div>
    );

}

export default App;