import "./App.css";
import Home from "./pages/home";
import "./assets/styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className="App bg-neutral-900">
      <Home />
    </div>
  );
}

export default App;
