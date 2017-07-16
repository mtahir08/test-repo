import axios from "axios";

const url = "https://requestb.in/q59mvaq5";

let add = (user) => {
    return { name: user['name'], email: user['email'], password: user['password'], 're-password': user['re-password'] }
}

let login = (user) => {
    return { email: user['email'], password: user['password'] }
}

let authHelpers = {
    addUserInfo: function (data, dispatch) {
        // return axios.post(`${url}/register`, add(data))
        return axios.post(`${url}`, add(data))
            .then((response) => {
                dispatch({
                    type: 'SIGN_UP_SUCCESS',
                    payload: response
                });
            }).catch((err) => {
                console.warn("Error In  ", err);
                dispatch(SignUpRequestFailed(err));
            })
    },
    loginRequest: function (data, dispatch) {
        // return axios.post(`${url}/login`, login(data))
        return axios.post(`${url}`, login(data))
            .then((response) => {
                dispatch(LoginRequestSuccess(response.data));
            }).catch((err) => {
                console.warn("Error In  Login", err);
                dispatch(LoginRequestFailed(err));
            })
    }
}

function LoginRequestSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    };
}

function LoginRequestFailed(error) {
    return {
        type: 'LOGIN_FAIL',
        payload: error
    };
}

function SignUpRequestSuccess(data) {
    return {
        type: 'SIGN_UP_SUCCESS',
        payload: data
    };
}

function SignUpRequestFailed(err) {
    return {
        type: 'SIGN_UP_FAIL',
        payload: err
    };
}

export default authHelpers;
