import axios from 'axios';

export function userLoginAction(data) {
    return dispatch => {
        axios.get('http://localhost:8008/users')
        .then((response) => {
            let value = response.data
            let result = value.find(val => val.userId  === data.id && val.userPassword === data.password)
            if(result) {
                dispatch(loginMe(true,result.name,result.id,false));
            }
                
            else {
                dispatch(loginMe(false));
            }
                
        });
    }
}

export function coachLoginAction(data) {
    return dispatch => {
        axios.get('http://localhost:8008/coaches')
        .then((response) => {
            let value = response.data;
            let result = value.find(val => val.coachId  === data.id && val.coachPassword === data.password)
            if(result) {
                dispatch(loginMe(true,result.name,result.id,true))
            }
            else
                dispatch(loginMe(false));
        })
    }
}

export function loginMe(isAuthenticated,username,id,isCoach) {
    return {
        type: 'LOGIN',
        isAuthenticated: isAuthenticated,
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