const initialState = [];

function products(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_PRODUCTS_SEARCHED":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default products;