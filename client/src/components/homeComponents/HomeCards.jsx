import React from "react";
import Infobox from "./Infobox"; // Atualizado para importar Infobox

// Dados dos cards para facilitar a organização
const featuresData = [
  {
    icon: "🎧",
    title: "Conexão direta",
    description:
      "Conecte-se facilmente com outros artistas, produtores e locais.",
  },
  {
    icon: "📈",
    title: "Aumenta sua visibilidade",
    description:
      "Seja notado por profissionais da indústria musical e expanda sua carreira.",
  },
  {
    icon: "⭐",
    title: "4.8+ Avaliações",
    description: "Avaliado positivamente por críticos.",
  },
  {
    icon: "💼",
    title: "Funcional e Adaptável",
    description:
      "Uma plataforma criada para atender às suas necessidades únicas.",
  },
];

// Renomeado de Features para HomeCards
const HomeCards = () => {
  return (
    <section className="py-24 px-8 md:px-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 max-w-2xl">
        Navegue pelo universo da música com o Music Connect: sua rede de
        oportunidades.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuresData.map((feature, index) => (
          <Infobox
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
