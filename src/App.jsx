import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NoviCTA from "./components/NoviCTA";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NoviCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
