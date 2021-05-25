import axiosClient from "./axiosClient";

export const getPersonalDiscountCodes = () => axiosClient.get("/personal-discount-code/get-all");