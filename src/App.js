import React, {useEffect, useState} from "react";
import TodoItem from './TodoItem';

// import Clock from './Clock';
import data from './data.js';
import { useSelector, useDispatch, connect } from "react-redux";

import {increment, toggleTodo, deleteTodo, createTodo} from './actions';


const App = (props) => {
    const [todoInput, setTodoInput] = useState("");

    const formHandler = (e) => {
        const value = e.target.value;
        setTodoInput(value);
    }

    // Selecting the clock from the store
    const clock = useSelector(state => state.clock);

    // the dispatch, used for running the action
    const dispatch = useDispatch();

    // useEffect, used to increment the clock value
    useEffect(() => {
        // the interval
        const id = setInterval(() => dispatch(increment()), 1000);

        // return the cleanup
        return () => clearInterval(id);

        // the input
    }, [clock])

    console.log(props.todo.todos);
    const dataMapped = props.todo.todos.map((item) => 
        <TodoItem
            key = {item.id}
            item = {item}
            handleChange={() => dispatch(toggleTodo(item.id))} // passes the handleChange method into the TodoItem
            deleteTodo = {() => dispatch(deleteTodo(item.id))}
        />
        );


    return (
    <div>
        <h1>Todo</h1>
            <ul className="todo-container">
                
                {dataMapped}

            </ul>

            <form 
                onSubmit={(formContent) => {
                    formContent.preventDefault(); 
                    dispatch(createTodo(todoInput));
                    setTodoInput("");
                }}
            >
                <label>
                    Create Todo
                    <input onChange={formHandler} value={todoInput} name="content" placeholder="todo" type="text"/>
                </label>

                <button type="submit">Create</button>

            </form>

            {/* <button onClick={() => dispatch({type: 'TOGGLE_TODO', payload:1})}>+</button> */}
        <h1>Clock: {clock}</h1>
    </div>
    );
  }


const mapStateToProps = (state) => {
    return {
        clock: state.clock,
        todo: state.todo
    }
}

export default connect(mapStateToProps, {})(App);