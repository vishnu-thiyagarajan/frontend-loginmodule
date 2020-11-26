import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_FAILURE,
    RESET_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_FAILURE,
    FORGOT_PASSWORD_SUCCESS,
    LOGOUT_USER,
  } from './userActionTypes';
const initialState = { 
     loading: false,
     error: '',
     user: null,
     isAuthenticated:false,
     message: ''
     }

const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case REGISTER_USER_FAILURE:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
                error: action.payload
            }
        case LOGOUT_USER:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: ''
            }
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        case RESET_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        case FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default userReducer