import authHelpers from '../../utils/authFunctions';

export class AuthActions {

    static register(user) {
        return dispatch => { dispatch(SignUpRequest()); authHelpers.addUserInfo(user, dispatch); }
    }

    static login(credentials) {
        return dispatch => { dispatch(LoginRequest()); authHelpers.loginRequest(credentials, dispatch); }
    }

}

function SignUpRequest() {
    return {
        type: 'SIGN_UP'
    };
}

function LoginRequest() {
    return {
        type: 'LOGIN'
    };
}