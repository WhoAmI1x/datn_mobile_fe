const initialState = [];

function personalDiscountCodes(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_PERSONAL_DISCOUNT_CODES":
            state = payload;
            return state;

        default:
            return state;
    }
}

export default personalDiscountCodes;