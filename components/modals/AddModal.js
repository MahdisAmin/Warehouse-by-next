import React from "react";
import styles from ".//AddModal.module.css";

import { useForm } from "react-hook-form";
import { addProductsMutation } from "../../services/mutations";


function AddModal({ isOpen, onClose, onCreat }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addProducts = addProductsMutation();
  const onSubmit = (data) => {
    addProducts.mutate({
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    })
      onCreat(data);
    reset()
    onClose();
  };

  if (!isOpen) return;
  return (
    <div className={styles.modal}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>ایجاد محصول جدید</h2>
          <label htmlFor="kala">نام کالا</label>
          <input
            placeholder="نام کالا"
            type="text"
            id="kala"
            {...register("name", { required: "نام محصول اجباریست" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor="tedad">تعداد موجودی</label>
          <input
            type="number"
            id="tedad"
            placeholder="تعداد"
            {...register("quantity", {
              required: "تعداد را وارد کنید",
              min: { value: 0, message: "تعداد باید بیشتر از 0 باشد" },
            })}
          />
          {errors.quantity && <span>{errors.quantity.message}</span>}
          <label htmlFor="qeimat">قیمت</label>
          <input
            id="qeimat"
            type="number"
            placeholder="قیمت"
            {...register("price", {
              required: "قیمت را وارد کنید",
              min: { value: 0, message: "قیمت باید بیشتر از 0 باشد" },
            })}
          />
          {errors.price && <span>{errors.price.message}</span>}
          <div className={styles.btnHolder}>
            <button className={styles.first} type="submit">
              ایجاد
            </button>
            <button className={styles.last} type="button" onClick={onClose}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
