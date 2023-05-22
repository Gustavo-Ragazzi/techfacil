import BannerCategory from "./components/BannerCategory"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemCard from "./components/ItemCard"
import ItemDisplayCarousel from "./components/ItemDisplayCarousel"
import MainCarousel from "./components/MainCarousel"
import SectionTitle from "./components/SectionTitle"

function App() {
  return (
    <>
      <div className="font-poppins bg-gray-900">
        <Header />
        <div className="lg:w-2/3 lg:m-auto bg-orange-100">
          <SectionTitle>Novidades</SectionTitle>
          <MainCarousel />
          <ItemCard />
          <SectionTitle>Conheça nossos produtos</SectionTitle>
          <ItemDisplayCarousel />
          <BannerCategory />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App