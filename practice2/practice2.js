const { createStore } = require("redux");

//* defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


//* state
const initialState = {
    count: 0,
    test: ''
}

//* action dispatch
const countIncrement = (testPayload) => {
    return {
        type: INCREMENT,
        payload: testPayload
    }
};
const countDecrement = () => {
    return {
        type: DECREMENT
    }
}

//* reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                test: action.payload
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
};

//* store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(countIncrement('test_payload'))
store.dispatch(countIncrement('2nd payload'))
store.dispatch(countIncrement('3rd payload'))
store.dispatch(countIncrement())
store.dispatch(countDecrement())