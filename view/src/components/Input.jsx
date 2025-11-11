function Input({ type, description, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={description}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-full bg-transparent border border-zinc-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  );
}

export default Input;
