const vectors = [
  {
    id: 1,
    title: "Tablet Mockup",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800",
    free: true,
  },
  {
    id: 2,
    title: "UI Kit",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
  },
  {
    id: 3,
    title: "Abstract Background",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
  },
  {
    id: 4,
    title: "T-Shirt Mockup",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: 5,
    title: "Phone Mockup",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    free: true,
  },
  {
    id: 6,
    title: "Monitor Mockup",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800",
    free: true,
  },
  {
    id: 7,
    title: "Hoodie Mockup",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800",
  },
  {
    id: 8,
    title: "Mobile Showcase",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    free: true,
  },
  {
    id: 9,
    title: "Sticker Pack",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800",
    free: true,
  },
  {
    id: 10,
    title: "Product Podium",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  },
];

const PopularVectors = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <h2 className="mb-12 text-center text-5xl font-bold text-[#05264D]">
          Popular Vector Graphics and Photos
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {vectors.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg"
            >
              {item.free && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#05264D]">
                  Free
                </span>
              )}

              <img
                src={item.image}
                alt={item.title}
                className="h-[165px] w-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVectors;