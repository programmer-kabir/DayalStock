import BestCreatorCommunity from "../components/Home/BestCreatorCommunity";
import BrowseContent from "../components/Home/BrowseContent";
import Hero from "../components/Home/Hero";
import JoinProSection from "../components/Home/JoinProSection";
import PopularImages from "../components/Home/PopularImages";
import PopularVectors from "../components/Home/PopularVectors";
import WhyDayalStock from "../components/Home/WhyDayalStock";
import CTASection from "../components/Home/CTASection";
import { useParams } from "react-router-dom";
import CategoryContent from "../components/BrowseContent/CategoryContent";

const HomePage = () => {
    const { category } = useParams();



  return (
    <div>
 <div>
      <Hero />
      <BrowseContent />

      {category ? (
        <CategoryContent />
      ) : (
        <>
          <PopularImages />
          <PopularVectors />
          <WhyDayalStock />
          <JoinProSection />
          <BestCreatorCommunity />
          <CTASection />
        </>
      )}
    </div>
    </div>
  );
};

export default HomePage;
