import { actSetLoading } from "./loading";
import { getProductDetail, getProductDetailSearched, getProductsByCategory, searchProduct, addProductToCart } from "../../apis/product";
import { Toast } from "@ant-design/react-native";

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

export const actSearchProduct = (keyword) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await searchProduct(keyword);

        if (res.status === 200) {
            dispatch({
                type: "SET_PRODUCTS_SEARCHED",
                payload: res.products
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actGetProductDetailSearched = (productId, cb) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getProductDetailSearched(productId);

        if (res.status === 200) {
            if (cb) cb(res.productFullInfo);
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}

export const actAddProductToCart = ({ productId, modelId }) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await addProductToCart({ productId, modelId });

        if (res.status === 200) {
            Toast.success(res.message, 1);
        }
    } catch (e) {
        Toast.success("Thêm vào giỏ hàng thất bại!", 1);
    }
    dispatch(actSetLoading(false));
}

