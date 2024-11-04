import React, { useState, useEffect } from "react";
import styles from "./AddModal.module.css"

function EditModal({ isOpen, onClose, onSave, product }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [nameError, setNameError] = useState();

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price || "");
      setQuantity(product.quantity || "");
    }
  }, [product]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError("نام کالا را وارد کنید");
      return;
    } else {
      setNameError("");
    }
    onSave({
      id: product.id,
      name,
      price,
      quantity,
    });
  };

  return (
    <div className={styles.modal}>
      <form onSubmit={handleSave}>
        <h2>ویرایش محصول</h2>
        <label htmlFor="kala">نام کالا</label>
        <input
          type="text"
          value={name}
          id="kala"
          onChange={(e) => setName(e.target.value)}
          placeholder="نام کالا"
        />
        {nameError && <span>{nameError}</span>}

        <label htmlFor="tedad">تعداد</label>
        <input
          type="number"
          id="tedad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="تعداد"
        />
        <label htmlFor="qeimat">قیمت</label>
        <input
          type="number"
          id="qeimat"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="قیمت"
        />

        <div className={styles.btnHolder}>
          <button className={styles.first} type="submit">
            ویرایش
          </button>
          <button className={styles.last} type="button" onClick={onClose}>
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
