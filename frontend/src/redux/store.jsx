import { createStore } from 'redux';

// Define initial state
const initialState = {
    isLoggedIn: false,
};

// Define action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Define actions
export const login = () => ({
    type: LOGIN,
});

export const logout = () => ({
    type: LOGOUT,
});

// Define reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

// Create store
const store = createStore(reducer);

export default store;
