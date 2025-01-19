import React from "react";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Explore from "./components/TeamImage";
import SectionGrid from "./components/SectionGrid";




function App() {
  return (
    <div className="App">
      <Explore />
      <SectionGrid />
      <Gallery />
      <FAQ></FAQ>
  </div>
  );
}

export default App;
