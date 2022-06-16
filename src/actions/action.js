import axios from 'axios';

export function userLoginAction(data) {
    return dispatch => {
        axios.get('http://localhost:8008/users')
        .then((response) => {
            console.log(data);
            let value = response.data
            console.log(value);
            let result = value.find(val => val.id  === parseInt(data.userId) && val.password === data.userPassword)
            if(result) {
                dispatch(loginMe(true,false,result.name,result.id,false));
            }
                
            else {
                dispatch(loginMe(false,true));
            }
                
        });
    }
}

export function coachLoginAction(data) {
    return dispatch => {
        axios.get('http://localhost:8008/coaches')
        .then((response) => {
            console.log(data);
            let value = response.data;
            console.log(value);
            let result = value.find(val => val.id  === parseInt(data.coachId) && val.password === data.coachPassword)
            console.log(result);
            if(result) {
                dispatch(loginMe(true,false,result.name,result.id,true))
            }
            else
                dispatch(loginMe(false,true));
        })
    }
}

export function loginMe(isAuthenticated,loginFailed,username,id,isCoach) {
    return {
        type: 'LOGIN',
        isAuthenticated: isAuthenticated,
        loginFailed: loginFailed,
        username: username,
        id: id,
        isCoach: isCoach
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