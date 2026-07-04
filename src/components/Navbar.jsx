import { useState } from "react";
import {
  ChevronDown,
  Bell,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../utlis/Hooks/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
const {user} = useAuth()
  const menus = [
    {
      name: "Vectors",
      items: [
        {
          title: "Background Vectors",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
        },
        {
          title: "Icons",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
        },
        {
          title: "Patterns",
          image:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500",
        },
        {
          title: "Abstract",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
        },
      ],
    },
    {
      name: "Photos",
      items: [
        {
          title: "Nature",
          image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
        },
        {
          title: "Travel",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500",
        },
        {
          title: "People",
          image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
        },
        {
          title: "Business",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500",
        },
      ],
    },
    {
      name: "Videos",
      items: [
        {
          title: "Stock Videos",
          image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500",
        },
        {
          title: "Animations",
          image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500",
        },
        {
          title: "Motion Graphics",
          image:
            "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500",
        },
        {
          title: "4K Videos",
          image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        },
      ],
    },
    {
      name: "Editorial",
      items: [
        {
          title: "News",
          image:
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500",
        },
        {
          title: "Sports",
          image:
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
        },
        {
          title: "Events",
          image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500",
        },
        {
          title: "Celebrity",
          image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500",
        },
      ],
    },
    {
      name: "More",
      items: [
        {
          title: "Templates",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        },
        {
          title: "Fonts",
          image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500",
        },
        {
          title: "Mockups",
          image:
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=500",
        },
        {
          title: "AI Tools",
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
        },
      ],
    },
  ];

  return (
    <nav
      className="relative w-full bg-white border-b border-gray-100 shadow-xs"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to={'/'}>
            

              <img className="h-[205px]" src="https://dayalstock.com/images/logo/dayalstock.png" alt="" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menus.map((menu) => (
              <div
                key={menu.name}
                onMouseEnter={() =>
                  setActiveMenu(menu.name)
                }
              >
                <button
                  className={`flex items-center gap-1 transition-all duration-300 text-[15px] font-medium
                  ${
                    activeMenu === null
                      ? "text-gray-800"
                      : activeMenu === menu.name
                      ? "text-black"
                      : "text-gray-400"
                  }`}
                >
                  {menu.name}
                  <ChevronDown size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-8">
          <Bell
            size={22}
            className="cursor-pointer text-gray-700"
          />

          <button className="font-medium text-gray-800">
            Plans
          </button>

          <Link to='/register' className="rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600">
            Sign Up Free
          </Link>

          <Link to={'/login'} className="rounded-xl bg-gray-100 px-8 py-3 font-semibold">
            Log In
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mega Menu */}
      {activeMenu && (
        <div className="absolute left-0 top-full z-50 w-full border-t bg-white shadow-xl">
          <div className="px-8 py-10">
            {menus
              .filter(
                (menu) => menu.name === activeMenu
              )
              .map((menu) => (
                <div
                  key={menu.name}
                  className="grid grid-cols-4 gap-6"
                >
                  {menu.items.map((item, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <h3 className="mt-3 font-semibold text-gray-800">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Explore premium resources
                      </p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col px-4 py-4">
            {menus.map((menu) => (
              <button
                key={menu.name}
                className="flex items-center justify-between py-3 font-medium"
              >
                {menu.name}
                <ChevronDown size={16} />
              </button>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <button className="text-left py-2">
                Plans
              </button>

              <button className="rounded-lg bg-orange-500 py-3 font-semibold text-white">
                Sign Up Free
              </button>

              <button className="rounded-lg bg-gray-100 py-3 font-semibold">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;