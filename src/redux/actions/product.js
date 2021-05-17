import { getProductDetail, getProductsByCategory } from "../../apis/product";
import { actSetLoading } from "./loading";

export const actGetProductsByCategory = (categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getProductsByCategory(categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_PRODUCTS",
                payload: res.products
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetProductDetail = (productId, cb) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getProductDetail(productId);

        if (res.status === 200) {
            if (cb) cb(res.productFullInfo);
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actResetProductList = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        dispatch({
            type: "SET_PRODUCTS",
            payload: []
        });
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}