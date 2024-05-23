import "./App.css";

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
