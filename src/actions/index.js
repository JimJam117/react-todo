export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const createTodo = (id) => {
    return {
        type: 'CREATE_TODO',
        payload: id
    }
}