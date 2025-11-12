import { Link } from "react-router";
import { useState } from "react";
import Center from "../components/layout/Center";
import Input from "../components/layout/Input";
import Title from "../components/layout/Title";

function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const LoginSubmit = async (e) => {
    e.preventDefault();

    console.log(formLogin);

    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        formLogin
      );
    } catch (error) {
      console.log(error);
    }
  };
  /* faltando retorno de token e validação,possui apenas o componente visual com a logica do form*/

  return (
    <Center>
      <Title title={"Music Connect"}></Title>
      <p className="text-1xl text-zinc-300 pb-10">
        Conecte-se com artista, produtores e oportunidades na indústria musical.
      </p>
      <form
        action=""
        className="w-full max-w-xl flex flex-col gap-5"
        onSubmit={LoginSubmit}
      >
        <Input
          type={"email"}
          description={"example@gmail.com"}
          value={formLogin.email}
          onChange={(e) =>
            setFormLogin({ ...formLogin, email: e.target.value })
          }
        ></Input>
        <Input
          type={"password"}
          description={"*******"}
          value={formLogin.password}
          onChange={(e) =>
            setFormLogin({ ...formLogin, password: e.target.value })
          }
        ></Input>
        <button
          className="w-full mt-6 bg-linear-to-r from-yellow-300 to-pink-400 text-black font-bold py-3 
          rounded-full hover:opacity-50 transition text-2xl"
        >
          Entrar
        </button>
      </form>
      <p className="text-1xl text-zinc-100 mt-2">
        Não Tem uma conta?{" "}
        <Link to={"/profileSelector"} className="text-amber-400">
          Registre-se
        </Link>
      </p>
    </Center>
  );
}

export default Login;
