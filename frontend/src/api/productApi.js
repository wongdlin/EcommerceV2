import api from "./api";

export const getAllProducts = () => {
  return api.get("/api/products");
};

export const getProductById = (id) => {
  return api.get(`/api/products/${id}`);
};

