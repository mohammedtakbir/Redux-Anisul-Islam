const { createStore, combineReducers } = require("redux");

//* constant defining
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_CART_ITEM = 'ADD_CARD_ITEM';
const GET_CART_ITEMS = 'GET_CARD_ITEMS';

//* initial State
const initialProductState = {
    products: ['product1', 'product2'],
    numberOfProducts: 2
};
const initialCardState = {
    products: ['tomato'],
    numberOfCardItems: 1
};

//* action dispatch 
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
};
const addCartItem = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    }
};
const getCardItems = (product) => {
    return {
        type: GET_CART_ITEMS,
        payload: product
    }
};

//* reducer
const productsReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
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

const cartReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                products: [action.payload, ...state.products],
                numberOfCardItems: state.numberOfCardItems + 1
            }
        case GET_CART_ITEMS:
            return {
                ...state
            }

        default:
            return state;
    }
}



//* combine reducer
const rootReducer = combineReducers({
    productR: productsReducer,
    cartR: cartReducer
})


//* create store
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(addProduct('product3'))
// store.dispatch(getProducts())
store.dispatch(addCartItem('test'));
