import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Book from "./components/Book";
import About from "./components/About";
import Fleet from "./components/Fleet";
import Banner from "./components/Banner";
import OurTestimonial from "./components/OurTestimonial";
import People from "./components/People";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Book />
      <About />
      <Fleet />
      <Banner />
      <OurTestimonial />
      <People />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
