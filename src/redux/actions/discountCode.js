import { getDiscountCodeByCategory } from "../../apis/discountCode";
import { actSetLoading } from "./loading";

export const actGetDiscountCodeByCategory = (categoryId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getDiscountCodeByCategory(categoryId);

        if (res.status === 200) {
            dispatch({
                type: "SET_DISCOUNT_CODES",
                payload: res.discountCodes
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}