import { useState } from "react";
import {
  FiSliders,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiHelpCircle,
} from "react-icons/fi";

export default function SidebarFilters({
  licenseType,
  setLicenseType,
  aiGenerated,
  setAiGenerated,
  orientation,
  setOrientation,
  hexColor,
  setHexColor,
  baseColor,
  setBaseColor,
  colorIntensity,
  setColorIntensity,
  colorPosition,
  setColorPosition,
}) {
  const [isLicenseTypeOpen, setIsLicenseTypeOpen] = useState(true);
  const [isAiGeneratedOpen, setIsAiGeneratedOpen] = useState(true);
  const [isOrientationOpen, setIsOrientationOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);

  const applyColorIntensity = (hex, intensity) => {
    const cleanHex = hex.replace("#", "");

    if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
      return "#FFFFFF";
    }

    const red = parseInt(cleanHex.slice(0, 2), 16);
    const green = parseInt(cleanHex.slice(2, 4), 16);
    const blue = parseInt(cleanHex.slice(4, 6), 16);
    const ratio = intensity / 100;

    const toHex = (number) =>
      Math.round(number)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

    return `#${toHex(red * ratio)}${toHex(green * ratio)}${toHex(
      blue * ratio,
    )}`;
  };

  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;

    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - chroma / 2;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (h < 60) [red, green, blue] = [chroma, x, 0];
    else if (h < 120) [red, green, blue] = [x, chroma, 0];
    else if (h < 180) [red, green, blue] = [0, chroma, x];
    else if (h < 240) [red, green, blue] = [0, x, chroma];
    else if (h < 300) [red, green, blue] = [x, 0, chroma];
    else [red, green, blue] = [chroma, 0, x];

    const toHex = (number) =>
      Math.round((number + m) * 255)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  };

  const Chevron = ({ isOpen }) =>
    isOpen ? (
      <FiChevronUp className="text-lg text-slate-700" />
    ) : (
      <FiChevronDown className="text-lg text-slate-700" />
    );

  const handleColorWheelClick = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const radius = box.width / 2;

    const x = event.clientX - box.left - radius;
    const y = event.clientY - box.top - radius;
    const distance = Math.sqrt(x * x + y * y);

    if (distance > radius) return;

    const positionX = ((x + radius) / (radius * 2)) * 100;
    const positionY = ((y + radius) / (radius * 2)) * 100;

    setColorPosition({
      x: positionX,
      y: positionY,
    });

    let hue = (Math.atan2(y, x) * 180) / Math.PI + 90;
    if (hue < 0) hue += 360;

    const saturation = Math.min(100, (distance / radius) * 100);
    const selectedBaseColor = hslToHex(hue, saturation, 50);

    setBaseColor(selectedBaseColor);
    setHexColor(applyColorIntensity(selectedBaseColor, colorIntensity));
  };

  const handleIntensityChange = (event) => {
    const newIntensity = Number(event.target.value);

    setColorIntensity(newIntensity);
    setHexColor(applyColorIntensity(baseColor, newIntensity));
  };

  const handleHexChange = (event) => {
    const typedColor = event.target.value.toUpperCase();

    setHexColor(typedColor);

    if (/^#[0-9A-F]{6}$/.test(typedColor)) {
      setBaseColor(typedColor);
      setColorIntensity(100);
    }
  };

  return (
    <aside className="min-h-screen w-[300px] shrink-0 border-r border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-3 px-7 py-4">
          <FiSliders className="text-[21px] text-slate-950" />
          <h3 className="text-[15px] font-bold text-slate-950">Filters</h3>
        </div>

        <button className="flex h-[53px] w-8 items-center justify-center border-l border-slate-200 text-slate-800 hover:bg-slate-50">
          <FiChevronLeft className="text-xl" />
        </button>
      </div>

      <FilterSection
        title="License Type"
        isOpen={isLicenseTypeOpen}
        onToggle={() => setIsLicenseTypeOpen((previous) => !previous)}
      >
        <RadioItem
          name="licenseType"
          label="All"
          value="all"
          selected={licenseType}
          setSelected={setLicenseType}
        />
        <RadioItem
          name="licenseType"
          label="Free License"
          value="free"
          selected={licenseType}
          setSelected={setLicenseType}
          helpText="Free to use content"
        />
        <RadioItem
          name="licenseType"
          label="Premium"
          value="premium"
          selected={licenseType}
          setSelected={setLicenseType}
          helpText="Premium licensed content"
        />
        <RadioItem
          name="licenseType"
          label="Editorial Use Only"
          value="editorial"
          selected={licenseType}
          setSelected={setLicenseType}
          helpText="Only for editorial use"
        />
      </FilterSection>

      <FilterSection
        title="AI Generated"
        isOpen={isAiGeneratedOpen}
        onToggle={() => setIsAiGeneratedOpen((previous) => !previous)}
      >
        <RadioItem
          name="aiGenerated"
          label="All"
          value="all"
          selected={aiGenerated}
          setSelected={setAiGenerated}
        />
        <RadioItem
          name="aiGenerated"
          label="Only AI Images"
          value="only-ai"
          selected={aiGenerated}
          setSelected={setAiGenerated}
        />
        <RadioItem
          name="aiGenerated"
          label="Non-AI Images"
          value="non-ai"
          selected={aiGenerated}
          setSelected={setAiGenerated}
        />
      </FilterSection>

      <FilterSection
        title="Orientation"
        isOpen={isOrientationOpen}
        onToggle={() => setIsOrientationOpen((previous) => !previous)}
      >
        <SquareRadioItem
          label="Horizontal"
          value="horizontal"
          selected={orientation}
          setSelected={setOrientation}
        />
        <SquareRadioItem
          label="Vertical"
          value="vertical"
          selected={orientation}
          setSelected={setOrientation}
        />
        <SquareRadioItem
          label="Square"
          value="square"
          selected={orientation}
          setSelected={setOrientation}
        />
        <SquareRadioItem
          label="Panoramic"
          value="panoramic"
          selected={orientation}
          setSelected={setOrientation}
        />
      </FilterSection>

      <div className="border-b border-slate-200">
        <button
          onClick={() => setIsColorOpen((previous) => !previous)}
          className="flex w-full items-center justify-between px-7 py-6 text-left"
        >
          <span className="text-[14px] font-bold text-slate-950">Color</span>
          <Chevron isOpen={isColorOpen} />
        </button>

        {isColorOpen && (
          <div className="px-7 pb-7">
            <div
              className="relative mx-auto h-[208px] w-[208px] cursor-crosshair rounded-full"
              onClick={handleColorWheelClick}
            >
              <div className="color-wheel h-full w-full rounded-full" />

              <div
                className="pointer-events-none absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-950 shadow-md"
                style={{
                  left: `${colorPosition?.x ?? 50}%`,
                  top: `${colorPosition?.y ?? 50}%`,
                  backgroundColor: hexColor || "#FFFFFF",
                }}
              />
            </div>

            <div
              className="mt-5 h-[22px] w-full rounded-full p-[2px]"
              style={{
                background: `linear-gradient(to right, #000000, ${
                  baseColor || "#FFFFFF"
                })`,
              }}
            >
              <input
                type="range"
                min="0"
                max="100"
                value={colorIntensity}
                onChange={handleIntensityChange}
                className="color-range h-full w-full cursor-pointer appearance-none rounded-full bg-transparent"
              />
            </div>

            <div className="relative mt-4">
              <div
                className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded border border-slate-300"
                style={{ backgroundColor: hexColor || "#FFFFFF" }}
              />

              <input
                value={hexColor}
                onChange={handleHexChange}
                placeholder="#Hex color code"
                className="h-10 w-full rounded-md border border-slate-300 pl-11 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-orange-500"
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .color-wheel {
          background: conic-gradient(
            #ff0000,
            #ff8a00,
            #ffff00,
            #50ff00,
            #00d84a,
            #00dfff,
            #0066ff,
            #3d00ff,
            #9c00ff,
            #ff00bb,
            #ff0062,
            #ff0000
          );
          position: relative;
        }

        .color-wheel::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.08) 52%,
            rgba(255, 255, 255, 0) 72%
          );
        }

        .color-range::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid #4b5563;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
        }

        .color-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #f8fafc;
          border: 2px solid #4b5563;
          cursor: pointer;
        }
      `}</style>
    </aside>
  );
}

function FilterSection({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-7 py-6 text-left"
      >
        <span className="text-[14px] font-bold text-slate-950">{title}</span>

        {isOpen ? (
          <FiChevronUp className="text-lg text-slate-700" />
        ) : (
          <FiChevronDown className="text-lg text-slate-700" />
        )}
      </button>

      {isOpen && <div className="space-y-3 px-7 pb-6">{children}</div>}
    </div>
  );
}

function RadioItem({ name, label, value, selected, setSelected, helpText }) {
  const active = selected === value;

  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={active}
        onChange={() => setSelected(value)}
        className="sr-only"
      />

      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          active ? "border-orange-500" : "border-slate-300"
        }`}
      >
        {active && <span className="h-3 w-3 rounded-full bg-orange-500" />}
      </span>

      <span className="flex items-center gap-1 text-[14px] text-slate-500">
        {label}
        {helpText && (
          <span title={helpText}>
            <FiHelpCircle className="text-[16px] text-slate-400" />
          </span>
        )}
      </span>
    </label>
  );
}

function SquareRadioItem({ label, value, selected, setSelected }) {
  const active = selected === value;

  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <input
        type="radio"
        name="orientation"
        value={value}
        checked={active}
        onChange={() => setSelected(value)}
        className="sr-only"
      />

      <span
        className={`flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-[3px] border transition ${
          active
            ? "border-orange-500 bg-orange-500"
            : "border-slate-300 bg-white"
        }`}
      >
        {active && (
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 fill-none stroke-white stroke-[3]"
          >
            <path d="M5 12.5l4.2 4.2L19.5 6.8" />
          </svg>
        )}
      </span>

      <span className="text-[14px] text-slate-500">{label}</span>
    </label>
  );
}