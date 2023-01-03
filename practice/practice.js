const { createStore } = require('redux');

//* constants defining
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
    count: 1,
    users: ['Mohammed']
};

const incrementAction = (user) => {
    return {
        type: INCREMENT,
        payload: user
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    } 
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1,
                users: [...state.users, action.payload]
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }

        default:
            return state;
    }
}

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementAction())
store.dispatch(incrementAction('Takbir'))
store.dispatch(incrementAction('Ahmed'))
store.dispatch(decrementAction())




