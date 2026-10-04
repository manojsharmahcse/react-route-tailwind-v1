import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";

import Home from "./page/public/Home";
import AboutUs from "./page/public/AboutUs";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<AboutUs />} />        
        </Route>
      </Routes>
    </>
  );
}

export default App;
