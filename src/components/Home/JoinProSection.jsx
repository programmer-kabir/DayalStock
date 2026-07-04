import { CheckCircle } from "lucide-react";
import shape from "../../assets/shape.svg";

const JoinProSection = () => {
  const features = [
    "Millions of premium stock resources",
    "Unlimited downloads",
    "Full commercial rights",
    "No attribution required",
    "Download bundles and collections",
    "Faster downloads and no ads",
    "Priority support",
    "Unlimited 4K Video Downloads",
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto  max-w-[1400px] px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative">
            {/* Background Shape */}
            <img
              src={shape}
              alt=""
              className="absolute -left-120 top-1/6 w-[750px] -translate-y-1/2 pointer-events-none select-none"
            />

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
              alt="Dayal Stock Pro"
              className="relative z-10 h-[440px] w-full rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Right Side */}
          <div>
            <h2 className="mb-8 text-4xl font-bold text-[#05264D] lg:text-5xl">
              Join Dayal Stock Pro Today!
            </h2>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle
                    size={22}
                    className="shrink-0 text-green-500"
                  />

                  <span className="text-lg text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-10 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinProSection;