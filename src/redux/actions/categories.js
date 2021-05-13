import {
    getCategories
} from "../../apis/category";
import { actSetLoading } from "./loading";

export const actGetCategories = (ecommerce, type, keyword) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getCategories(ecommerce, type, keyword);

        if (res.status === 200) {
            dispatch({
                type: "SET_CATEGORIES",
                payload: res.categories
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}