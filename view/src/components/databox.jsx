import { Link } from "react-router";
function Databox({
  title,
  description,
  imageUrl,
  borderColor,
  textColor,
  hoverBorderColor,
  nextPage,
}) {
  return (
    <>
      <Link to={nextPage}>
        <div
          className={`
                  bg-black border-2 rounded-2xl p-8 flex flex-col items-center
                  justify-center text-center cursor-pointer
                  transition-all duration-300 ease-in-out
                  ${borderColor} ${hoverBorderColor}
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-2
                `}
        >
          <img src={imageUrl} alt={title} className="w-20 h-20 mb-6" />
          <h4 className={`text-2xl font-bold mb-2 ${textColor}`}>{title}</h4>
          <p className="text-zinc-400">{description}</p>
        </div>
      </Link>
    </>
  );
}
export default Databox;
