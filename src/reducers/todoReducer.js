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

    // actions
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
                        } else {
                            return item;
                        }
                    })
                )
            }

        case ('DELETE_TODO'):
            return state = {
                ...state,
                todos: (

                    // filter todos to only ones that have ids not equal to action.payload
                    state.todos.filter((item) => {
                        return item.id !== action.payload;
                    })
                )
            }

        case ('CREATE_TODO'):
            return state = {
                ...state,
                todos: [
                    ...state.todos,
                    {
    
                        // id should be last item in array id +1, if no items in array set id to 1
                        id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1,
                        name: action.payload,
                        completed: false
                    }

                    ]
            }

        default:
            return state;
    }
}

export default todoReducer;