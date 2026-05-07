const PageBackground = ({ children }) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-stone-200 px-4 py-10">
      <div className="absolute top-20 left-10 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#92400e_1px,transparent_1px),linear-gradient(to_bottom,#92400e_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
};

export default PageBackground;