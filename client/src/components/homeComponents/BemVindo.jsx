import Center from "../layout/Center";
import banda from "../../assets/images/imgbanda.png";

function BemVindo() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-16 px-12 md:px-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl lg:text-7xl font-black leading-tight">
          <span className="bg-linear-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
            Conecte talentos.
          </span>
        </h1>
        <p className="text-lg text-gray-300 my-8 max-w-md mx-auto md:mx-0">
          Uma plataforma para artistas, bandas, produtores, e fãs se encontrarem
          através da música.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="border border-gray-600 rounded-full px-6 py-3 flex items-center gap-2 text-white hover:border-white transition-colors">
            <span role="img" aria-label="Lupa">
              🔍
            </span>
            <span>Descobrir Talentos</span>
          </button>
          <button className="border border-gray-600 rounded-full px-6 py-3 flex items-center gap-2 text-white hover:border-white transition-colors">
            <span role="img" aria-label="Foguete">
              🚀
            </span>
            <span>Criar</span>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0">
        <img src={banda} className="w-full h-auto max-w-lg mx-auto"></img>
      </div>
    </div>
  );
}

export default BemVindo;
