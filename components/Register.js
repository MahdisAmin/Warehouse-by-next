import { useRegister } from "../services/mutations";
import { useRouter } from "next/router";
import Signup from "./templates/Signup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const { mutate } = useRegister();
  const router = useRouter();

  const submitHandler = async (data) => {
    mutate(
      { username: data.user, password: data.pass },
      {
        onSuccess: () => {
          toast.success("ثبت نام با موفقیت انجام شد", { autoClose: 3000 });
          router.push("/login");
        },
        onError: (error) => {
        
          try {
            if (error.response?.data?.message === "User already exists") {
              toast.error("کاربر قبلاً ثبت نام کرده است", { autoClose: 3000 });
              console.clear()
              router.push("/login");
            } else {
              toast.error("مشکلی پیش آمد", { autoClose: 3000 });
            }
          
        } catch (error) {
          return
        }
        },
      }
    );
  };

  return <Signup submitHandler={submitHandler} />;
}

export default Register;
