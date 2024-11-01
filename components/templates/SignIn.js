import styles from "./SignIn.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";

function SignIn() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className={styles.container}>
      <h1>بوت کمپ بوتواستارت</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img src="/images/Union.png" alt="" />
          <h1>فرم ورود</h1>
        </div>

        <input
          type="text"
          placeholder="نام کاربری"
          {...register("user", { required: "نام کاربری اجباریست" })}
        />
        {errors.user && <span>این فیلد اجباریست</span>}

        <input
          type="password"
          placeholder="رمز عبور"
          {...register("pass", { required: "رمز عبور اجباریست" })}
        />
        {errors.pass && <span>این فیلد اجباریست</span>}

        <button>ورود</button>
        <Link href="/register">ایجاد حساب کاربری!</Link>
      </form>
    </div>
  );
}

export default SignIn;
