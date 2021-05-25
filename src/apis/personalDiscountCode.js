import axiosClient from "./axiosClient";

export const getPersonalDiscountCodes = () => axiosClient.get("/personal-discount-code/get-all");

export const deletePersonalDiscountCode = (personalDiscountCodeId) => axiosClient.delete("/personal-discount-code/delete", { params: { personalDiscountCodeId } });