const initState = {
    username: '',
    isAuthenticated: false
}

export const login = (state = initState, action) => {
    switch(action.type) {
        
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                username: action.username
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