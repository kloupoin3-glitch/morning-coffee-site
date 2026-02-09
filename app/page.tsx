import Header from "./components/header";
import Hero from "./components/hero";
import VideoSection from "./components/video-section";
import DailyQuote from "./components/daily-quote";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <DailyQuote />
      <Footer />
    </>
  );
}
