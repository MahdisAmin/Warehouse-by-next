import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../pages/api/api"
import { toast } from "react-toastify";

const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

const addProductsMutation = () => {
  const queryClient = useQueryClient();

  const mutationFn = (newProduct) => api.post("/products", newProduct);
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    toast.success("محصول با موفقیت اضافه شد")
  };

  return useMutation({ mutationFn, onSuccess });
};

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

const editProductMutation = () => {
  const queryClient = useQueryClient();

  const mutationFn = (updateProduct) =>
    api.put(`products/${updateProduct.id}`, updateProduct);
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    toast.success("محصول با موفقیت ویرایش شد");
  };

  return useMutation({ mutationFn, onSuccess });
};

const deleteProductMutation = () => {
  const queryClient = useQueryClient();

  const mutationFn = (productId) => api.delete(`/products/${productId}`);
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    toast.success("محصول با موفقیت حذف شد");
  };

  return useMutation({ mutationFn, onSuccess });
};

export {
  useRegister,
  useLogin,
  getProducts,
  addProductsMutation,
  deleteProductMutation,
  editProductMutation,
};
