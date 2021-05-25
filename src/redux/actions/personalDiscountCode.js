import { Toast } from "@ant-design/react-native";
import {
    deletePersonalDiscountCode,
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

export const actDeletePersonalDiscountCode = (personalDiscountCodeId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await deletePersonalDiscountCode(personalDiscountCodeId);

        if (res.status === 200) {
            dispatch({
                type: "SET_PERSONAL_DISCOUNT_CODES",
                payload: res.personalDiscountCodes
            });
            Toast.success("Xóa mã thành công!", 1);
        }
    } catch (e) {
        console.log(e);
        Toast.fail("Xóa mã thất bại!", 1);
    }
    dispatch(actSetLoading(false));
}