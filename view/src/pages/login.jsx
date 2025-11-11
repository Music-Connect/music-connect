import Center from "../components/Center";
import Input from "../components/Input";

function Login() {
  return (
    <Center>
      <h1 className="text-6xl font-bold mb-10 text-center">
        <span className="bg-linear-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
          Music Connect
        </span>
      </h1>
      <p className="text-1xl text-zinc-300 pb-10">
        Conecte-se com artista, produtores e oportunidades na indústria musical.
      </p>
      <form action="" className="w-full max-w-xl flex flex-col gap-5">
        <Input type={"email"} description={"example@gmail.com"}></Input>
        <Input type={"password"} description={"*******"}></Input>
        <button
          className="w-full mt-6 bg-linear-to-r from-yellow-300 to-pink-400 text-black font-bold py-3 
          rounded-full hover:opacity-50 transition text-2xl"
        >
          Entrar
        </button>
      </form>
      <p className="text-2xl text-zinc-100 mt-2">
        Não Tem uma conta?{" "}
        <a href="/registrar" className="text-amber-400">
          Registre-se
        </a>
      </p>
    </Center>
  );
}

export default Login;
