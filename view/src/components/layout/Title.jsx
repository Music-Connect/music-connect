function Title({ title }) {
  return (
    <h1 className="text-5xl font-bold mb-10 text-center">
      <span className="bg-linear-to-r from-yellow-300 to-pink-400 text-transparent bg-clip-text">
        {title}
      </span>
    </h1>
  );
}

export default Title;
