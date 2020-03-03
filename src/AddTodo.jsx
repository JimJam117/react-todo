import React, {useState} from "react";

import { useDispatch, connect } from "react-redux";

import {createTodo} from './actions';


const AddTodo = () => {
    const [todoInput, setTodoInput] = useState("");

    const formHandler = (e) => {
        const value = e.target.value;
        setTodoInput(value);
    }

    // the dispatch, used for running the action
    const dispatch = useDispatch();

    return (
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

    );
  }


const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps, {})(AddTodo);