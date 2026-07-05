import { useRef, useState, useEffect } from "react";
import {
  FiSearch,
  FiImage,
  FiGrid,
  FiList,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiBox,
  FiCamera,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const tags = [
  { label: "SVGs", icon: <FiBox /> },
  { label: "PNGs", icon: <FiGrid /> },
  { label: "Photos", icon: <FiCamera /> },
  { label: "Geometric Pattern" },
  { label: "Floral Pattern" },
  { label: "Islamic Pattern" },
  { label: "Abstract Pattern" },
  { label: "Flower Pattern" },
  { label: "Seamless Pattern" },
  { label: "Line Pattern" },
  { label: "Christmas Pattern" },
  { label: "Wave Pattern" },
];
const demoImages = [
  "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7454?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=900&q=80",
];

export default function ContentArea({ category, subcategory, contents }) {
  const [search, setSearch] = useState(subcategory || "");
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("Most Relevant");
  const scrollRef = useRef(null);
  const title = search || subcategory || category || "Pattern";
  const categoryName =
    category?.charAt(0).toUpperCase() + category?.slice(1) || "Vectors";

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [activeTag, setActiveTag] = useState("");

  const checkTagScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const canScroll = el.scrollWidth > el.clientWidth + 5;

    setShowLeftArrow(canScroll && el.scrollLeft > 5);
    setShowRightArrow(
      canScroll && el.scrollLeft + el.clientWidth < el.scrollWidth - 5,
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkTagScroll();

    el.addEventListener("scroll", checkTagScroll);
    window.addEventListener("resize", checkTagScroll);

    return () => {
      el.removeEventListener("scroll", checkTagScroll);
      window.removeEventListener("resize", checkTagScroll);
    };
  }, []);
  const scrollTags = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-w-0 flex-1 bg-white px-6 py-4">
      {/* Search Area */}
      <div className="flex h-[48px] overflow-hidden rounded-lg bg-slate-100">
        <button className="flex w-[160px] shrink-0 items-center justify-between border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800">
          {categoryName}
          <FiChevronDown className="text-lg" />
        </button>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search vectors..."
          className="min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
        />

        <button className="flex w-14 items-center justify-center text-orange-500 hover:bg-orange-50">
          <FiSearch className="text-[25px]" />
        </button>

        <button className="mr-2 flex w-12 items-center justify-center border-l border-slate-200 text-slate-400 hover:text-slate-700">
          <FiImage className="text-[24px]" />
        </button>
      </div>

      {/* Heading + view options */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-[21px] font-bold text-slate-950">
          {title} Vector Images
          <span className="ml-2 text-[15px] font-medium text-slate-700">
            - 3,996,715 royalty free vector graphics and clipart matching "
            {title}"
          </span>
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-lg border border-slate-200">
            <button
              onClick={() => setView("grid")}
              className={`flex h-11 w-11 items-center justify-center ${
                view === "grid"
                  ? "border border-orange-300 bg-orange-50 text-orange-500"
                  : "bg-white text-slate-600"
              }`}
            >
              <FiGrid className="text-xl" />
            </button>

            <button
              onClick={() => setView("list")}
              className={`flex h-11 w-11 items-center justify-center ${
                view === "list"
                  ? "border border-orange-300 bg-orange-50 text-orange-500"
                  : "bg-white text-slate-600"
              }`}
            >
              <FiList className="text-xl" />
            </button>
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 min-w-[180px] appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-slate-700 outline-none"
            >
              <option>Most Relevant</option>
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>

            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-slate-700" />
          </div>
        </div>
      </div>

      {/* Horizontal Tags */}
      <div className="relative mt-8 border-y border-slate-100 bg-white py-4">
        {showLeftArrow && (
          <>
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white via-white/90 to-transparent" />

            <button
              onClick={() => scrollTags("left")}
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <FiChevronLeft className="text-[21px]" />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className={`no-scrollbar flex gap-3 overflow-x-auto scroll-smooth ${
            showLeftArrow ? "pl-14" : "pl-0"
          } ${showRightArrow ? "pr-14" : "pr-0"}`}
        >
          {tags.map((tag) => {
            const isActive = activeTag === tag.label;

            return (
              <button
                key={tag.label}
                onClick={() => setActiveTag(tag.label)}
                className={`group flex shrink-0 items-center gap-2.5 rounded-lg border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-blue-500 bg-blue-50 text-blue-600"
                    : "border-slate-200 bg-slate-50 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {tag.icon && (
                  <span
                    className={`text-[18px] transition-colors ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700 group-hover:text-blue-600"
                    }`}
                  >
                    {tag.icon}
                  </span>
                )}

                <span>{tag.label}</span>
              </button>
            );
          })}
        </div>

        {showRightArrow && (
          <>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white via-white/90 to-transparent" />

            <button
              onClick={() => scrollTags("right")}
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 shadow-md transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <FiChevronRight className="text-[21px]" />
            </button>
          </>
        )}
      </div>

      {/* Images */}
      {view === "grid" ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {contents.map((items, index) => (
            <Link
            to={`/${category}/content/${items.slug}`}
              key={index}
              className="group relative aspect-[1.25/1] overflow-hidden rounded-md bg-slate-100"
            >
              <img
                src={
                  items?.image_url
                    ? `https://dayalstock.com/${items?.image_url}`
                    : "/images/placeholder.jpg"
                }
                alt={items?.title || "Stock image"}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-4 transition duration-300 group-hover:translate-y-0">
                <p className="text-sm font-semibold text-white">
                  {title} Vector Pattern
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {demoImages.map((image, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-slate-200 p-3 hover:border-orange-300"
            >
              <img
                src={image}
                alt={`Pattern vector ${index + 1}`}
                className="h-20 w-32 rounded-md object-cover"
              />

              <div>
                <h3 className="font-semibold text-slate-900">
                  {title} Vector Pattern {index + 1}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Royalty free vector graphic for your design project.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
