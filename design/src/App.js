import "./App.css";
import HeroSlice from "./components/HeroSlice/HeroSlice";
import NavSlice from "./components/NavSlice/NavSlice";

function App() {
  return (
    <div className="App">
      <NavSlice />
      <HeroSlice />
    </div>
  );
}

export default App;
