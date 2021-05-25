import {
    getPersonalDiscountCodes
} from "../../apis/personalDiscountCode";
import { actSetLoading } from "./loading";

export const actGetPersonalDiscountCodes = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getPersonalDiscountCodes();

        if (res.status === 200) {
            dispatch({
                type: "SET_PERSONAL_DISCOUNT_CODES",
                payload: res.personalDiscountCodes
            });
        }
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
}