const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    free: true,
    className: "col-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    className: "col-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
    free: true,
    className: "col-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    className: "col-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    className: "col-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    className: "col-span-1",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    className: "col-span-1",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    className: "col-span-1",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    className: "col-span-1",
  },
];

const PopularImages = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-4">
        <h2 className="mb-12 text-center text-5xl font-bold text-[#05264D]">
          Popular Royalty Free Images
        </h2>

        <div className="grid grid-cols-5 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg ${image.className}`}
            >
              {image.free && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#05264D]">
                  Free
                </span>
              )}

              <img
                src={image.src}
                alt=""
                className="h-[180px] w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularImages;