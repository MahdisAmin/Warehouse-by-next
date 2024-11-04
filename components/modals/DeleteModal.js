import React from "react";
import styles from "./DeleteModal.module.css";

function DeleteModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className={styles.deleteModalContainer}>
      <div className={styles.deleteModal}>
        <img src="/images/Close.png" alt="" />
        <h3>آیا از حذف محصول مطمئنید؟</h3>
        <div className={styles.buttonHolder}>
          <button className={styles.deleteBtn} onClick={onDelete}>
            حذف
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
