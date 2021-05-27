import axiosClient from "./axiosClient";

export const getProductsFromEcommerceCart = () => axiosClient.get("/cart/");