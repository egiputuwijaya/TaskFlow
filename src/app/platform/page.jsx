import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PlatformIntegration from "./components/Platformintegration";
import PlatformHero from "./components/Platfromhero";

export default function Platform() {
  return (
    <div className="">
      <Navbar />
      <PlatformHero />
      <PlatformIntegration />
      <Footer />
    </div>
  );
}
