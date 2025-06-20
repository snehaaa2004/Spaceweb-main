import React from "react";
import bgVideo from "./assets/earth-bg.mp4";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Footer from "./Components/Footer/Footer";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <Banner2 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
