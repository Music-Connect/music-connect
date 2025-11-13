const Infobox = ({ icon, title, description }) => {
  return (
    <div className="border border-purple-600 rounded-lg p-6 flex flex-col gap-3">
      <div className="text-5xl text-purple-400 mb-2">{icon}</div>

      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default Infobox;
