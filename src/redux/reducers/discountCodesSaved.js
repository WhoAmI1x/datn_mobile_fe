const initialState = [];

function discountCodesSaved(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_DISCOUNT_CODES_SAVED":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default discountCodesSaved;