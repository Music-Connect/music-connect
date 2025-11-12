function Input({ label, type, description, value, onChange, name, id }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-300 mb-2 ml-2"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={description}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className="w-full px-4 py-3 rounded-full bg-transparent border border-zinc-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
}

export default Input;
