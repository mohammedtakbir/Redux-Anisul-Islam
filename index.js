//? Example - 01
// const { createStore } = require('redux')

// //* 1. state
// //* 2. action dispatch
// //* 1. reducer
// //* 1. store - getState(), dispatch(), subscribe()

// //* defining constants
// const INCREMENT = 'INCREMENT';
// const DECREMENT = 'DECREMENT';
// // const ADD_USER = 'ADD_USER';

// //* state
// const initialCounterState = {
//     count: 0,
//     // users: ''
// }

// /* const initialUsersState = {
//     users: [
//         { name: 'Takbir' }
//     ]
// } */

// //* action - object - 2ta property thakbe ---> i) type ii) payload
// const incrementCounter = () => {
//     return {
//         type: INCREMENT,
//     }
// }
// const decrementCounter = () => {
//     return {
//         type: DECREMENT,
//     }
// }

// /* const addUser = () => {
//     return {
//         type: ADD_USER,
//         payload: { name: 'Takbir' }
//     }
// } */

// //* create reducer for counter
// const counterReducer = (state = initialCounterState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         default:
//             state;
//     }
// }

// //* create store
// const store = createStore(counterReducer);
// store.subscribe(() => {
//     console.log(store.getState())
// })

// //* dispatch action
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())

//? Example - 02 

// const { createStore } = require('redux');

// //* state - count: 0
// //* action - increment, decrement, reset
// //* reducer
// //* store

// //* constants 
// const INCREMENT = 'INCREMENT'
// const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'

// const initialState = {
//     count: 0
// };

// const incrementCounterAction = () => {
//     return {
//         type: INCREMENT
//     }
// }
// const decrementCounterAction = () => {
//     return {
//         type: DECREMENT
//     }
// }
// const resetCounterAction = () => {
//     return {
//         type: RESET
//     }
// }
// const incrementCounterByValue = (value) => {
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload: value
//     }
// }

// //* creating reducer

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }
//         case INCREMENT_BY_VALUE:
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }
//         default:
//             state;
//     }
// }

// const store = createStore(counterReducer);
// store.subscribe(() => {
//     console.log(store.getState())
// })

// // store.dispatch(incrementCounterAction())
// // store.dispatch(incrementCounterAction())
// // store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterByValue(5))
// store.dispatch(incrementCounterByValue(50))

//? Example - 03
const { createStore } = require('redux');
const ADD_USER = 'ADD_USER'

const initialState = {
    users: ['Mohammed'],
    count: 1
};

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            break;
    }
};

const store = createStore(userReducer);
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUser('Takbir'))
store.dispatch(addUser('Ahmed'))
store.dispatch(addUser('Takbir'))