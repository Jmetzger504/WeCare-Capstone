import axios from 'axios';

export function userRegisterAction(data) {
    return dispatch => {
        let newUser = { "name":data.userName,
                        "password": data.userPassword,
                        "gender":data.userGender,
                        "dateOfBirth":data.userDOB,
                        "email": data.userEmail,
                        "mobileNumber": data.userPhoneNum,
                        "pinCode": data.userZip,
                        "city": data.userCity,
                        "state": data.userState,
                        "country": data.userCountry
        }
        console.log("userRegisterAction newUser: ",newUser);
        axios(`http://localhost:8008/users`, {
            method: 'POST',
            crossdomain: true,
            data: newUser,
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(dispatch(getNewUserId(newUser)))
        .catch(err => console.log(err));
    }
}

export function getNewUserId(data) {
    return dispatch => {
        axios.get('http://localhost:8008/users')
        .then((response) => {
            console.log("getNewUserId data: ",data);
            let value = response.data;
            console.log("getNewUserId value: ",value);
            //Should be enough credentials to reliably verify the new user.
            let result = value.find(val =>  val.name === data.name &&
                                            val.password === data.password &&
                                            val.gender === data.gender &&
                                            val.dateOfBirth === data.dateOfBirth &&
                                            val.email === data.email)
            if(result)
                dispatch(loginMe(true,false,result.name,result.id,false));
            else
                dispatch(loginMe(false,true));
        })
    }
}

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