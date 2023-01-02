const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

//* constants
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';

const initialProductState = {
    numberOfProducts: 1,
    products: ['pen']
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const productsReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                numberOfProducts: state.numberOfProducts + 1,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCTS:
            return {
                ...state
            }

        default:
            return state
    }
}
const store = createStore(productsReducer, applyMiddleware(logger))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(addProduct('tomato'))





