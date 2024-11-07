import React, { useEffect, useState } from "react";
import SearchDashboard from "../components/modules/SearchDashboard";
import ProductsTable from "../components/templates/ProductsTable";
import AddModal from "../components/modals/AddModal";
import { deleteCookie, getCookie } from "../utils/cookie";
import { useGetAllProducts } from "../services/querie";

import { useRouter } from "next/router";
import Definition from "../components/modules/Definition";
import { toast } from "react-toastify";
import Pagination from "../components/modules/Pagination";

function index() {
  const router = useRouter();
  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      toast.error("شما مجوز دسترسی به این صفحه را ندارید", {
        autoClose: 3000,
      });
      router.push("./login");
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchName, setSearchName] = useState("");

  const { data } = useGetAllProducts(currentPage, searchName);
  const products = data?.data || [];

  const openModel = () => {
    setIsModalOpen(true);
  };

  const closeModale = () => {
    setIsModalOpen(false);
  };

  const addProductsHandler = (newProducts) => {
    console.log(newProducts);
  };
  const logOutHandler = () => {
    deleteCookie("token");
    router.push("/login");
  };
  const totalPages = data?.data.totalPages;

  return (
    <>
      <div>
        <SearchDashboard
          logOutHandler={logOutHandler}
          products={products.data}
          searchName={searchName}
          setSearchName={setSearchName}
          setFilteredProducts={setFilteredProducts}
          setNotFound={setNotFound}
        />

        <Definition openModel={openModel} />

        {notFound ? (
          <p>محصولی یافت نشد</p>
        ) : (
          <ProductsTable
            products={filteredProducts}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
      <AddModal
        isOpen={isModalOpen}
        onClose={closeModale}
        onCreat={addProductsHandler}
      />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default index;
