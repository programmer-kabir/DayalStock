const creators = [
  {
    id: 1,
    cover:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    name: "Creative Studio",
    resources: "12,450 Resources",
  },
  {
    id: 2,
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    name: "Modern Creator",
    resources: "8,720 Resources",
  },
  {
    id: 3,
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300",
    name: "Vector Master",
    resources: "5,380 Resources",
  },
  {
    id: 4,
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    name: "Design Expert",
    resources: "3,910 Resources",
  },
];

const BestCreatorCommunity = () => {
  return (
    <section className="py-24">
      <div className="mx-auto  max-w-[1400px] px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#05264D] md:text-5xl">
            Best Creator Community Online
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Get inspired by the latest from talented creators
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Cover */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={creator.cover}
                  alt={creator.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Avatar */}
              <div className="relative flex justify-center">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="-mt-14 h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>

              {/* Info */}
              <div className="px-6 pb-6 text-center">
                <h3 className="mt-4 text-2xl font-semibold text-[#05264D]">
                  {creator.name}
                </h3>

                <p className="mt-2 italic text-gray-500">
                  {creator.resources}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestCreatorCommunity;