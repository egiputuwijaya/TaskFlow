import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Statistic from "../../components/Statistic";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Statistic />
      <Footer />
    </div>
  );
}
