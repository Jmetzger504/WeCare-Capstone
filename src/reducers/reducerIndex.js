const initState = {
    id: 0,
    isAuthenticated: false,
    username: "",
    isCoach: false,
    loginFailed: false
}

export const Login = (state = initState, action) => {
    switch(action.type) {
        
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                loginFailed: action.loginFailed,
                username: action.username,
                id: action.id,
                isCoach: action.isCoach
            }
        case 'LOGOUT':
            return {
                ...state,
                ...initState
            }
        default:
            return state;
    }
}
