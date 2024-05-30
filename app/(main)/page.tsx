import WelcomeBanner from "@/app/components/WelcomeBanner";
import Explore from "@/app/components/Explore";
import FeaturedActivityCarousel from "@/app/components/FeaturedActivityCarousel/Carousel";
import { FC } from "react";
import RelatedArticles from "../components/RelatedArticles";
import DailyChecklist from "../components/DailyChecklist";
import { auth } from "@/auth";

const Dashboard: FC = async () => {
  const session = await auth();
  console.log(session);
  // if (!session?.user.email) return null;
  return (
    <div>
      <WelcomeBanner user="Gavin" />
      <div className="relative">
        <DailyChecklist className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2" />
        <FeaturedActivityCarousel />
      </div>
      <Explore />
      <RelatedArticles header="Summer Box" />
    </div>
  );
};

export default Dashboard;
