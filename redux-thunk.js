const { default: axios } = require('axios');
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

//* async actions - API calling
//* API url- https://jsonplaceholder.typicode.com/todos
//* middleware - redux-thunk
//* axios

//* constants
const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const GET_TODOS_URL = 'https://jsonplaceholder.typicode.com/tods'

//* initial state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
};

//* action dispatch
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

//* reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

//* async action creator
const fetchData = () => {
    return (dispatch) => {
        getTodosRequest()
        axios.get(GET_TODOS_URL)
            .then(res => {
                const title = res.data.map(todo => todo.title);
                dispatch(getTodosSuccess(title))
            })
            .catch((err) => {
                dispatch(getTodosFailed(err?.message))
            })
    }
}


//* store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData())