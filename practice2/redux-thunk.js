const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default;

//* constants defining
const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILED = 'GET_USERS_FAILED';

//* initial state
const initialUsersState = {
    users: [],
    isLoading: false,
    error: null
};

//* action dispatch
const getUsersRequest = () => {
    return {
        type: GET_USERS_REQUEST
    }
};
const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
};
const getUsersFailed = (error) => {
    return {
        type: GET_USERS_FAILED,
        payload: error
    }
}

//* reducer
const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        case GET_USERS_FAILED:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}

//* asynchronous action

const fetchData = () => {
    return (dispatch) => {
        dispatch(getUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/user')
            .then(res => {
                const userName = res.data.map(user => user.name);
                dispatch(getUsersSuccess(userName));
            })
            .catch(err => {
                dispatch(getUsersFailed(err.message))
            })
    }
}



//* store
const store = createStore(usersReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData());