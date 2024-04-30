import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import BudayaPage from "./pages/BudayaPage";
import beritaPage from "./pages/beritaPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/budaya" Component={BudayaPage}></Route>
        <Route path="/berita" Component={beritaPage}></Route>
        <Route path="/faq" Component={FaqPage}></Route>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
