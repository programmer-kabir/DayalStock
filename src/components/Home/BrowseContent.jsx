import { Link, useLocation } from "react-router-dom";
import useCategories from "../../utlis/Hooks/useCategories";
import SkeletonGrid from "../Skeleton/SkeletonGrid";

const BrowseContent = () => {
  const location = useLocation();

  const {
    data: categories = [],
    isLoading,
    error,
  } = useCategories();

  // শুধু parent_id NULL গুলো
  const mainCategories = categories.filter(
    (item) => item.parent_id === null || item.parent_id === "NULL"
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1400px] px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#05264D]">
          Browse by Content Type
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {isLoading ? (
            <SkeletonGrid count={10} />
          ) : (
            mainCategories.map((item) => {
              const isActive = location.pathname === `/${item?.slug}`;

              return (
                <Link
                  key={item?.id}
                  to={`/${item?.slug}`}
                  className="group cursor-pointer"
                >
                  <div
                    className={`overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 ${
                      isActive
                        ? "ring-2 ring-[#ff7900] ring-offset-2"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={`https://dayalstock.com/${item?.image}`}
                      alt={item?.name}
                      className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3
                    className={`mt-4 text-center font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#ff7900]"
                        : "text-[#05264D] group-hover:text-[#ff7900]"
                    }`}
                  >
                    {item?.name}
                  </h3>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseContent;