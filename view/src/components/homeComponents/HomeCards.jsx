import Infobox from "./Infobox";
import headfoneRoxo from "../../assets/images/headfone-roxo.svg";
import seta from "../../assets/images/seta.svg";
import quebraCabeca from "../../assets/images/quebra-cabeca.svg";
import estrela from "../../assets/images/seta.svg";

function HomeCards() {
  return (
    <>
      <div className="text-center mt-16 pb-16 px-12 md:px-20">
        <h2 className="text-3xl font-bold text-white">
          Navegue pelo universo da música com o Music Connect: sua rede de
          oportunidades.
        </h2>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15">
          <Infobox
            borderColor="border-purple-700"
            imageURL={headfoneRoxo}
            title="Conexão direta"
            description="Conecte-se facilmente com outros artistas, produtores e locais."
            textColor="text-gray-300"
            titleColor="text-purple-500"
          />
          <Infobox
            borderColor="border-purple-700"
            imageURL={seta}
            title="Aumente sua Visibilidade"
            description="Seja notado por profissionais da indústria musical e escale sua carreira."
            textColor="text-gray-300"
            titleColor="text-purple-500"
          />
          <Infobox
            borderColor="border-purple-700"
            imageURL={quebraCabeca}
            title="Sistema de Avaliação"
            description="Sistema de avaliação embutido no aplicativo."
            textColor="text-gray-300"
            titleColor="text-purple-500"
          />
          <Infobox
            borderColor="border-purple-700"
            imageURL={estrela}
            title="Funcional e Adaptável"
            description="Uma plataforma criada para atender às suas necessidades únicas."
            textColor="text-gray-300"
            titleColor="text-purple-500"
          />
        </div>
      </div>
    </>
  );
}

export default HomeCards;
