const initialState = {
    user: null,
    token: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload.user ?? state.user,
                token: action.payload.token ?? state.token
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}