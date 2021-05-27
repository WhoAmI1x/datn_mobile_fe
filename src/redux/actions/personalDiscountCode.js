import { Toast } from "@ant-design/react-native";
import { actSetLoading } from "./loading";
import {
    deletePersonalDiscountCode,
    getPersonalDiscountCodes,
    createPersonalDiscountCode,
    updatePersonalDiscountCode
} from "../../apis/personalDiscountCode";

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

export const actCreatePersonalDiscountCode = (navigate, personalDiscountCode) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await createPersonalDiscountCode(personalDiscountCode);

        if (res.status === 200) {
            dispatch({
                type: "SET_PERSONAL_DISCOUNT_CODES",
                payload: res.personalDiscountCodes
            });
            Toast.success("Tạo mã thành công!", 1);
            navigate("AllPersonalDiscountCode");
        }
    } catch (e) {
        console.log(e);
        Toast.fail("Tạo mã thất bại!", 1);
    }
    dispatch(actSetLoading(false));
}
export const actUpdatePersonalDiscountCode = (navigate, personalDiscountCode, personalDiscountCodeId) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await updatePersonalDiscountCode(personalDiscountCode, personalDiscountCodeId);

        if (res.status === 200) {
            dispatch({
                type: "SET_PERSONAL_DISCOUNT_CODES",
                payload: res.personalDiscountCodes
            });
            Toast.success("Cập nhật mã thành công!", 1);
            navigate("AllPersonalDiscountCode");
        }
    } catch (e) {
        console.log(e);
        Toast.fail("Cập nhật mã thất bại!", 1);
    }
    dispatch(actSetLoading(false));
}