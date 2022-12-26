import "./App.css";
import CarouselSlice from "./components/CarouselSlice/CarouselSlice";
import ContactSlice from "./components/ContactSlice/ContactSlice";
import HeadingSlice from "./components/HeadingSlice/HeadingSlice";
import HeroSlice from "./components/HeroSlice/HeroSlice";
import NavSlice from "./components/NavSlice/NavSlice";
import ServicesSlice from "./components/ServicesSlice/ServicesSlice";

function App() {
  return (
    <div className="App">
      <NavSlice />
      <HeadingSlice />
      <ServicesSlice />
      <HeroSlice />
      <CarouselSlice />
      <ContactSlice />
    </div>
  );
}

export default App;
