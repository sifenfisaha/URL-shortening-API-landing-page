import React from "react";
import MainNavigation from "./components/MainNavigation";
import Hero from "./components/Hero";
import Fetures from "./components/Fetures";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Hero />
        <Fetures />
      </main>
      <Footer />
    </>
  );
};

export default App;
