import {
    LOGIN_USER_FAILURE, LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS, LOGOUT_USER,
    REGISTER_USER_FAILURE, REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "../actions/userActions";

const initialState = {
    user: null,
    loading: false,
    loginError: null,
    registerError: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
        case LOGIN_USER_REQUEST:
            return {...state, loading: true};
        case REGISTER_USER_SUCCESS:
            return {...state, registerError: null, loading: false};
        case REGISTER_USER_FAILURE:
            return {...state, registerError: action.error, loading: false};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.user, loginError: null, loading: false};
        case LOGIN_USER_FAILURE:
            return {...state, loginError: action.error, loading: false};
        case LOGOUT_USER:
            return {...state, user: null, loginError: null, loading: false};
        default:
            return state;
    }
};

export default usersReducer;