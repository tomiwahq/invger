import { HOME, PRODUCT } from './constants'
import { Product } from '../../types/product'

export const getProductsAction = () => {
    return {
        type: HOME.GET_PRODUCTS,
    }
}

export const getProductsSuccessAction = (products: Product[]) => {
    return {
        type: HOME.GET_PRODUCTS_SUCCESS,
        payload: {
            products,
        }
    }
}

export const getProductsErrorAction = (error: any) => {
    return {
        type: HOME.GET_PRODUCTS_ERROR,
        payload: {
            error,
        }
    }
}

export const createProductAction = (title: string, description: string, image: any) => {
    return {
        type: PRODUCT.CREATE_PRODUCT,
        payload: {
            title,
            description,
            image,
        }
    }
}

export const createProductSuccessAction = (product: Product) => {
    return {
        type: PRODUCT.CREATE_PRODUCT_SUCCESS,
        payload: {
            product,
        }
    }
}

export const createProductErrorAction = (error: any) => {
    return {
        type: PRODUCT.CREATE_PRODUCT_ERROR,
        payload: {
            error,
        }
    }
}

export const deleteProductAction = (id: string) => {
    return {
        type: PRODUCT.DELETE_PRODUCT,
        payload: {
            id,
        }
    }
}

export const deleteProductSuccessAction = (product: Product) => {
    return {
        type: PRODUCT.DELETE_PRODUCT_SUCCESS,
        payload: {
            product,
        }
    }
}

export const deleteProductErrorAction = (error: any) => {
    return {
        type: PRODUCT.DELETE_PRODUCT_ERROR,
        payload: {
            error,
        }
    }
}

export const productsHydrateAction = () => {
    return {
        type: HOME.HYDRATE
    }
}

export const addToCart = (id: any, productName: any) => {
    return {
        type: PRODUCT.ADD_TO_CART,
        payload: {
            id,
            productName
        }
    }
}

export const addedToCart = (id: any, productName: any) => {
    return {
        type: PRODUCT.ADDED_TO_CART,
        payload: {
            id,
            productName
        }
    }
}

export const getCart = () => {
    return {
        type: PRODUCT.GET_CART
    }
}



export const getCartSuccess = (cart: any) => {
    return {
        type: PRODUCT.GET_CART_SUCCESS,
        payload: {
            cart
        }
    }
}