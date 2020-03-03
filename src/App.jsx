import React from "react";

import TodoList from './components/TodoList';
import Clock from './components/Clock';
import AddTodo from "./AddTodo";

const App = () => {
    
    return (
        <main>
            <h1>Todo List</h1>
            <TodoList />
            <AddTodo />
            <Clock />
        </main>
    )
  }


export default App;