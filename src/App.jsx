import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
