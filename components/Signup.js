import { useForm } from "react-hook-form";
import styles from "./Signup.module.css";
import { useState } from "react";
import Link from "next/link"
function Signup() {
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <div>
          <img src="/images/Union.png" alt="" />
          <h1>فرم ثبت نام</h1>
        </div>

        <label htmlFor="user"></label>
        <input
          type="text"
          placeholder="نام کاربری"
          id="user"
          {...register("user", { required: "نام کاربری اجباریست" })}
        />
        {errors.user && <span>{errors.user.message}</span>}

        <label htmlFor="pass"></label>
        <input
          type="text"
          placeholder="رمز عبور"
          id="pass"
          {...register("pass", { required: "رمز عبور اجباریست" })}
        />
        {errors.pass && <span>{errors.pass.message}</span>}

        <label htmlFor="confirm"></label>
        <input
          type="text"
          placeholder="تکرار رمز عبور"
          id="confirm"
          {...register("confirm", {
            required: "تکرار رمز عبور اجباریست",
          })}
        />
        {errors.confirm && <span>{errors.confirm.message}</span>}
        {passwordError && <span>{passwordError}</span>}

        <button>ثبت نام</button>
        <span>
          <Link href="/login">حساب کاربری دارید؟</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;