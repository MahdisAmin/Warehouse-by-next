import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../pages/api/api";
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
    toast.success("محصول با موفقیت اضافه شد");
  };
  const onError = (error) => {
    if (error.response && error.response.status === 403) {
      console.clear();
      toast.error("توکن منقضی شده لطفا مجدد وارد شوید", { autoClose: 2000 });
    }
  };
  return useMutation({ mutationFn, onSuccess, onError });
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
  const onError = (error) => {
    if (error.response && error.response.status === 403) {
      console.clear();
      toast.error("توکن منقضی شده لطفا مجدد وارد شوید", { autoClose: 2000 });
    }
  };
  return useMutation({ mutationFn, onSuccess, onError });
};

const deleteProductMutation = () => {
  const queryClient = useQueryClient();

  const mutationFn = (productId) => api.delete(`/products/${productId}`);
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
    toast.success("محصول با موفقیت حذف شد");
  };
  const onError = (error) => {
    if (error.response && error.response.status === 403) {
      console.clear();
      toast.error("توکن منقضی شده لطفا مجدد وارد شوید", { autoClose: 2000 });
    }
  };
  return useMutation({ mutationFn, onSuccess , onError });
};

export {
  useRegister,
  useLogin,
  getProducts,
  addProductsMutation,
  deleteProductMutation,
  editProductMutation,
};
