"use client";

/*

O componente de Login depende diretamente da API, pois a função handleSubmitData
faz a chamada HTTP.

Para resolver isso podemos criar um custom hook ou uma classe para ser responsavel pela comunicação HTTP.
Ou seja, sera uma comada intermediaria

*/

import { useForm } from "react-hook-form";
import { UserService } from "./userService";

const useLogin = () => {
  const { handleSubmit, register } = useForm();

  const handleSubmitData = async (data: any) => {
    await UserService.login({
      email: data.email,
      password: data.password,
    });
  };

  return {
    handleSubmit,
    register,
    handleSubmitData,
  };
};

export const Login = () => {
  //   const handleSubmitDataOld = (data: any) => {
  //     //axios.post(...)
  //     // console.log(data);
  //   };

  const { handleSubmit, register, handleSubmitData } = useLogin();

  return (
    <>
      <h2> Inversão de dependência - DIP</h2>

      <q>
        Não devemos depender de algo concreto devemos depender de abstrações
      </q>

      <form
        onSubmit={handleSubmit(handleSubmitData)}
        style={{
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          {...register("email")}
          placeholder="Informe seu login"
        />
        <input
          type="password"
          {...register("password")}
          placeholder="Informe sua senha"
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
