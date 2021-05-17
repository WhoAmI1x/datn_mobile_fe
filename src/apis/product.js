import axiosClient from "./axiosClient";

export const getProductsByCategory = (categoryId) => axiosClient.get("/product/get-products-by-category", { params: { categoryId } });

export const getProductDetail = productId => axiosClient.get("/product/get-product-detail", { params: { productId } });