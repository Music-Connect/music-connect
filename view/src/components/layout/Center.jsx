function Center({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="w-full h-full flex flex-col items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}

export default Center;
