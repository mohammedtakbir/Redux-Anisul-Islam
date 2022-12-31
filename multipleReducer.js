const { createStore, combineReducers } = require('redux');

//* constants defining
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

const initialProductState = {
    products: ['sugar, salt'],
    numberOfProducts: 2
}
const initialCardState = {
    numberOfCarts: 1,
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
const addCartItems = (cart) => {
    return {
        type: ADD_CART_ITEM,
        payload: cart
    }
}
const getCardItem = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const productsReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                product: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        case GET_PRODUCTS:
            return {
                ...state
            }

        default:
            return state;
    }
}

const cartsReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                numberOfCarts: state.numberOfCarts + 1,
                products: [...state.products, action.payload]
            }
        case GET_CART_ITEMS:
            return {
                ...state
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productsReducer,
    cartR: cartsReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(getProducts())
store.dispatch(addProduct('onion'))

// const store2 = createStore(cartsReducer)
// store2.subscribe(() => {
//     console.log(store2.getState())
// })

// store.dispatch(getCardItem())
store.dispatch(addCartItems('light'))

