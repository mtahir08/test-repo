import authHelpers from '../../utils/authFunctions';

export class LoginActions {

    static LoginUser(user) {
        console.log("in action LoginUser", user);
        return dispatch => {
            dispatch(LoginRequest()); authHelpers.addUserInfo(user);
        }
    }

    static login(credentials) {
        return {
            type: AuthActions.LOGIN || 'LOGIN',
            payload: credentials
        };
    }
}

/* function LoginRequest() {
    return {
        type: ActionTypes.LoginRequest
    };
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LoginRequestSuccess,
        data
    };
}

function LoginRequestFailed() {
    return {
        type: ActionTypes.LoginRequestFailed
    };
} */