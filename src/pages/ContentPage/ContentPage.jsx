import { useParams } from "react-router-dom";
import SidebarFilters from "../../components/ContentPage/SidebarFilters";
import ContentArea from "../../components/ContentPage/ContentArea";
import { useState } from "react";
import useContents from "../../utlis/Hooks/useContents";
import useCategories from "../../utlis/Hooks/useCategories";

export default function ContentPage() {
  const { category, subcategory } = useParams();

  const [licenseType, setLicenseType] = useState("all");
  const [aiGenerated, setAiGenerated] = useState("all");
  const [orientation, setOrientation] = useState("horizontal");
  const [hexColor, setHexColor] = useState("");
  const [baseColor, setBaseColor] = useState("#FFFFFF");
  const [colorIntensity, setColorIntensity] = useState(100);
  const [colorPosition, setColorPosition] = useState({
    x: 50,
    y: 50,
  });

  const { data: contents = [], isLoading, error } = useContents();

  const {
    data: categories = [],
    isLoading: isCategoryLoading,
    error: isCategoryError,
  } = useCategories();

  const currentSubCategory = categories?.find(
    (cat) => cat.slug === subcategory,
  );
  const currentCategory = categories?.find(
    (cat) => Number(cat.id) === Number(currentSubCategory?.parent_id),
  );
  const currentContents = contents.filter(
    (content) =>
      Number(content?.subcategory_id) === Number(currentSubCategory?.id),
  );

  return (
    <div className="min-h-screen">
      {/* <SearchBar /> */}

      <div className="flex">
        <SidebarFilters
          licenseType={licenseType}
          setLicenseType={setLicenseType}
          aiGenerated={aiGenerated}
          setAiGenerated={setAiGenerated}
          hexColor={hexColor}
          setHexColor={setHexColor}
          setOrientation={setOrientation}
          orientation={orientation}
          baseColor={baseColor}
          setBaseColor={setBaseColor}
          colorIntensity={colorIntensity}
          setColorIntensity={setColorIntensity}
          colorPosition={colorPosition}
          setColorPosition={setColorPosition}
        />
        <ContentArea
          contents={currentContents}
          category={category}
          subcategory={subcategory}
        />
      </div>
    </div>
  );
}
