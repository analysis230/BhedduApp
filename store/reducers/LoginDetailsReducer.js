const initialState = {
    isLoggedIn: false,
    userName: null,
    details: {}
};

const LoginDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS:

            const curLoginDetails = state.LoginDetails;
            for (var i = 0; i < action.payload.numberOfCards; i++) {
                curLoginDetails.push(cards.pop());
            }

            const newState = { ...state, LoginDetails: [...curLoginDetails] };
            return newState;
        default:
            return state;
    }
}

export default LoginDetailsReducer;