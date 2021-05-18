import { actSetLoading } from './loading';
import { register, logIn, logOut, getUserInfo, updateUser } from "../../apis/user";
import { Toast } from "@ant-design/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const actRegister = account => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await register(account);

        if (res.status === 200) {
            await AsyncStorage.setItem("accessToken", res.token);
            dispatch({
                type: "SET_USER",
                payload: res.user
            });
            Toast.success("Đăng nhập thành công!", 2);
        }
    } catch (e) {
        Toast.fail(e.response?.data?.error?.message, 2);
    }
    dispatch(actSetLoading(false));
}

export const actLogIn = account => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await logIn(account);

        if (res.status === 200) {
            await AsyncStorage.setItem("accessToken", res.token);
            dispatch({
                type: "SET_USER",
                payload: res.user
            });
            Toast.success("Đăng nhập thành công!", 1);
        }
    } catch (e) {
        Toast.fail(e.response?.data?.error?.message, 1);
    }
    dispatch(actSetLoading(false));
}

export const actGetUserInfo = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await getUserInfo();

        if (res.status === 200) {
            dispatch({
                type: "SET_USER",
                payload: res.user
            })
            dispatch(actSetLoading(false));
        }
    } catch (e) {
        // await AsyncStorage.removeItem("accessToken");
        Toast.fail(e.response?.data?.error || "Lỗi xác thực!", 1);
        dispatch(actSetLoading(false));
    }
}

export const actUpdateUser = (user) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await updateUser(user);

        if (res.status === 200) {
            dispatch({
                type: "SET_USER",
                payload: res.user
            });
            Toast.success("Cập nhật thành công!", 1);
        }
    } catch (e) {
        Toast.fail(e.response?.data?.message || e.response?.data?.error);
    }
    dispatch(actSetLoading(false));
}

export const actLogOut = () => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const res = await logOut();

        if (res.status === 200) {
            dispatch({
                type: "SIGN_OUT"
            });
            await AsyncStorage.removeItem("accessToken");
            Toast.success(res.message, 1);
        }
    } catch (e) {
        Toast.fail(e.response?.data?.message || e.response?.data?.error);
    }
    dispatch(actSetLoading(false));
}