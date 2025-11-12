import { useState } from "react";
import Center from "../components/layout/Center";
import Input from "../components/layout/Input";
import Title from "../components/layout/Title";

function ResgisterCon() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmarSenha: "",
    usuario: "",
    telefone: "",
    local: "",
  });
  return (
    <Center>
      <Title title={"Cadastrar Contratante"}></Title>
      <form action="" className="w-full max-w-xl flex flex-col gap-5">
        <Input
          label="Coloque seu email:"
          id="email"
          name="email"
          type="email"
          description="example@mail.com"
        />

        <Input
          label="Coloque sua senha:"
          id="senha"
          name="senha"
          type="password"
          description="********"
        />

        <Input
          label="Coloque sua senha novamente:"
          id="confirmarSenha"
          name="confirmarSenha"
          type="password"
          description="********"
        />

        <Input
          label="Usuario:"
          id="usuario"
          name="usuario"
          type="text"
          description="Seu nome de usuário"
        />

        <Input
          label="Telefone de contato:"
          id="telefone"
          name="telefone"
          type="tel"
          description="## #####-####"
        />
        <button
          className="w-full mt-6 bg-linear-to-r from-yellow-300 to-pink-400 text-black font-bold py-3 
          rounded-full hover:opacity-50 transition text-2xl"
        >
          Registrar
        </button>
      </form>
    </Center>
  );
}

export default ResgisterCon;
