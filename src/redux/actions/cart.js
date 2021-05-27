import {
    getProductsFromEcommerceCart
} from "../../apis/cart";
import { actSetLoading } from "./loading";

export const actCarts = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getProductsFromEcommerceCart();

        if (res.status === 200) {
            dispatch({
                type: "SET_CARTS",
                payload: res.carts
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}