function Infobox({
  title,
  description,
  imageURL,
  borderColor,
  titleColor,
  textColor,
}) {
  return (
    <div
      className={`border ${borderColor} rounded-xl p-6 flex flex-col items-center gap-6 bg-[#12031f]`}
    >
      <img src={imageURL} alt={title} className="w-16 h-16" />

      <div className="flex flex-wrap">
        <h4 className={`${titleColor} text-xl font-bold mb-2`}>{title}</h4>
        <p className={`${textColor} text-sm leading-relaxed`}>{description}</p>
      </div>
    </div>
  );
}

export default Infobox;
