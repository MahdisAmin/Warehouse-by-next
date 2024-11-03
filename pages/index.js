// import { useGetAllProducts } from "../services/querie";
// import { deleteCookie } from "../utils/cookie";

// import ProductsTable from "../components/templates/ProductsTable";
// function index() {
//

//   const totalPages = data?.data.totalPages;

//   return (
//     <>
//

//
//       <Pagination
//         currentPage={currentPage}
//         totalPage={totalPages}
//         onPageChange={setCurrentPage}
//       /> */}
//     </>
//   );
// }

// export default index;
import React, { useState } from "react";
import SearchDashboard from "../components/modules/SearchDashboard";
import ProductsTable from "../components/templates/ProductsTable";
import AddModal from "../components/modals/AddModal";
import { deleteCookie } from "../utils/cookie";
import { useGetAllProducts } from "../services/querie";

import { useRouter } from "next/router";
import Definition from "../components/modules/Definition";

function index() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useGetAllProducts(currentPage);
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

  return (
    <>
      <div>
        <SearchDashboard
          logOutHandler={logOutHandler}
          products={products.data}
          setFilteredProducts={setFilteredProducts}
        />

        <Definition openModel={openModel} />
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
    </>
  );
}

export default index;
