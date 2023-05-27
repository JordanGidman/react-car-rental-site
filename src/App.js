import "./App.css";
import "./queries.css";
import React from "react";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
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
  // const [nav, setNav] = React.useState(<Navbar />);
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
      {/* {nav} */}
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
