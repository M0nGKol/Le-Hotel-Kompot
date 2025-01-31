import AccommodationsSection from "@/components/AccommodationsSection/page";
import FeaturedRoomSection from "@/components/FeaturedRoomSection/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import HeroSection from "@/components/HeroSection/page";
import InThePressSection from "@/components/InThePressSection/page";
import PromotionSection from "@/components/PromotionSection/page";

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AccommodationsSection/>
    <FeaturedRoomSection/>
    <PromotionSection/>
    <InThePressSection/>
    <Footer/>
    </>

  );
}
