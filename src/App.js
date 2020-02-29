import React, {useEffect} from "react";
import TodoItem from './TodoItem';

// import Clock from './Clock';
import data from './data.js';
import { useSelector, useDispatch, connect } from "react-redux";

import {increment, toggleTodo} from './actions';

const App = (props) => {
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

    const dataMapped = props.todo.todos.map((item) => 
        <TodoItem
            key = {item.id}
            item = {item}
            handleChange={() => dispatch(toggleTodo(item.id))} // passes the handleChange method into the TodoItem
        />
        );


    return (
    <div>
        <h1>Todo</h1>
            <ul className="todo-container">
                
                {dataMapped}

            </ul>
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