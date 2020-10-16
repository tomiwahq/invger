import { AUTH } from './constants';
import { User } from '../../types/user';

export const loginAction = (username: string, password: string) => {
    return {
        type: AUTH.LOGIN,
        payload: {
            username: username,
            password: password,
        }
    }
}

export const loginSuccessAction = (userData: User) => {
    return {
        type: AUTH.LOGIN_SUCCESS,
        payload: {
            userData,
        }
    }
}

export const loginErrorAction = (error: any) => {
    return {
        type: AUTH.LOGIN_ERROR,
        payload: {
            error
        }
    }
}

export const logoutAction = () => {
    return {
        type: AUTH.LOGOUT
    }
}

export const logoutSuccessAction = () => {
    return {
        type: AUTH.LOGOUT_SUCCESS
    }
}

export const logoutErrorAction = (error: any) => {
    return {
        type: AUTH.LOGOUT_ERROR,
        payload: {
            error
        }
    }
}

export const hydrateAction = () => {
    return {
        type: AUTH.HYDRATE
    }
}
