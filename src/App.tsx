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
        <SectionTitle>Categorias</SectionTitle>
      </div>
    </>
  )
}

export default App
