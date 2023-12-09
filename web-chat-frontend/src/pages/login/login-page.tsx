import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schema";
import { useContext } from "react";
import { MainContext } from "../../provider/main-provider";
import { LoginStyle } from "./login.style";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface iLogin {
  username: string;
  password: string;
}
export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(false);
  const { login } = useContext(MainContext);
  const {
    register,
    handleSubmit,
  } = useForm<iLogin>({ resolver: zodResolver(loginSchema) });

  const submit = (formData: iLogin) => {
    login(formData);
  };

  return (
    <LoginStyle>
      <section>
        <form onSubmit={handleSubmit(submit)}>
          <h2>LOGIN</h2>
          <input type="text" {...register("username")} />
          <input
            type={showPass ? "text" : "password"}
            {...register("password")}
          />
          <button type="submit">Entrar</button>
          {showPass ? (
            <IoEyeOffOutline
              onClick={() => setShowPass(false)}
              size={24}
              color="red"
            />
          ) : (
            <IoEyeOutline
              onClick={() => setShowPass(true)}
              size={24}
              color="red"
            />
          )}
          <a onClick={() => navigate("/register")}>Cadastre-se</a>
        </form>
      </section>
    </LoginStyle>
  );
};
