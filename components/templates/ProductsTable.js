import React, { useState } from "react";
import {
  deleteProductMutation,
  editProductMutation,
} from "../../services/mutations";

import Table from "../modules/Table";
import DeleteModal from "../modals/DeleteModal";
import EditModal from "../modals/EditModal";
import styles from "./ProductsTable.module.css"
import { useGetAllProducts } from "../../services/querie";

function ProductsTable({ products, setCurrentPage, currentPage }) {
  const { isLoading, error, refetch } = useGetAllProducts();

  const deleteProduct = deleteProductMutation();
  const editProduct = editProductMutation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDeleteModal = (productId) => {
    setSelectedProduct(productId);
    setIsDeleteModalOpen(true);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const editHandler = (updateProduct) => {
    editProduct.mutate(updateProduct);
    closeEditModal();
  };

  const deleteHandler = () => {
    if (selectedProduct) {
      deleteProduct.mutate(selectedProduct);

      if (products.length === 1 && currentPage > 1) {
        setCurrentPage(1);
      }
      refetch();
      closeDeleteModal();
    }
  };

  if (isLoading)
    return (
      <div className={styles.rotat}>
        {/* <RotatingLines strokeColor="#55a3f0" />
         */}
      </div>
    );
  if (error) return <div className={styles.rotat}>error {error.message}</div>;

  return (
    <>
      <Table
        products={products}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />

       <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteHandler}
      />

      <EditModal
        product={selectedProduct}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={editHandler}
      /> 
    </>
  );
}

export default ProductsTable;
