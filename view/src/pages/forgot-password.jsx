import Center from "../components/Center";
import Input from "../components/Input";
import Title from "../components/Title";
import { Link } from "react-router";

function ForgotPassword() {
  return (
    <div>
      <Center>
        <Title title={"Esqueci a senha"}></Title>
        <p className="text-white mb-3">
          Digite seu e-mail cadastrado para receber um link de redefinição.
        </p>
        <form className="w-full max-w-xl flex flex-col gap-5">
          <Input type={"email"} description={"example@gmail.com"}></Input>
          <button
            type="submit"
            className="w-full mt-6  bg-linear-to-r from-yellow-300 to-pink-400 text-black font-bold py-3 
          rounded-full hover:opacity-50 transition text-2xl"
          >
            Enviar
          </button>
        </form>
        <Link
          to={"/login"}
          className="text-zinc-400 pt-10 hover:text-white transition-colors"
        >
          Voltar para {""}
          <span className="font-bold text-yellow-300">Login</span>
        </Link>
      </Center>
    </div>
  );
}

export default ForgotPassword;
