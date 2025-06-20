import React from "react";
import MainNavigation from "./components/MainNavigation";
import Hero from "./components/Hero";
import Fetures from "./components/Fetures";

const App: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Hero />
        <Fetures />
      </main>
    </>
  );
};

export default App;
