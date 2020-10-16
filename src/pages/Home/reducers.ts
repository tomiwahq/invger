import { HOME, PRODUCT } from './constants';
import { Product } from '../../types/product';

const initialHomeState = {
    gettingProducts: false,
    gotProducts: false,
    gettingProductsError: null,
    products: <Product[]>{},
    creatinProduct: false,
    createdProduct: false,
    createProductError: null, 

};

const reducer = (state = initialHomeState, action: any) => {
    switch (action.type) {
        case HOME.GET_PRODUCTS:
            return {
                ...state,
                gettingProducts: true,
            };

        case HOME.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                gettingProducts: false,
                gotProducts: true,
                products: action.payload.products
            };

        case HOME.GET_PRODUCTS_ERROR:
            return {
                ...state,
                gettingProducts: false,
                gettingProductsError: action.payload.error
            }

        case PRODUCT.ADD_TO_CART:
            return {
                ...state,
                addingToCart: true,
                addedToCart: false,
            }

        case PRODUCT.ADDED_TO_CART:
            return {
                ...state,
                addingToCart: false,
                addedToCart: true,
            }
            
        default:
            return state
    }
};

export default reducer