const initialState = [];

function carts(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_CARTS":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default carts;