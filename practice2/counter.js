const { createStore } = require("redux");

//* constants define
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD_USER = 'ADD_USER';

//* initial state
const initialState = {
    count: 1,
    users: ['takbir']
};

//* action dispatch
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
const resetCounter = () => {
    return {
        type: RESET
    }
}
const addUser = (users) => {
    return {
        type: ADD_USER,
        payload: users
    }
}

//* counter reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            return state
    }
}

//* create store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
// store.dispatch(incrementCounterByValue(10))
// store.dispatch(resetCounter());
store.dispatch(addUser('Mohammed'));
store.dispatch(addUser('test'));