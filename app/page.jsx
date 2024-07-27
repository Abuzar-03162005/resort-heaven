import AboutUs from "@/components/main/AboutUs";
import Cards from "@/components/main/Cards";
import Dishes from "@/components/main/Dishes";
import Footer from "@/components/main/Footer";
import LandingPage from "@/components/main/LandingPage";
import Reservation from "@/components/main/Reservation";
import Team from "@/components/main/Team";
import WhoWeAre from "@/components/main/WhoWeAre";
export default function Home() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <Cards />
      <Dishes />
      <WhoWeAre />
      <Team />
      <Reservation />
      <Footer />
    </>
  );
}
