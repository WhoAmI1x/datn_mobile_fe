import axiosClient from "./axiosClient";

export const getDiscountCodeByCategory = (categoryId) => axiosClient.get("/discount-code/get-discount-codes-by-category", { params: { categoryId } });