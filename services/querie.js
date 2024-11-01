import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

const useGetAllProducts = (page) => {
  const queryFn = async() => (
   await api.get(`products?page=${page}&limit=10`)
  );
  const queryKey = ["products", page];
  return useQuery({ queryFn, queryKey });
};

export { useGetAllProducts };
