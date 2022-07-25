import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//Import COntext provider
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

//Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Contact from "./pages/Contact";

// import component
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Store />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
