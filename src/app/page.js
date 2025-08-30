import Benefits from "../../components/Benefits";
import Comment from "../../components/Comments";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Statistic from "../../components/Statistic";
import Why from "../../components/Why";
import VideoYoutube from "../../components/Youtube";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Why />
      <Comment />
      <Benefits />
      <VideoYoutube />
      <Statistic />
      <Footer />
    </div>
  );
}
