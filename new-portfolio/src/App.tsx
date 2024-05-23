import "./App.css";

import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/Layout";
import ContactMe from "./Routes/ContactMe";
import AboutMe from "./Routes/AboutMe";
import Photography from "./Routes/Photography";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Layout />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/photography" element={<Photography />} />
      </Routes> */}
    </div>
    // </ThemeProvider>
  );
};

export default App;
