import mic from "../assets/images/microfone.svg";
import headset from "../assets/images/headfone.svg";
import Databox from "../components/databox";
import Center from "../components/layout/Center";
import { Link } from "react-router";
import Title from "../components/layout/Title";

function ProfileSelector() {
  return (
    <Center>
      <span className="text-6xl font-bold mb-2 text-center">
        <Title title={"Escolha seu perfil"} />
      </span>

      <p className="text-lg text-zinc-400 pt-10">
        Você quer se cadastrar como artista ou como contratante?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <Databox
          nextPage={"/registerArt"}
          title={"Sou Artista"}
          description={"Divulgue seu talento e receba convites para eventos"}
          imageUrl={mic}
          borderColor={"border-pink-400"}
          textColor={"text-pink-400"}
          hoverBorderColor={"hover : border-pink-500"}
        ></Databox>
        <Databox
          nextPage={"/registerCon"}
          title={"Sou Contratante"}
          description={"Divulgue seu talento e receba convites para eventos"}
          imageUrl={headset}
          borderColor={"border-yellow-400"}
          textColor={"text-yellow-400"}
          hoverBorderColor={"hover : border-yellow-500"}
        ></Databox>
      </div>

      <Link
        to={"/login"}
        className="text-zinc-400 pt-10 hover:text-white transition-colors"
      >
        Já tem uma conta?{" "}
        <span className="font-bold text-yellow-300">Entrar</span>
      </Link>
    </Center>
  );
}
export default ProfileSelector;
