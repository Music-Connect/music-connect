import BemVindo from "../components/homeComponents/bemVindo";
import HomeCards from "../components/homeComponents/homeCards";
import Center from "../components/layout/Center";
import Title from "../components/layout/Title";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <nav className="flex justify-between items-center py-6 px-12 md:px-20 bg-black">
        <Title title={"Music Connect"} />

        <div className="flex space-x-8 text-white">
          <Link
            to="/profileSelector"
            className="hover:text-purple-400 transition duration-300"
          >
            Criar conta
          </Link>
          <Link
            to="/login"
            className="hover:text-purple-400 transition duration-300"
          >
            Entrar
          </Link>
        </div>
      </nav>
      <BemVindo />
      <Center>
        <HomeCards />
      </Center>
    </>
  );
}

export default Home;
