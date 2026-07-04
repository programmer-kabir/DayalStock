const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#24008b] via-[#d000d8] to-[#f0a36a]" />

      {/* Left Shape */}
      <div className="absolute -left-40 top-8 h-96 w-96 rounded-[40%] bg-gradient-to-br from-yellow-300 via-pink-500 to-purple-700 blur-sm rotate-45" />

      <div className="absolute -left-10 bottom-[-120px] h-72 w-72 rounded-full bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-700 blur-sm" />

      {/* Right Shape */}
      <div className="absolute -right-32 top-0 h-80 w-80 rounded-[45%] bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-700 blur-sm rotate-12" />

      {/* Dot Pattern */}
      <div className="absolute left-1/4 top-10 grid grid-cols-6 gap-2 opacity-20">
        {[...Array(36)].map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        ))}
      </div>

      <div className="absolute right-1/4 bottom-16 grid grid-cols-6 gap-2 opacity-20">
        {[...Array(36)].map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-5xl font-bold text-white">
          Create a Free Account
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-white/90">
          Explore thousands of free vectors, photos,
          illustrations, templates and creative assets
          uploaded by talented creators around the world.
        </p>

        <button className="mt-10 rounded-lg bg-white px-10 py-4 text-lg font-semibold text-[#05264D] transition-all duration-300 hover:scale-105">
          Sign Up Free
        </button>

        <p className="mt-10 text-lg text-white">
          Want access to our entire library?{" "}
          <a
            href="#"
            className="underline underline-offset-4"
          >
            Join Dayal Stock Pro
          </a>
        </p>
      </div>

      {/* Bottom Dark Line */}
      <div className="absolute bottom-0 left-0 h-5 w-full bg-[#05264D]" />
    </section>
  );
};

export default CTASection;