import { useForm } from "react-hook-form";
import { MainStyle } from "./register.style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../provider/main-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface iRegister {
  username: string;
  password: string;
}

const RegisterSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(6),
});

export const RegisterPage = () => {
  const { registerUser } = useContext(MainContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({ resolver: zodResolver(RegisterSchema) });

  const navigate = useNavigate();

  const submit = (payload: iRegister) => {
    registerUser(payload);
  };
  return (
    <MainStyle>
      <section>
        <form onSubmit={handleSubmit(submit)}>
          <h1>CRIAR CONTA</h1>
          <input
            type="text"
            placeholder="Nome de usuário"
            {...register("username")}
          />
          {errors.username?.message?.length! > 0 && <span className="error">{errors.username?.message}</span>}
          <input type="password" placeholder="Senha" {...register("password")} />
          {errors.password?.message?.length! > 0 && <span className="error">{errors.password?.message}</span>}
          <button type="submit">Cadastrar</button>
          <a onClick={() => navigate("/")}>Voltar</a>
        </form>
      </section>
    </MainStyle>
  );
};
