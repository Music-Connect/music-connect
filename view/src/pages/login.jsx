import { Link } from "react-router";
import Center from "../components/Center";
import Input from "../components/Input";
import Title from "../components/Title";
import { useState } from "react";
function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const LoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    console.log(formLogin);

    try {
      const res = await axios.post(
        "http://localhost:5000/user/login",
        formLogin
      );
    } catch (error) {
      console.log(error);
      setErrorMessage("Email ou senha inválidos. Tente novamente.");
    }
  };
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
      {errorMessage && (
        <div className="w-full max-w-xl text-center mt-4 p-4 bg-red-900/20 border border-red-500 rounded-lg">
          <p className="text-red-400 text-sm mb-2">{errorMessage}</p>
          <Link
            to={"/forgot-password"} // Crie uma rota para esta página
            className="text-amber-400 hover:underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>
      )}

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
