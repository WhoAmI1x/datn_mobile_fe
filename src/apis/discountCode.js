import axiosClient from "./axiosClient";

export const getDiscountCodeByCategory = (categoryId) => axiosClient.get("/discount-code/get-discount-codes-by-category", { params: { categoryId } });

export const saveDiscountCode = (discountCodeId) => axiosClient.post("/discount-code/save-discount-code", null, { params: { discountCodeId } });

export const getDiscountCodeSaved = () => axiosClient.get("/discount-code/get-discount-code-saved");