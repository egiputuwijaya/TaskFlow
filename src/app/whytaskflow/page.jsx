import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import WhyDifferent from "./components/Whydifferent";
import WhyFAQ from "./components/WhyFAQ";
import WhyHero from "./components/Whyhero";
import WhySupport from "./components/Whysupport";
import WhyValue from "./components/Whyvalue";

export default function WhyTaskFlow() {
  return (
    <div className="">
      <Navbar />
      <WhyHero />
      <WhyValue />
      <WhySupport />
      <WhyDifferent />
      <WhyFAQ />
      <Footer />
    </div>
  );
}
