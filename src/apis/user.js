import axiosClient from "./axiosClient";

export const register = account => axiosClient.post("/user/register-user-account", account);

export const logIn = account => axiosClient.post("/user/login", account);

export const getUserInfo = () => axiosClient.get("/user/get-user-info");

export const logOut = () => axiosClient.get("/user/logout");