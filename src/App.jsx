import React, { createContext, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router";

//Layout Intro React JS
import Home from "./Home";
import About from "./About";

//State Management
import StateGlobal from "./stateManagement/StateGlobal";

//React Intro
import ReactIntro from "./components/ReactIntro/Home";

//Layouting Responsive
import Responsive from "./components/Responsive";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("Dark");
  const Value = {
    theme,
    setTheme,
  };
  return (
    <>
      <ThemeContext.Provider value={Value}>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/state" element={<StateGlobal />} />
            <Route path="/intro" element={<ReactIntro />} />
            <Route path="/responsive" element={<Responsive />} />
          </Routes>
        </ChakraProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
