const todoReducer = (
    // initial state
    state = {
        todos: [{
                id: 1,
                name: "learn React",
                completed: false
            },

            {
                id: 2,
                name: "Learn Redux",
                completed: false
            },

            {
                id: 3,
                name: "Make a Todo List in React-Redux",
                completed: false
            },

        ]
    },

    action) => {

    switch (action.type) {
        
        case ('TOGGLE_TODO'):
            
            return state = {
                ...state,
                todos: (
                    // map through the todos
                    state.todos.map((item) => {
                        
                        // if todo item id is the action payload
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                completed: !item.completed
                            };
                        }

                        else {
                            return item;
                        }
                    })
                )
            }  
          
        case('DELETE_TODO'):
        return state = {
            ...state,
            todos: (

                // filter todos to only ones that have ids not equal to action.payload
                state.todos.filter((item) => {
                        return item.id !== action.payload;
                })
            )
        }
        
        default:
            return state;
    }
}

export default todoReducer;