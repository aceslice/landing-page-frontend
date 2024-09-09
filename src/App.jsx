import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import "./css/style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Price />
      <Footer />
    </div>
  );
}
export default App;
