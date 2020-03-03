import React from "react";
import TodoItem from './TodoItem';

import { useSelector, useDispatch } from "react-redux";
// import {connect} from 'react-redux'; // connect needed for hook-less connection to store, using hooks instead now

import {toggleTodo, deleteTodo} from '../actions';


const TodoList = (props) => {

    const todos = useSelector(state => state.todo.todos);

    // the dispatch, used for running the action
    const dispatch = useDispatch();

    // all of the todos within the todos array in the store
    const dataMapped = todos.map((item) => 
        <TodoItem
            key = {item.id}
            item = {item}
            handleChange={() => dispatch(toggleTodo(item.id))}
            deleteTodo = {() => dispatch(deleteTodo(item.id))}
        />
        );

    return (
            <ul className="todo-container">
                {dataMapped}
            </ul>
    );
  }


export default TodoList;

// For connecting to the store without using hooks
// I am currently using 'useSelector' instead of this method

// const mapStateToProps = (state) => {
//     return {
//         todo: state.todo
//     }
// }

// export default connect(mapStateToProps, {})(TodoList);