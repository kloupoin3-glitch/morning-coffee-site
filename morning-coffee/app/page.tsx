import Header from "./components/header"
import Hero from "./components/hero"
import VideoSection from "./components/video-section"
import DailyQuote from "./components/daily-quote"
import Playlists from "./components/playlists"
import Subscribe from "./components/subscribe"
import Support from "./components/support"
import Footer from "./components/footer"


export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <DailyQuote />
        <Playlists />
        <Subscribe />
        <Support />
      </main>
      <Footer />
    </>
  )
}
