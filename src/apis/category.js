import axiosClient from "./axiosClient";

export const getCategories = (ecommerce, type, keyword) => axiosClient.get("/category/get-categories", { params: { ecommerce, type, keyword } });