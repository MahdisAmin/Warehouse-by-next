import { useState } from "react";

import styles from "../styles/index.module.css";

import { useRoure } from "next/router";

import { useGetAllProducts } from "../services/querie";
import { deleteCookie } from "../utils/cookie";

import AiOutlineProduct from "react-icons";
function index() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetAllProducts(currentPage);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = data?.data || [];

  const router = useRoure();
  const openModel = () => {
    setIsModalOpen(true);
  };

  const closeModale = () => {
    setIsModalOpen(false);
  };

  const logOutHandler = () => {
    deleteCookie("token");
    router.push("/login");
  };

  const addProductsHandler = (newProducts) => {
    console.log(newProducts);
  };

  const totalPages = data?.data.totalPages;

  return (
    <>
      <SearchDashboard
        logOutHandler={logOutHandler}
        products={products.data}
        setFilteredProducts={setFilteredProducts}
      />

      <div className={styles.addContainer}>
        <div>
          <p>
            <AiOutlineProduct
              style={{ marginLeft: "10px", marginTop: "1px" }}
            />
            مدیرت کالا
          </p>
        </div>
        <div>
          <button onClick={openModel}>افزودن محصول</button>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <ProductsTable
          products={filteredProducts}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <AddModal
        isOpen={isModalOpen}
        onClose={closeModale}
        onCreat={addProductsHandler}
      />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default index;
