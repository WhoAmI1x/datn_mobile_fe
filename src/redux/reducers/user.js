const initialState = {};

function user(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_USER":
            state = payload;
            return state;

        case "SIGN_OUT":
            state = {};
            return state;

        default:
            return state;
    }
}

export default user;