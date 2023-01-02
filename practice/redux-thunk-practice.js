const { default: axios } = require('axios');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

//* constants
const TODO_REQUEST = 'TODO_REQUEST';
const TODO_SUCCESS = 'TODO_SUCCESS';
const TODO_ERROR = 'TODO_ERROR';
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

//* state
const initialTodoState = {
    todo: [],
    isLoading: false,
    error: null
}

//* action dispatch
const todoRequest = () => {
    return {
        type: TODO_REQUEST
    }
}
const todoSuccess = (todo) => {
    return {
        type: TODO_SUCCESS,
        payload: todo
    }
}
const todoError = (error) => {
    return {
        type: TODO_ERROR,
        payload: error
    }
}

//* reducer
const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todo: action.payload
            }
        case TODO_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const fetchData = () => {
    return (dispatch) => {
        todoRequest();
        axios.get(TODO_URL)
            .then(res => {
                const title = res.data.map(todo => todo.title);
                dispatch(todoSuccess(title));
            })
            .catch(err => {
                dispatch(todoError(err.message))
            })
    }
}

//* store
const store = createStore(todoReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchData())