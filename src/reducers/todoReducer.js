const todoReducer = (state = {
    todos: [
    {   
        id: 1,
        name: "Todo 1",
        completed: false
    },

    {
        id: 2,
        name: "Todo 2",
        completed: false
    },

    {
        id: 3,
        name: "Todo 3",
        completed: false
    },

    {
        id: 4,
        name: "Todo 4",
        completed: false
    },

    ]
}, 
    action) => {

    switch(action.type) {
        case ('TOGGLE_TODO'):
            // map through the todos
            const newTodos = state.todos.map((item) => {

                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed : !item.completed
                    };
                }
                else {
                    return item;
                }
            });

            // return old state with new todos array
            return state = {
                ...state,
                todos : newTodos
            }
            
        default:
            return state;
    }
}

export default todoReducer;