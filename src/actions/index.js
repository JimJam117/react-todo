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