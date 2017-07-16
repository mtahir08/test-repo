const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isReistered: false,
    user: {}
}

const authReducer = function (state = initialState, action) {

    switch (action.type) {

        case "SIGN_UP": {
            return Object.assign({}, state, { isRegistered: false, });
        }

        case "SIGN_UP_SUCCESS": {
            return Object.assign({}, state, { isRegistered: true });
        }

        case "SIGN_UP_FAIL": {
            return Object.assign({}, state, { isRegistered: false });
        }

        case "LOGIN": {
            return Object.assign({}, state, { isLoggedIn: false });
        }

        case "LOGIN_SUCCESS": {
            return Object.assign({}, state, { isLoggedIn: true, user: action.payload });
        }

        case "LOGIN_FAIL": {
            return Object.assign({}, state, { isLoggedIn: false })
        }

        default:
            return state;

    }

}

export default authReducer;