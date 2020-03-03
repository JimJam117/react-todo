import React from "react";

import TodoList from './components/TodoList';
import Clock from './components/Clock';
import AddTodo from "./AddTodo";

const App = () => {
    
    return (
        <div className="app">
            <header>
                <h1>Todo List</h1>
            </header>
            <main>
                <AddTodo />
                <TodoList />

                <Clock />
            </main>

            <footer>
                <a href="https://github.com/JimJam117/react-todo">Github Page</a>
            </footer>
        </div>
        
    )
  }


export default App;