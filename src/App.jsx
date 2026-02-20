import React from "react";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />

      {/* Temporary Scroll Test */}
      <main style={{ minHeight: "200vh", paddingTop: "40px" }}>
        <h1>Scroll Test Area</h1>
        <p>Scroll to see header shrink.</p>
      </main>
    </>
  );
}

export default App;