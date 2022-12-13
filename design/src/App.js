import "./App.css";
import HeroSlice from "./components/HeroSlice/HeroSlice";
import NavSlice from "./components/NavSlice/NavSlice";
import ServicesSlice from "./components/ServicesSlice/ServicesSlice";

function App() {
  return (
    <div className="App">
      <NavSlice />
      <ServicesSlice />
      <HeroSlice />
    </div>
  );
}

export default App;
