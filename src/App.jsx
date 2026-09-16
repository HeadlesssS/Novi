import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoviCTA from "./components/NoviCTA";
import ProductPage from "./components/ProductPage";

import "./App.css";

function App() {
  const isProductPage = window.location.pathname === "/product";

  return (
    <>
      <Navbar />

      <main>
        {isProductPage ? (
          <ProductPage />
        ) : (
          <>
            <Hero />
            <Features />
            
          </>
        )}
      </main>
        <NoviCTA />
      <Footer />
    </>
  );
}

export default App;