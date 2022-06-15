import axios from 'axios';

export function userLoginAction(data) {
    return dispatch => {
        axios.get('http://localhost:8008/users')
        .then((response) => {
            let value = response.data
            console.log(value);
            console.log(data);
            let result = value.find(val => val.userId  === data.id && val.userPassword === data.password)
            if(result) {
                console.log(result);
                console.log("user found!");
                dispatch(loginMe(true,result.name,result.id));
            }
                
            else {
                console.log("user not found.");
                dispatch(loginMe(false));
            }
                
        });
    }
}

export function loginMe(isAuthenticated,username,id) {
    return {
        type: 'LOGIN',
        isAuthenticated: isAuthenticated,
        username: username,
        id: id
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