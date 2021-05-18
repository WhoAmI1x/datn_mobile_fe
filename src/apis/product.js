import axiosClient from "./axiosClient";

export const getProductsByCategory = (categoryId) => axiosClient.get("/product/get-products-by-category", { params: { categoryId } });

export const getProductDetail = (productId) => axiosClient.get("/product/get-product-detail", { params: { productId } });

export const searchProduct = keyword => axiosClient.get("/product/search-product", { params: { keyword } });

export const getProductDetailSearched = (productId) => axiosClient.get("/product/get-product-detail-searched", { params: { productId } });