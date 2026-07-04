import {
  Images,
  BadgeCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Images,
    title: "Huge Content Library",
    description:
      "Download thousands of premium vectors, photos, illustrations and design assets.",
  },
  {
    icon: BadgeCheck,
    title: "Simple Licensing",
    description:
      "Easy licensing for personal and commercial projects with peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Fresh Content",
    description:
      "New high-quality resources are added regularly for creators and businesses.",
  },
  {
    icon: Wallet,
    title: "Affordable Plans",
    description:
      "Flexible pricing plans designed for freelancers, agencies and teams.",
  },
];

const WhyDayalStock = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto  max-w-[1400px] px-4">
        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl font-bold text-[#05264D] md:text-5xl">
          Why Dayal Stock?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-200 transition-all duration-300 group-hover:border-[#ff7900] group-hover:bg-orange-50">
                  <Icon
                    size={42}
                    className="text-[#ff7900]"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#05264D]">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDayalStock;