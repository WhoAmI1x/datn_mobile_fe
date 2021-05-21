import { Toast } from "@ant-design/react-native";
import { getDiscountCodeByCategory, saveDiscountCode } from "../../apis/discountCode";
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

export const actSaveDiscountCode = (discountCodeId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await saveDiscountCode(discountCodeId);

        if (res.status === 200) {
            Toast.success("Lưu mã thành công!", 1);
        }
    } catch (e) {
        console.log(e.response);
        Toast.fail(e.response?.data?.error?.message, 1);
    }
    dispatch(actSetLoading(false));
}