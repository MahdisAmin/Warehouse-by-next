import SignIn from "./templates/SignIn";
import { useLogin } from "../services/mutations";
import { setCookie } from "../utils/cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Login() {
  const router = useRouter();
  const { mutateAsync } = useLogin();

  const onSubmit = async (data) => {
    await mutateAsync(
      { username: data.user, password: data.pass },
      {
        onSuccess: (response) => {
          setCookie("token", response.data?.token);
          toast.success("ورود با موفقیت انجام شد", { autoClose: 3000 });
          router.push("/");
        },
        onError: (error) => {
          if (
            error.response?.data?.message === "Invalid credentials" ||
            error.response.name === "AxiosError"
          ) {
            toast.error(
              " کاربری با این مشخصات یافت نشد یا رمز عبور اشتباه است",
              { autoClose: 3000 }
            );
          } else {
            toast.error("مشکلی پیش آمد", {
              autoClose: 3000,
            });
          }
        },
      }
    ).catch((error) => {
      console.clear()
      // toast.error("مشکل در برقراری ارتباط" , {autoClose:2000})
    });
  };
  return <SignIn onSubmit={onSubmit} />;
}

export default Login;
