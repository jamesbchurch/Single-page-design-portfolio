import "./App.css";
import ContactSlice from "./components/ContactSlice/ContactSlice";
import HeroSlice from "./components/HeroSlice/HeroSlice";
import NavSlice from "./components/NavSlice/NavSlice";
import ServicesSlice from "./components/ServicesSlice/ServicesSlice";

function App() {
  return (
    <div className="App">
      <NavSlice />
      <ServicesSlice />
      <HeroSlice />
      <ContactSlice />
    </div>
  );
}

export default App;
