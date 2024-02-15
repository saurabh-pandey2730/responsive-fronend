import React from "react";

import Navbar from "./components/Navbar/Navbar";

  import Slider  from './components/Header/Slider'
import FooterComponent from "./components/Header/Footer";
const App = () => {
  return (
    <>
    
      
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
      >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          Items every customers should have
        </h1>
        <div className="text-xl">
        <button className="bg-[#2c7fe4] text-white  px-6 py-2 rounded-full">
      Getting Started
    </button>
        </div>
      </div>
    </section>
    <Slider/>
    <FooterComponent/>
      </>
  );
};

export default App;
