import axios from 'axios';

export function userLoginAction(data) {
    return dispatch => {
        axios.get('http://localhost:4000/users')
        .then((response) => {
            let value = response.data
            let result = value.find(val => val.id  === data.id && val.password === data.password)
            if(result)
                dispatch(loginMe(true,result.name));
            else
                dispatch(loginMe(false))
        });
    }
}

export function loginMe(isAuthenticated,username) {
    return {
        type: 'LOGIN',
        isAuthenticated: isAuthenticated,
        username: username
    }
}

export function logout() {
    return dispatch=> {
        dispatch(logoutMe());
    }
}

export function logoutMe() {
    return {
        type: 'LOGOUT'
    }
}