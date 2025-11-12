// src/components/Hero.jsx
import Center from "../layout/Center";
import Title from "../layout/Title";
import banda from "../../assets/images/imgbanda.png";

function BemVindo() {
  return (
    <Center>
      <div className="flex flex-col lg:flex-row justify-between items-center py-16 px-12 md:px-20">
        <div className="max-w-xl mb-12 lg:mb-0">
          <Title
            title={`Conecte talentos
            Amplifique sons`}
          />

          <p className="mt-6 text-lg text-gray-300">
            Uma plataforma para artistas, bandas, produtores, e fãs se
            encontrarem através da música.
          </p>
        </div>
        <img src={banda} className="w-150 h-150 ml-20"></img>
      </div>
    </Center>
  );
}

export default BemVindo;
