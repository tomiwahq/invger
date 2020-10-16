import { takeLeading, put, call, select } from 'redux-saga/effects';

import { HOME, PRODUCT } from './constants';
import { getCartSuccess, getProductsSuccessAction, getProductsErrorAction, addedToCart } from './actions';
import { API_URL } from '../../includes/constants';

// Watcher Saga
export function* watchHome() {
    // watch for HOME.GET_PRODUCTS action and run handleGetProducts
    yield takeLeading(HOME.GET_PRODUCTS, handleGetProducts)
    // watch for HOME.GET_PRODUCTS action and run handleGetProducts
    yield takeLeading(PRODUCT.ADD_TO_CART, handleAddToCart)
}

export function* handleGetProducts(action: any) {
    try {
        const products = yield call(getProductsFromApi);
        // const products = [{"id":1,"productName":"A3","productType":"Test Type"},{"id":2,"productName":"test product","productType":"test type"},{"id":3,"productName":"Parker Pen","productType":"Pen"},{"id":4,"productName":"Yellow Pencil","productType":"Pencil"},{"id":5,"productName":"Test Delete","productType":"Delete"}];
        yield put(getProductsSuccessAction(products));
    }
    catch (error) {
        yield put(getProductsErrorAction(error.toString()));
    }

}

export function* handleAddToCart(action: any) {
    try {
        const cartString = yield sessionStorage.getItem('cart');
        if (cartString !== null) {
            const cart = JSON.parse(cartString);
            if (cart.hasOwnProperty(action.payload.id)) {
                cart[action.payload.id]['quantity']++;
            } else {
                cart[action.payload.id] = {
                    id: action.payload.id,
                    productName: action.payload.productName,
                    quantity: 1
                };
            }
            
            yield sessionStorage.setItem('cart', JSON.stringify(cart));
        }
        yield put(addedToCart(action.payload.id, action.payload.productName));
    }
    catch (error) {
        yield put(getProductsErrorAction(error.toString()));
    }

}

export function* getCart() {
    try {
        const cartString = yield sessionStorage.getItem('cart');
        if (cartString !== null) {
            const cart = JSON.parse(cartString);
            
            yield sessionStorage.setItem('cart', JSON.stringify(cart));
            yield put(getCartSuccess(cart));
        }
    }
    catch (error) {
        yield put(getProductsErrorAction(error.toString()));
    }

}

export function storeUserInAsync(userData: any) {
    return localStorage.setItem('userData', userData);
}

export function getUserFromAsync() {
    return localStorage.getItem('userData');
}

export function removeUserFromAsync() {
    return localStorage.removeItem('userData');
}

export function getProductsFromApi() {
    return fetch(API_URL + "api/Product/GetAllProducts")
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
}