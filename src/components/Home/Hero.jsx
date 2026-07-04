import {
  Search,
  ChevronDown,
  ImagePlus,
} from "lucide-react";
import banner from '../../assets/bg/hero.jpg'
const Hero = () => {
  const tags = [
    "Background",
    "Father's Day",
    "Happy Birthday",
    "Flowers",
    "4th of July",
  ];

  return (
    <section  className="relative min-h-[450px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/5" />



      {/* Right Shape */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-bl-full bg-orange-500/30" />

      <div className="relative mx-auto flex min-h-[450px] max-w-7xl flex-col items-center px-4 pt-16 text-center pb-5">
        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-bold text-white md:text-6xl">
          Download Free Vectors, Stock Photos,
          Stock Videos, and More
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/90 md:text-2xl">
          Professional quality creative resources to get
          your projects done faster.
        </p>

        {/* Search Area */}
        <div className="mt-12 flex w-full max-w-5xl flex-col gap-4 md:flex-row">
          {/* Search Box */}
          <div className="flex h-20 flex-1 overflow-hidden rounded-xl bg-white shadow-xl">
            {/* Category */}
            <button className="flex w-44 items-center justify-between border-r px-5 font-semibold text-gray-800">
              Vectors
              <ChevronDown size={18} />
            </button>

            {/* Input */}
            <div className="flex flex-1 items-center px-5">
              <input
                type="text"
                placeholder="Search vectors..."
                className="w-full outline-none text-lg"
              />
            </div>

            {/* Search */}
            <button className="px-6 text-gray-500 hover:text-black">
              <Search size={30} />
            </button>
          </div>

          {/* Image Search */}
          <button className="flex h-20 w-full items-center justify-center gap-3 rounded-xl bg-white px-8 shadow-xl md:w-44">
            <ImagePlus
              size={28}
              className="text-gray-500"
            />

            <span className="font-medium text-gray-600">
              Search by Image
            </span>
          </button>
        </div>

        {/* Popular */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="font-bold text-white">
            Popular:
          </span>

          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;