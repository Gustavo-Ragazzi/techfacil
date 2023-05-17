import BannerCategory from "./components/BannerCategory"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemDisplayCarousel from "./components/ItemDisplayCarousel"
import MainCarousel from "./components/MainCarousel"
import SectionTitle from "./components/SectionTitle"

function App() {
  return (
    <>
      <div className="font-poppins">
        <Header />
        <MainCarousel />
        <SectionTitle>Conheça nossos produtos</SectionTitle>
        <ItemDisplayCarousel />
        <BannerCategory />
        <Footer />
      </div>
    </>
  )
}

export default App