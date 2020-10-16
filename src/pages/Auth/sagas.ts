import { takeLeading, put, call, select } from 'redux-saga/effects';

import { AUTH } from './constants';
import { loginAction, loginSuccessAction, loginErrorAction, 
    logoutSuccessAction, logoutErrorAction} from './actions';
import { User } from '../../types/user';

// Watcher Saga
export function* watchAuth() {
    // watch for AUTH.LOGIN action and run handleLogin
    yield takeLeading(AUTH.LOGIN, handleLogin)

    // watch for AUTH.LOGOUT action and run handleLogout
    yield takeLeading(AUTH.LOGOUT, handleLogout);

    // watch for AUTH.HYDRATE action and run handleSignup
    yield takeLeading(AUTH.HYDRATE, handleHydrate);
}

// Login worker saga
export function* handleLogin(action: any) {
    const {username, password} = action.payload;
    try {
        if (username === "user" && password === "user") {
            const user = {
                id : 1,
                name: "Just User",
                username: "user",
                password: "user",
            };
            yield sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            yield put(loginSuccessAction(user));
        } else if (username === "admin" && password === "admin") {
            const user = {
                id : 2,
                name: "Super Admin",
                username: "admin",
                password: "admin",
            };
            yield sessionStorage.setItem('loggedInUser', JSON.stringify(user));
            yield put(loginSuccessAction(user));
        } else {
            yield put(loginErrorAction('Invalid username or password'));
        }
    }
    catch (error) {
        yield put(loginErrorAction(error.toString()));
    }

}

// Logout worker saga
export function* handleLogout(action: any) {
    try {
        yield sessionStorage.removeItem('loggedInUser');
        yield put(logoutSuccessAction());
    }
    catch (error) {
        yield put(logoutErrorAction(error.toString()));
    }

}

// Worker saga
export function* handleHydrate() {
    try {
        // call the function that gets the user data from LocalStorage
        const userDataString = yield sessionStorage.getItem('loggedInUser');

        const userData = JSON.parse(userDataString);
        
        if (userData) {
            yield put(loginAction(userData.username, userData.password));
        }

    } catch (error) {
        // do nothing
    }
}

function storeUserLocalStorage(userData: User) {
    return localStorage.setItem(userData.username, JSON.stringify(userData));
}

function getUserFromLocalStorage(id: string) {
    let userData: string|null = localStorage.getItem(id);
    if(userData == undefined) {
        return undefined;
    }
    return JSON.parse(userData);
}

function removeUserFromLocalStorage(id: string) {
    return localStorage.removeItem(id);
}
