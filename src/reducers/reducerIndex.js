const initState = {
    id: 0,
    isAuthenticated: false,
    userName: ""
}

export const login = (state = initState, action) => {
    switch(action.type) {
        
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                username: action.username,
                id: action.id
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